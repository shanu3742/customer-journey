import CoustomerAdapter from "/app/adapter/Coustomer.journey.js";
let networkadapter = new CoustomerAdapter();
const MARGIN = { top: 50, right: 30, bottom: 30, left: 80 };
const DEFAULT_HEIGHT = 500;
const DEFAULT_WIDTH = 500;
const MIN_RADIUS=5;
const MAX_RADIUS=19;
let myWorker = new Worker('/app/worker/worker.js');
class CustomerJourneyGraph {
  svgContainer = null;
  svg = null;
  nodeEl = null;
  linkEl = null;
  textEl = null
  width = DEFAULT_WIDTH;
  height = DEFAULT_HEIGHT;
  chartData = {};
  legendDetails;
  networkData;
  isResize = false;
  isDoubleClickOn = false;
  timeOutId;
  isMessageRecived=false;
  tickCount =0;
  constructor() { }
  setWidth(width = 400) {
    this.width = width - MARGIN.left - MARGIN.right;
    this.svgContainer.attr('width', this.width + MARGIN.left + MARGIN.right);
    return this;
  }
  setHeight(height = 400) {
    this.height = height - 60 - MARGIN.top - MARGIN.bottom;
    this.svgContainer.attr('height', this.height + MARGIN.top + MARGIN.bottom)
    return this;
  }
  legend(legend) {
    this.legendDetails = legend;
    return this;
  }
  select(id) {
    this.svgContainer = d3.select(`${id}`)
      .selectAll(`svg`)
      .data([1])
      .join('svg')
      .attr("width", this.width + MARGIN.left + MARGIN.right)
      .attr("height", this.height + MARGIN.top + MARGIN.bottom)

    this.svg = this.svgContainer
      .selectAll("g#graph-area")
      .data((d) => [d])
      .join('g')
      .attr('id', 'graph-area')
      .attr("transform",
        "translate(" + MARGIN.left + "," + MARGIN.top + ")");
    return this;
  }

  data(chartData) {
    this.chartData = chartData;
    this.networkData = networkadapter.coustomerNetworkFactory(this.chartData)
    return this;
  }

