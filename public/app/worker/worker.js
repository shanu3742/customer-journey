importScripts('https://d3js.org/d3.v6.js');

// Declare simulation outside the onmessage handler
let simulation;
let nodes=[];
let links= [];

self.onmessage = (event) => {

    if (event.data.type ==='init') {
            const { width, height } = event.data;
            //get the node data when simulation run first time
            //and stor it in global scope of worker file 
            // if(!nodes.length && !links.length){
            nodes=[];
            links=[];
                nodes = event.data.nodes;
                links = event.data.links;
            // }
            // Initialize the simulation only if it hasn't been created yet
            //and also store the simulation in global scope of worker file 
            simulation=null;
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
    }else{
            if(event.data.type ==='dragStart'){
                //get the drag cordinate and update the draging node for the fix cordinate 
                const { nodeIndex, x, y } = event.data;
                nodes[nodeIndex].fx = x;
                nodes[nodeIndex].fy = y;

                // restart the simulation  
                simulation.alphaTarget(0.3).restart();
            }
            if(event.data.type === 'dragEnd'){
                const { nodeIndex } = event.data;
                //relase the node from fixed cordinate 
                nodes[nodeIndex].fx = null;
                nodes[nodeIndex].fy = null;
                simulation.alphaTarget(0)
            }
    }

    
};
