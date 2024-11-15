import Navbar from "/app/component/Navbar.js";
console.log('hello bar page ----->')




let data  =   [
   
    {
      name:'GOOGLE',
      value:190000,
      employee:{
        male:70,
        female:30,
       
      }
      
    },
    {
      name:'TCS',
      value:600000,
      employee:{
        male:65,
        female:35,
      }
    },
    {
      name:'META',
      value:86482,
      employee:{ 
        male:63,
        female:37,
  
      }
     
    },
    {
    name:'AMAZON',
    value:154000,
    employee:{
      male:55,
      female:45,
    }
  
    },  
   
       
  ]
  
import { BipolarGraph } from "/app/graph/Bipolar.graph.js";



const main = () => {
  let navbar = new Navbar();
      navbar.data()
            .logo()
            .nav()
let graphContainer = document.getElementById('graph-container');
let bipolarGraph = new  BipolarGraph();
    bipolarGraph.select(graphContainer)
                .data(data)
                .width(350)
                .height(500)
                .color(['#6B3D83','#f1addf'])
                .groundHeight(40)
                .groundColor('#f1addf')
                .indicatorKey('employee')
                // .axisColor('red')
                .draw();

    bipolarGraph.onResize()


    // setTimeout(() => {
    //   bipolarGraph.remove()
    // },1000*10)

}

main()