  resize(callback) {
    // Clear any existing timeout
    if (this.timeOutId) {
      clearTimeout(this.timeOutId);
    }
    this.timeOutId = setTimeout(() => {
      callback(this)
      this.draw();
      clearTimeout(this.timeOutId)
    }, 2000)
  }
  draw() {
    let rect = this.svg.selectAll('rect.overlay').data([1]).join('rect').attr('class', 'overlay').attr('width', this.width).attr('height', this.height).attr('fill', 'transparent')
   
    /**
     * send message
     */
    myWorker.postMessage({nodes:this.networkData.nodes,links:this.networkData.links,width:this.width,height:this.height,type:'play'});

    /**
     * 
     * recived meessage
     */

    myWorker.onmessage = (event) => {
     let data = event.data;
    //  console.log('recived simulation data',data)
     this.isMessageRecived= true;
     if(this.tickCount===0){
      this.networkData.links=data.links;
      this.networkData.nodes= data.nodes;
      this.onTickStart()
     }else{
      this.#ticked(data.links,data.nodes)
     }
     this.tickCount = this.tickCount+1;
    //  console.log(this.tickCount)
    }

   //overlay clicked
    rect.on('click',this.#overlayClick)

  }

  onTickStart=() => {
    
    const maxPurched = d3.max(this.chartData.users, (user) => user.profit)
    const radiusScale = d3.scaleLinear().domain([0, maxPurched]).range([MIN_RADIUS,MAX_RADIUS]);
    console.log('link',this.networkData.links,this.isMessageRecived)
    // Initialize the links
    this.linkEl = this.svg.selectAll("line")
                      .data(this.networkData.links)
                      .join("line")
                      .style("stroke", "#d4d4d4")
                      .attr('opacity', 0.4)
                      .attr('class', (d) => {
                        let id = d.target.id.split('-')[0];
                        return `${id} ${d.target.uniqueClass ? d.target.uniqueClass : ''}`
                      })


    // Initialize the text
    this.textEl = this.svg.selectAll("text")
                          .data(this.networkData.nodes)
                          .join("text")
                          .attr('opacity', 0)
                          .attr('class', (d) => {
                            let className = d.id.split('-')[0];
                            return className;
                          })
                          .text((d) => d.name)
                          .attr("dx", (d) => {
                            return d?.profit ? radiusScale(d.profit) : 5
                          })
                          .attr('fill', 'white')
                          .attr('id', (d) =>  d.id)
                          .style('user-select', 'none')


    // Initialize the nodes
    this.nodeEl = this.svg.selectAll("circle")
                            .data(this.networkData.nodes)
                            .join("circle")
                            .attr("r", (d) => {
                              return d?.profit ? radiusScale(d.profit) : 5
                            })
                            .style("fill", (d) => {
                              return d.id === this.networkData.nodes[0].id ? this.legendDetails.app.color : d.type === 'user' ? this.legendDetails.user.color : d.name === 'purched' ? this.legendDetails.purchase.color : d.name === 'Abandoned' ? this.legendDetails.abandoned.color : this.legendDetails.intermediary.color
                            })
                            .attr('opacity', 1)
                            .attr('class', (d) => {
                              let className = d.id.split('-')[0];
                              return `${className} ${d.uniqueClass ? d.uniqueClass : ''}`;
                            })
                            .on('dblclick',this.#nodeDoubleClick)
                            .on('mouseover',this.#nodeEnter)
                            .on('mouseout',this.#nodeMouseLeave)
                            // .call(drag());

  }

  #overlayClick =  () => {
    this.isDoubleClickOn = false;
    d3.selectAll('circle').transition().duration(500).attr('opacity', 1)
    d3.selectAll('line').transition().duration(500).attr('opacity', 0.4)
    d3.selectAll('text').transition().duration(500).attr('opacity', 0)
  }
  #nodeEnter =  (d, data) => {
    if (this.isDoubleClickOn) {
      return
    }
    d3.selectAll('circle').transition().duration(500).attr('opacity', 0.2)
    d3.select(d.target).transition().duration(500).attr('opacity', 1)
    d3.selectAll('line').transition().duration(500).attr('opacity', 0.2)
    d3.select(`text#${data.id}`).transition().duration(500).attr('opacity', 1)
  }
  #nodeMouseLeave = (d, data) => {
      if (this.isDoubleClickOn) {
          return
      }
      //highlight all line and node and hide all text on mouse leave
      d3.selectAll('circle').transition().duration(500).attr('opacity', 1)
      d3.selectAll('line').transition().duration(500).attr('opacity', 0.4)
      d3.select(`text#${data.id}`).transition().duration(500).attr('opacity', 0)
  }
  #nodeDoubleClick = (d, data, index) =>{
      if (index === 0 || this.isDoubleClickOn) {
        return;
      }
      this.isDoubleClickOn = true;
      let selectedCircleType = data.id.split("-")[0];
      //select first element that is app name
      let appIconNodesText = d3.select("text");
      //select all element with same class and highlight all the elment
      let selectedCircle = d3.selectAll(`circle.${selectedCircleType}`);
      selectedCircle.attr("opacity", 1);
      let selectedline = d3.selectAll(`line.${selectedCircleType}`);
      selectedline.attr("opacity", 0.4);
      let selectedText = d3.selectAll(`text.${selectedCircleType}`);
      let nodes = d3.selectAll("circle");
      let link = d3.selectAll("line");

      let deseletedFilterNode = nodes.filter((el, i) => {
        return !el.id.includes(selectedCircleType) && i !== 0;
      });
      let deseletedFilterLine = link.filter((el) => {
        return !el.target.id.includes(selectedCircleType);
      });
      //highlight the selected node text and deselected the all other text
      appIconNodesText.transition().duration(500).attr("opacity", 1);
      selectedText.transition().duration(500).attr("opacity", 1);
      deseletedFilterLine.transition().duration(500).attr("opacity", 0);
      deseletedFilterNode.transition().duration(500).attr("opacity", 0);

  }

  // This function is run at each iteration of the force algorithm, updating the nodes position.
  #ticked = (links,nodes) => {
    this.linkEl
      .data(links)
      .attr("x1", function (d) { return d.source.x; })
      .attr("y1", function (d) { return d.source.y; })
      .attr("x2", function (d) { return d.target.x; })
      .attr("y2", function (d) { return d.target.y; });

    this.nodeEl
      .data(nodes)
      .attr("cx", function (d) { return d.x; })
      .attr("cy", function (d) { return d.y; });



    this.textEl
      .data(nodes)
      .attr("x", function (d) { return d.x; })
      .attr("y", function (d) { return d.y; });
  }


}

export default CustomerJourneyGraph;