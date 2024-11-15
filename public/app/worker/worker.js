importScripts('https://d3js.org/d3.v6.js');

// Declare simulation and data globally
let simulation;
let nodes = [];
let links = [];

self.onmessage = (event) => {
  const { type } = event.data;

  if (type === 'init') {
    // Extract data and initialize simulation
    const { width, height, nodes: inputNodes, links: inputLinks } = event.data;
    
    // Assign new data to global scope
    nodes = inputNodes.map(node => ({ ...node })); // Ensure data is not mutated
    links = inputLinks.map(link => ({ ...link })); // Ensure data is not mutated

    // Create or restart the simulation
    if (simulation) {
      simulation.nodes(nodes)
                .force("link").links(links)
                .alpha(1).restart();
    } else {
      // Initialize the simulation if not already created
      simulation = d3.forceSimulation(nodes)
        .force("link", d3.forceLink(links).id(d => d.id))
        .force("charge", d3.forceManyBody().strength(-15))
        .force("center", d3.forceCenter(width / 2, height / 2))
        .on("tick", () => {
          self.postMessage({ nodes, links, type: 'tick' });
        })
        .on("end", () => {
          self.postMessage({ nodes, links, type: 'end' });
        });
    }
  } else if (type === 'dragStart') {
    // Handle node dragging
    const { nodeIndex, x, y } = event.data;
    nodes[nodeIndex].fx = x;
    nodes[nodeIndex].fy = y;
    simulation.alphaTarget(0.3).restart();
  } else if (type === 'dragEnd') {
    // Release the node's fixed position
    const { nodeIndex } = event.data;
    nodes[nodeIndex].fx = null;
    nodes[nodeIndex].fy = null;
    simulation.alphaTarget(0);
  }
};
