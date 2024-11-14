importScripts('https://d3js.org/d3.v6.js');

// Declare simulation outside the onmessage handler
let simulation;

self.onmessage = (event) => {
    const { nodes, links, width, height, type } = event.data;

    if (type === 'play') {
        // Initialize the simulation only if it hasn't been created yet
        if (!simulation) {
            simulation = d3.forceSimulation(nodes)
                .force("link", d3.forceLink()
                    .id(d => d.id)
                    .links(links)
                )
                .force("charge", d3.forceManyBody().strength(-15))
                .force("center", d3.forceCenter(width / 2, height / 2))
                .on("tick", () => {
                    self.postMessage({ nodes: nodes, links: links, type: 'tick' });
                })
                .on("end", () => {
                    self.postMessage({ nodes: nodes, links: links, type: 'end' });
                });
        } else {
            // Restart the simulation if it's already initialized
            simulation.alphaTarget(0.3).restart()
        }
    }

    if (type === 'resume') {
        if (simulation) {
            simulation.alphaTarget(0.3).restart();
        }
    }

    if (type === 'stop') {
        if (simulation) {
            console.log(simulation); // Now this should print the simulation object
            simulation.alphaTarget(0); // Stop the simulation
        }
    }
};
