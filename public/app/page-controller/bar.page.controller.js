import Navbar from "/app/component/Navbar.js";
import { BipolarGraph } from "/app/graph/Bipolar.graph.js";

let barData  = []
const main = () => {
  let navbar = new Navbar();
      navbar.data()
            .logo()
            .nav()
let graphContainer = document.getElementById('graph-container');
let bipolarGraph = new  BipolarGraph();

const fetchData =async  () => {
  let result = await fetch('/coustomer/journey/getBarData');
  let data = await result.json();
  barData = JSON.parse(JSON.stringify(data));
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
}
fetchData()
  

}

main()