import CoustomerAdapter from "/app/adapter/Coustomer.journey.js";
let networkadapter = new CoustomerAdapter();
const MARGIN = { top: 50, right: 30, bottom: 30, left: 80 };

class CustomerJourneyGraph {
    svg=null;
    nodeEl=null;
    linkEl=null;
    textEl=null
    width=1000;
    height =1000;
    chartData={};
    legendDetails
    constructor(){}
    setWidth(){
        console.log('width',window.innerWidth)
     this.width = window.innerWidth - MARGIN.left - MARGIN.right;
     return this;
    }
    setHeight(){
        console.log('innerHeight',window.innerHeight)
        this.height = window.innerHeight-60 - MARGIN.top - MARGIN.bottom;
        return this;
    }
    legend(legend){
    this.legendDetails= legend;
    return this;
    }
    select(id){
        this.svg = d3.select(`${id}`)
                    .selectAll(`svg`)
                    .data([1])
                    .join('svg')
                    .attr("width", this.width + MARGIN.left + MARGIN.right)
                    .attr("height", this.height + MARGIN.top + MARGIN.bottom)
                    .selectAll("g#graph-area")
                    .data((d) => [d])
                    .join('g')
                    .attr('id', 'graph-area')
                    .attr("transform",
                    "translate(" + MARGIN.left + "," + MARGIN.top + ")");
        return this;
    }
    data(chartData){
        this.chartData= chartData;
        return this;
    }

    draw(){
        let isDoubleClickOn = false;
        let networkData = networkadapter.coustomerNetworkFactory(this.chartData)
        const maxPurched = d3.max(this.chartData.users, (user) => user.profit) 
        let rect = this.svg.selectAll('rect.overlay').data([1]).join('rect').attr('class', 'overlay').attr('width', this.width).attr('height', this.height).attr('fill', 'transparent')
      
        function drag(simulation) {
          function dragstarted(event) {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            event.subject.fx = event.subject.x;
            event.subject.fy = event.subject.y;
          }
      
          function dragged(event) {
            event.subject.fx = event.x;
            event.subject.fy = event.y;
          }
      
          function dragended(event) {
            if (!event.active) simulation.alphaTarget(0);
            event.subject.fx = null;
            event.subject.fy = null;
          }
      
          return d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended);
      
        }
        // This function is run at each iteration of the force algorithm, updating the nodes position.
        const ticked = () => {
            this.linkEl
              .attr("x1", function (d) { return d.source.x; })
              .attr("y1", function (d) { return d.source.y; })
              .attr("x2", function (d) { return d.target.x; })
              .attr("y2", function (d) { return d.target.y; });
        
            this.nodeEl
              .attr("cx", function (d) { return d.x; })
              .attr("cy", function (d) { return d.y; });
        
        
        
            this.textEl
              .attr("x", function (d) { return d.x; })
              .attr("y", function (d) { return d.y; });
          }
      
