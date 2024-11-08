let selectBoxContaioner = d3.selectAll('div.select')
  .data([1])
  .join('div')
  .attr('class', 'select')
let selectBox = selectBoxContaioner.selectAll('select#select-box')
  .data([1])
  .join('select')
  .attr('id', 'select-box')

let selectOption = ['All', 'purched', 'Abandoned', 'name'];
selectBox.selectAll('option')
  .data(selectOption)
  .join('option')
  .text((d) => d)
let isDoubleClickOn = false;
let data = {
  name: 'facebook',
  users: [
    {
      name: 'kumar 123',
      id: 'shanu123',
      image: '',
      profit: 200,
      next: {
        action: 'login',
        next: {
          action: 'about',
          next: [
            {
              action: 'Add another product',
              next: {
                action: 'purched',
                next: null
              }
            },
            {
              action: 'Buy Now',
              next: {
                action: 'purched',
                next: null
              }
            }
          ]


        }
      }
    },


    {
      name: 'rahul',
      image: '',
      id: 'rahul143',
      profit: 0,
      next: {
        action: 'login',
        next: {
          action: 'about',
          next: {
            action: 'Buy Now',
            next: {
              action: 'Abandoned',
              next: null
            }
          }


        }
      }
    },
    {
      name: 'ronak',
      image: '',
      id: 'ronak4323',
      profit: 0,
      next: {
        action: 'login',
        next: {
          action: 'about',
          next: {
            action: 'Buy Now',
            next: {
              action: 'Abandoned',
              next: null
            }
          }


        }
      }
    },
    {
      name: 'sohan',
      id: 'sohan4313',
      profit: 320,
      image: '',
      next: {
        action: 'login',
        next: {
          action: 'purched',
          next: null
        }
      }
    },
    {
      name: 'osho',
      id: 'osho2313',
      profit: 50,
      image: '',
      next: {
        action: 'login',
        next: {
          action: 'about',
          next: {
            action: 'purched',
            next: null
          }
        }
      }
    },
    {
      name: 'santosh',
      id: 'santosh313',
      profit: 550,
      image: '',
      next: {
        action: 'login',
        next: {
          action: 'purched',
          next: null
        }
      }
    },
    {
      name: 'aman',
      id: 'aman813',
      profit: 750,
      image: '',
      next: {
        action: 'login',
        next: {
          action: 'purched',
          next: null
        }
      }
    },
    {
      name: 'aarya',
      id: 'aarya414',
      profit: 0,
      image: '',
      next: {
        action: 'login',
        next: {
          action: 'Abandoned',
          next: null
        }
      }
    },
    {
      name: 'ankit',
      id: 'ankit34',
      profit: 140,
      image: '',
      next: {
        action: 'purched',
        next: null
      }
    },
    {
      name: 'srinivas',
      id: 'srinivas66',
      profit: 0,
      image: '',
      next: {
        action: 'login',
        next: {
          action: 'Abandoned',
          next: null
        }
      }
    },
    {
      name: 'karteek',
      id: "karteek1985",
      profit: 120,
      image: '',
      next: {
        action: 'purched',
        next: null
      }
    },
    {
      name: 'abhinav',
      id: "abhinav0812",
      profit: 0,
      image: '',
      next: {
        action: 'login',
        next: {
          action: 'about',
          next: {
            action: 'Buy Now',
            next: {
              action: 'Abandoned',
              next: null
            }
          }


        }
      }
    },
    {
      name: 'abhinav',
      id: "abhinaved0812",
      profit: 0,
      image: '',
      next: {
        action: 'login',
        next: {
          action: 'about',
          next: {
            action: 'Buy Now',
            next: {
              action: 'Abandoned',
              next: null
            }
          }


        }
      }
    },
    {
      name: 'abhinav',
      id: "abhinaddved0812",
      profit: 0,
      image: '',
      next: {
        action: 'login',
        next: {
          action: 'about',
          next: {
            action: 'Buy Now',
            next: {
              action: 'Abandoned',
              next: null
            }
          }


        }
      }
    },

    {
      name: 'abhinav',
      id: "abhi88dved0812",
      profit: 0,
      image: '',
      next: {
        action: 'login',
        next: {
          action: 'about',
          next: {
            action: 'Buy Now',
            next: {
              action: 'Abandoned',
              next: null
            }
          }


        }
      }
    },
    {
      name: 'kart2eek',
      id: "karteek0891985",
      profit: 100,
      image: '',
      next: {
        action: 'purched',
        next: null
      }
    },
    {
      name: 'kartee2k',
      id: "kartlek023891985",
      profit: 140,
      image: '',
      next: {
        action: 'purched',
        next: null
      }
    },
    {
      name: 'kart2eek',
      id: "karteek0289214985",
      profit: 200,
      image: '',
      next: {
        action: 'purched',
        next: null
      }
    },
    {
      name: 'kartieek',
      id: "karteeks089132985",
      profit: 140,
      image: '',
      next: {
        action: 'purched',
        next: null
      }
    },
    {
      name: 'kadrteek',
      id: "karteek089123985",
      profit: 350,
      image: '',
      next: {
        action: 'purched',
        next: null
      }
    },
    {
      name: 'kadrteeesk',
      id: "karteek0891fgd985",
      profit: 110,
      image: '',
      next: {
        action: 'purched',
        next: null
      }
    },
    {
      name: 'kadrte2eesk',
      id: "karteek08fdffd91fgd985",
      profit: 130,
      image: '',
      next: {
        action: 'purched',
        next: null
      }
    },

    {
      name: 'kadrte233eesk',
      id: "karteek08fdedffd91fgd985",
      profit: 140,
      image: '',
      next: {
        action: 'purched',
        next: null
      }
    },
    {
      name: 'kadwwrte233eesk',
      id: "karteekw08fdedffd91fgd985",
      profit: 540,
      image: '',
      next: {
        action: 'purched',
        next: null
      }
    },
    {
      name: 'kadwwrsks',
      id: "karteekwsksfd91fgd985",
      profit: 340,
      image: '',
      next: {
        action: 'purched',
        next: null
      }
    },
    {
      name: 'kadwwrsnys',
      id: "karteeknucd91fgd985",
      profit: 345,
      image: '',
      next: {
        action: 'purched',
        next: null
      }
    },
    {
      name: 'kadwwr2nys',
      id: "kartee291fgd985",
      profit: 345,
      image: '',
      next: {
        action: 'purched',
        next: null
      }
    },
    {
      name: 'srini3vas',
      id: 'srinivaes66',
      profit: 0,
      image: '',
      next: {
        action: 'login',
        next: {
          action: 'Abandoned',
          next: null
        }
      }
    },
    {
      name: 'srini3vdas',
      id: 'srinivaeds66',
      profit: 0,
      image: '',
      next: {
        action: 'login',
        next: {
          action: 'Abandoned',
          next: null
        }
      }
    },
    {
      name: 'srindwi3vas',
      id: 'srinivasdes66',
      profit: 0,
      image: '',
      next: {
        action: 'login',
        next: {
          action: 'Abandoned',
          next: null
        }
      }
    },
    {
      name: 'srini3wvas',
      id: 'srinivdwaes66',
      profit: 0,
      image: '',
      next: {
        action: 'login',
        next: {
          action: 'Abandoned',
          next: null
        }
      }
    },
    {
      name: 'srini3wqqvas',
      id: 'srinivawwes66',
      profit: 0,
      image: '',
      next: {
        action: 'login',
        next: {
          action: 'Abandoned',
          next: null
        }
      }
    },
    {
      name: 'srinhsjssh3vas',
      id: 'srinhsjssh3vas',
      profit: 0,
      image: '',
      next: {
        action: 'login',
        next: {
          action: 'Abandoned',
          next: null
        }
      }
    },
    {
      name: 'bhanu1243',
      id: "bhanu1283",
      profit: 345,
      image: '',
      next: {
        action: 'purched',
        next: null
      }
    },
    {
      name: 'bhanuwqwq1243',
      id: "bhanu128ww3",
      profit: 345,
      image: '',
      next: {
        action: 'purched',
        next: null
      }
    },
    {
      name: 'bhanu12sqdq43',
      id: "bhanu128sqed3",
      profit: 345,
      image: '',
      next: {
        action: 'purched',
        next: null
      }
    },
    {
      name: 'bhanu1str5243',
      id: "bhanu128trhyr53",
      profit: 345,
      image: '',
      next: {
        action: 'purched',
        next: null
      }
    },
    {
      name: 'bhanu124wefgf3',
      id: "bhanu1283qefewf",
      profit: 345,
      image: '',
      next: {
        action: 'purched',
        next: null
      }
    },
    {
      name: 'bhanu1wredeqf243',
      id: "bhanu1283deqrfw",
      profit: 345,
      image: '',
      next: {
        action: 'purched',
        next: null
      }
    },
    {
      name: 'bhanu12wertwtbgrg43',
      id: "bhanu12wfr83wrfgw",
      profit: 345,
      image: '',
      next: {
        action: 'purched',
        next: null
      }
    },
    {
      name: 'bhanu124dqqdeqws3',
      id: "bhanu12qewd83",
      profit: 345,
      image: '',
      next: {
        action: 'purched',
        next: null
      }
    },
    {
      name: 'bhandfasdu1243',
      id: "bhadasqawnu1283",
      profit: 345,
      image: '',
      next: {
        action: 'purched',
        next: null
      }
    },
    {
      name: 'bhanqewqereu1243',
      id: "bhanufeffe1283",
      profit: 345,
      image: '',
      next: {
        action: 'purched',
        next: null
      }
    },
    {
      name: 'bhanu12dsf43',
      id: "bhanu128wfw3",
      profit: 345,
      image: '',
      next: {
        action: 'purched',
        next: null
      }
    },
    {
      name: 'bhanshanuu12dsf43',
      id: "bhanshanuu128wfw3",
      profit: 345,
      image: '',
      next: {
        action: 'purched',
        next: null
      }
    },
    {
      name: 'bhanshawwnuu12dsf43',
      id: "bhanshanwwuu128wfw3",
      profit: 345,
      image: '',
      next: {
        action: 'purched',
        next: null
      }
    },
    {
      name: 'bhanshan23u12dsf43',
      id: "bhanshd3anuu128wfw3",
      profit: 345,
      image: '',
      next: {
        action: 'purched',
        next: null
      }
    },
    {
      name: 'bhadshanuu12dsf43',
      id: "bhaedfnshanuu128wfw3",
      profit: 345,
      image: '',
      next: {
        action: 'purched',
        next: null
      }
    },
    {
      name: 'bhanshanuu12dwww3',
      id: "bhanshanuu128wfw3qwqq",
      profit: 345,
      image: '',
      next: {
        action: 'purched',
        next: null
      }
    },
    {
      name: 'bhanshanuu12dsf4wd3',
      id: "bhanshanuu128wfw3sd",
      profit: 345,
      image: '',
      next: {
        action: 'purched',
        next: null
      }
    },
    {
      name: 'abhiwwwwnav',
      id: "abhinawv0812",
      profit: 300,
      image: '',
      next: {
        action: 'login',
        next: {
          action: 'about',
          next: {
            action: 'Buy Now',
            next: {
              action: 'purched',
              next: null
            }
          }


        }
      }
    },

    {
      name: 'abhiwwwwwwnav',
      id: "abhinawwwv0812",
      profit: 300,
      image: '',
      next: {
        action: 'login',
        next: {
          action: 'about',
          next: {
            action: 'Buy Now',
            next: {
              action: 'purched',
              next: null
            }
          }


        }
      }
    },
    {
      name: 'abhiwdwwwwnav',
      id: "abhinawdwv0812",
      profit: 300,
      image: '',
      next: {
        action: 'login',
        next: {
          action: 'about',
          next: {
            action: 'Buy Now',
            next: {
              action: 'purched',
              next: null
            }
          }


        }
      }
    },
    {
      name: 'abhiwwaswwnav',
      id: "abhinawwsewv0812",
      profit: 300,
      image: '',
      next: {
        action: 'login',
        next: {
          action: 'about',
          next: {
            action: 'Buy Now',
            next: {
              action: 'purched',
              next: null
            }
          }


        }
      }
    },
    {
      name: 'abhiwwwdwwwnav',
      id: "abhinawvwdw0812",
      profit: 300,
      image: '',
      next: {
        action: 'login',
        next: {
          action: 'about',
          next: {
            action: 'Buy Now',
            next: {
              action: 'purched',
              next: null
            }
          }


        }
      }
    },
    {
      name: 'abhiwqwwwwwnav',
      id: "abhinaedwv0812",
      profit: 300,
      image: '',
      next: {
        action: 'login',
        next: {
          action: 'about',
          next: {
            action: 'Buy Now',
            next: {
              action: 'purched',
              next: null
            }
          }


        }
      }
    },
    {
      name: 'abhiwwwwnawdev',
      id: "abhinawv0812wdw",
      profit: 300,
      image: '',
      next: {
        action: 'login',
        next: {
          action: 'about',
          next: {
            action: 'Buy Now',
            next: {
              action: 'purched',
              next: null
            }
          }


        }
      }
    },
    {
      name: 'abhiwwwwwdnav',
      id: "abhinawv08wed12",
      profit: 300,
      image: '',
      next: {
        action: 'login',
        next: {
          action: 'about',
          next: {
            action: 'Buy Now',
            next: {
              action: 'purched',
              next: null
            }
          }


        }
      }
    },
    {
      name: 'abhiwwwwnddwav',
      id: "abhinawv081wd2",
      profit: 300,
      image: '',
      next: {
        action: 'login',
        next: {
          action: 'about',
          next: {
            action: 'Buy Now',
            next: {
              action: 'purched',
              next: null
            }
          }


        }
      }
    },



  ]
}
let customerData = JSON.parse(JSON.stringify(data));

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
      console.log(id)
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


draw(customerData)
const statusSelect = document.getElementById("select-box");
statusSelect.addEventListener("change", function () {
  console.log(statusSelect)
  // Get the selected option's value
  const selectedOption = statusSelect.value;

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


})





