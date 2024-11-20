  import SelectBox from "/app/component/SelectBox.js";
  import Legend from "/app/component/Legend.js";
  import Navbar from "/app/component/Navbar.js";
  import CustomerJourneyGraph from "/app/graph/customer.journey.graph.js";
  const legendDetails = {
    app: {
      color:'#fff7b9',
      label:'application name'
    },
    user: {
     color: '#41dc8e',
     label:'user name'
    },
    purchased: {
      color:'#2970ac',
      label:'purchased completed'
    },
    abandoned:{
      color: '#fd150b',
      label:'Cart Abandoned'
    },
    wishlist:{
      color: '#e637a3',
      label:'Item wishlist'
   },
    intermediary:{
      color: '#ffc33b',
      label:'Intermediary action taken by customer'
    },
   
  }
  const selectorId = "#my_dataviz"


  let navbar = new Navbar();
      navbar.data()
            .logo()
            .nav()

   // append the svg object to the body of the page
  const graphConatiner = d3.select(selectorId)
   .attr('class', 'flex-box');
 
  let legend = new Legend();
      legend.data(legendDetails)
            .parent(graphConatiner)
            .legendContainer('legend-container',0,0)
            .dot()
            .text()


// Attach a change event listener
const width = window.innerWidth;
const height = window.innerHeight;
let graph = new CustomerJourneyGraph();
graph.select(selectorId)
      .setWidth(width)
      .setHeight(height)
      .legend(legendDetails)
  // import data  from '/coustomer/journey/getData'
 let data={};
 let customerData = {}
  const fetchData =async  () => {
    let result = await fetch('/coustomer/journey/getData');
    data = await result.json();
    customerData = JSON.parse(JSON.stringify(data));
    graph.data(customerData)
         .draw()
  }
  fetchData()
  





const onSelectBoxChange = (e) => {
  const selectedOption = e.target.value;

  if (selectedOption === 'name') {
    customerData = handleNameTypeFilter(data)
  }
  if (selectedOption === 'abandoned' || selectedOption === 'purchased') {
    customerData = handlePurchedTypeFilter(data,selectedOption)
  }
  if (selectedOption === 'All') {
    customerData = JSON.parse(JSON.stringify(data));
  }


  graph.select(selectorId)
       .data(customerData)
       .draw()
}

const handleNameTypeFilter = (filterData) => {
  let result = {
    ...filterData, users: filterData.users.map((el) => {
      return {
        name: el.name,
        id: el.id
      }
    })
  }
  return JSON.parse(JSON.stringify(result));
}

const handlePurchedTypeFilter = (filterData,filterType) => {
  let result = {
    ...filterData, users: filterData.users.filter((el) => {
      let stringObject = JSON.stringify(el).toLowerCase();
      return stringObject.includes(filterType.toLowerCase())
    })
  }
 
  let filterCoustomerData = JSON.parse(JSON.stringify(result));
  return filterCoustomerData
}

let selectBoxComp = new SelectBox(['All', 'purchased', 'abandoned', 'name']);

selectBoxComp.addparent('select',`90%`,'0%')
             .addChild('select-box')
             .onChange(onSelectBoxChange)



window.addEventListener('resize',() => {
  let width = window.innerWidth;
  let height = window.innerHeight;
// Attach a change event listener
        graph.resize((graphInstance) => {
          //update all require parms on resize 
          graphInstance.setWidth(width)
                       .setHeight(height)
        })
})