        // Let's list the force we wanna apply on the network
        var simulation = d3.forceSimulation(networkData.nodes)                 // Force algorithm is applied to data.nodes
          .force("link", d3.forceLink()                               // This force provides links between nodes
            .id(function (d) { return d.id; })                     // This provide  the id of a node
            .links(networkData.links)                                    // and this the list of links
          )
          .force("charge", d3.forceManyBody().strength(-15))         // This adds repulsion between nodes. Play with the -400 for the repulsion strength
          .force("center", d3.forceCenter(this.width / 2, this.height / 2))     // This force attracts nodes to the center of the svg area
          .on("tick", ticked)
          .on("end", ticked);
      
      
        const radiusScale = d3.scaleLinear().domain([0, maxPurched]).range([5, 19]);
      
      
      
      
        // Initialize the links
        this.linkEl = this.svg
          .selectAll("line")
          .data(networkData.links)
          .join("line")
          .style("stroke", "#d4d4d4")
          .attr('opacity', 0.4)
          .attr('class', (d) => {
            let id = d.target.id.split('-')[0];
            return `${id} ${d.target.uniqueClass ? d.target.uniqueClass : ''}`
          })
      
      
        // Initialize the text
        this.textEl = this.svg
          .selectAll("text")
          .data(networkData.nodes)
          .join("text")
          .attr('opacity', 0)
          .attr('class', (d) => {
            let className = d.id.split('-')[0];
            return className;
          })
          .text((d) => {
            return d.name
          })
          .attr("dx", (d) => {
            return d?.profit ? radiusScale(d.profit) : 5
          })
          .attr('fill', 'white')
          .attr('id', (d) => {
            let id = d.id;
            return id;
          })
      
      
        // Initialize the nodes
        this.nodeEl = this.svg
          .selectAll("circle")
          .data(networkData.nodes)
          .join("circle")
          .attr("r", (d) => {
            return d?.profit ? radiusScale(d.profit) : 5
          })
          .style("fill", (d) => {
            return d.id === networkData.nodes[0].id ?this.legendDetails.app.color: d.type === 'user' ? this.legendDetails.user.color: d.name === 'purched' ? this.legendDetails.purchase.color : d.name === 'Abandoned' ?this.legendDetails.abandoned.color : this.legendDetails.intermediary.color
          })
          .attr('opacity', 1)
          .attr('class', (d) => {
            let className = d.id.split('-')[0];
            return `${className} ${d.uniqueClass ? d.uniqueClass : ''}`;
          })
          .on('dblclick', function (d, data, index) {
            if (index === 0) {
              return
            }
            isDoubleClickOn = true;
            let selectedCircleType = data.id.split('-')[0];
            console.log(selectedCircleType);
            let appIconNodesText = d3.select('text')
            let selectedCircle = d3.selectAll(`circle.${selectedCircleType}`)
            selectedCircle.attr('opacity', 1);
      
            let selectedline = d3.selectAll(`line.${selectedCircleType}`);
            selectedline.attr('opacity', 0.4);
      
            let selectedText = d3.selectAll(`text.${selectedCircleType}`);
            let nodes = d3.selectAll('circle');
            let deseletedFilterNode = node.filter((el, i) => {
              console.log(el, i, 'index')
              return !el.id.includes(selectedCircleType) && i !== 0;
            })
      
            let link = d3.selectAll('line');
            let deseletedFilterLine = link.filter((el) => {
              return !el.target.id.includes(selectedCircleType);
            })
            appIconNodesText.transition().duration(500).attr('opacity', 1)
            selectedText.transition().duration(500).attr('opacity', 1)
            deseletedFilterLine.transition().duration(500).attr('opacity', 0)
            deseletedFilterNode.transition().duration(500).attr('opacity', 0)
      
          })
          .on('mouseover', function (d, data) {
            if (isDoubleClickOn) {
              return
            }
            d3.selectAll('circle').transition().duration(500).attr('opacity', 0.2)
            let seletcedNode = d3.select(this).transition().duration(500).attr('opacity', 1)
            d3.selectAll('line').transition().duration(500).attr('opacity', 0.2)
            console.log('mouseover d', data)
            d3.select(`text#${data.id}`).transition().duration(500).attr('opacity', 1)
          })
          .on('mouseout', function (d, data) {
            if (isDoubleClickOn) {
              return
            }
            d3.selectAll('circle').transition().duration(500).attr('opacity', 1)
            d3.selectAll('line').transition().duration(500).attr('opacity', 0.4)
            d3.select(`text#${data.id}`).transition().duration(500).attr('opacity', 0)
          })
          .call(drag(simulation));
      
      
      
        rect.on('click', () => {
          isDoubleClickOn = false;
          d3.selectAll('circle').transition().duration(500).attr('opacity', 1)
          d3.selectAll('line').transition().duration(500).attr('opacity', 0.4)
          d3.selectAll('text').transition().duration(500).attr('opacity', 0)
        })
      
      
        
      
      
      
      
      }
      

}

export default CustomerJourneyGraph;