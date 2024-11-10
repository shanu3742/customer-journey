  import SelectBox from "/component/SelectBox.js";
  // import data  from '/coustomer/journey/getData'
 let data={};
 let customerData = {}
  const fetchData =async  () => {
    let result = await fetch('/coustomer/journey/getData');
    data = await result.json();
    customerData = JSON.parse(JSON.stringify(data));
    draw(customerData)
  }
  fetchData()
  
let isDoubleClickOn = false;


// Attach a change event listener


const draw = (customerList) => {
  const networkData = {
    nodes: [],
    links: []

  }

  networkData.nodes.push(
    {
      "id": `${customerList.name}-${1 + Math.floor((Math.random()) * 100)}`,
      "name": customerList.name,
      "type": "app"
    },
  )


  const getNetworkData = (actionDetails, currentNodeId, userId, profit, actionCount = 0) => {
    const actionNodeId = `${userId}-${actionCount}`;
    const node = {
      "id": actionNodeId,
      "name": actionDetails.action,
      "type": 'journey'
    };
    if (actionDetails.next === null) {
      node.profit = profit;
    }
    const link = {
      source: currentNodeId,
      target: actionNodeId
    };

    networkData.nodes.push(node);
    networkData.links.push(link);

    if (actionDetails.next === null) {
      return;
    } else if (Array.isArray(actionDetails.next)) {
      // Handle each next action if it is an array
      actionDetails.next.forEach((nextAction, index) => {

        let nodeId = actionCount + 'next' + index + 1;
        getNetworkData(nextAction, actionNodeId, userId, profit, nodeId);
      });
    } else {
      // Handle the single next action
      getNetworkData(actionDetails.next, actionNodeId, userId, profit, actionCount + 1);
    }
  };

  customerList.users.forEach((user) => {
    const node = {
      "id": user.id,
      "name": user.name,
      "type": 'user',
      'uniqueClass': 'name'
    };
    networkData.nodes.push(node);

    const link = {
      source: networkData.nodes[0].id,
      target: user.id
    };

    networkData.links.push(link);
    if (user.next) {
      getNetworkData(user.next, user.id, user.id, user.profit);
    }
  });




  const maxPurched = d3.max(customerList.users, (user) => user.profit)
  console.log(networkData)

  // set the dimensions and margins of the graph
  var margin = { top: 50, right: 30, bottom: 30, left: 80 },
    width = window.innerWidth - margin.left - margin.right,
    height = window.innerHeight - margin.top - margin.bottom;

  const journeyStatus = [
    {
      app: 'application name'
    },
    {
      user: 'user name'
    },
    {
      purchase: 'Purchase completed'
    },
    {
      abandoned: 'Cart Abandoned'
    },
    {
      intermediary: 'Intermediary action taken by customer'
    }
  ];
  const color = {
    app: '#fff7b9',
    user: '#41dc8e',
    purchase: '#2970ac',
    abandoned: '#fd150b',
    intermediary: '#ffc33b'
  }

  const selectorId = "#my_dataviz"
  // append the svg object to the body of the page
  const graphConatiner = d3.select(selectorId)
    .attr('class', 'flex-box');
  const legendContainer = graphConatiner.selectAll('div.legend')
    .data([1])
    .join('div')
    .attr('class', 'legend')

  let legend = legendContainer.selectAll('div.legend-container')
    .data(journeyStatus)
    .join('div')
    .attr('class', 'legend-container')

  legend.selectAll('div.box')
    .data((d) => [d])
    .join('div')
    .attr('class', 'box')
    .style('background', (d) => color[Object.keys(d)[0]])


  legend.selectAll('div.legend-text')
    .data((d) => [d])
    .join('div')
    .attr('class', 'legend-text')
    .text((d) => d[Object.keys(d)[0]])
    .style('color', 'white')

  var svg = graphConatiner
    .selectAll("svg")
    .data([1])
    .join('svg')
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .selectAll("g#graph-area")
    .data((d) => [d])
    .join('g')
    .attr('id', 'graph-area')
    .attr("transform",
      "translate(" + margin.left + "," + margin.top + ")");

  let rect = svg.selectAll('rect.overlay').data([1]).join('rect').attr('class', 'overlay').attr('width', width).attr('height', height).attr('fill', 'transparent')

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

  // Let's list the force we wanna apply on the network
  var simulation = d3.forceSimulation(networkData.nodes)                 // Force algorithm is applied to data.nodes
    .force("link", d3.forceLink()                               // This force provides links between nodes
      .id(function (d) { return d.id; })                     // This provide  the id of a node
      .links(networkData.links)                                    // and this the list of links
    )
    .force("charge", d3.forceManyBody().strength(-15))         // This adds repulsion between nodes. Play with the -400 for the repulsion strength
    .force("center", d3.forceCenter(width / 2, height / 2))     // This force attracts nodes to the center of the svg area
    .on("tick", ticked)
    .on("end", ticked);


  const radiusScale = d3.scaleLinear().domain([0, maxPurched]).range([5, 19]);




  // Initialize the links
  var link = svg
    .selectAll("line")
    .data(networkData.links)
    .join("line")
    .style("stroke", "#d4d4d4")
    .attr('opacity', 0.4)
    .attr('class', (d) => {
      let id = d.target.id.split('-')[0];
      return `${id} ${d.target.uniqueClass ? d.target.uniqueClass : ''}`
    })


  // Initialize the nodes
  var text = svg
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
  var node = svg
    .selectAll("circle")
    .data(networkData.nodes)
    .join("circle")
    .attr("r", (d) => {
      return d?.profit ? radiusScale(d.profit) : 5
    })
    .style("fill", (d) => {
      return d.id === networkData.nodes[0].id ? "#fff7b9" : d.type === 'user' ? '#41dc8e' : d.name === 'purched' ? "#2970ac" : d.name === 'Abandoned' ? '#fd150b' : '#ffc33b'
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


  // This function is run at each iteration of the force algorithm, updating the nodes position.
  function ticked() {
    link
      .attr("x1", function (d) { return d.source.x; })
      .attr("y1", function (d) { return d.source.y; })
      .attr("x2", function (d) { return d.target.x; })
      .attr("y2", function (d) { return d.target.y; });

    node
      .attr("cx", function (d) { return d.x; })
      .attr("cy", function (d) { return d.y; });



    text
      .attr("x", function (d) { return d.x; })
      .attr("y", function (d) { return d.y; });
  }




}




const onSelectBoxChange = (e) => {
  // Get the selected option's value
  const selectedOption = e.target.value;

  // Log the selected option or perform other actions
  console.log("Selected option:", selectedOption);

  if (selectedOption === 'name') {

    let result = {
      ...data, users: data.users.map((el) => {
        return {
          name: el.name,
          id: el.id
        }
      })
    }
    console.log('result', result)
    customerData = JSON.parse(JSON.stringify(result));

  }
  if (selectedOption === 'name') {

    let result = {
      ...data, users: data.users.map((el) => {
        return {
          name: el.name,
          id: el.id
        }
      })
    }
    console.log('result', result)
    customerData = JSON.parse(JSON.stringify(result));

  }

  if (selectedOption === 'purched') {

    let result = {
      ...data, users: data.users.filter((el) => {
        let stringObject = JSON.stringify(el).toLocaleLowerCase();

        return stringObject.includes(selectedOption.toLocaleLowerCase())
      })
    }
    console.log('result', result)
    customerData = JSON.parse(JSON.stringify(result));

  }

  if (selectedOption === 'Abandoned') {
    let result = {
      ...data, users: data.users.filter((el) => {
        let stringObject = JSON.stringify(el).toLocaleLowerCase();

        return stringObject.includes(selectedOption.toLocaleLowerCase())
      })
    }
    console.log('result', result)
    customerData = JSON.parse(JSON.stringify(result));
  }

  if (selectedOption === 'All') {
    customerData = JSON.parse(JSON.stringify(data));
  }

  draw(customerData)
}

let selectBoxComp = new SelectBox(['All', 'purched', 'Abandoned', 'name']);

selectBoxComp.addparent('select')
             .addChild('select-box')
             .onChange(onSelectBoxChange)





