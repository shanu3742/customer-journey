
import { ScoreTrajectory } from "/app/graph/Score.Trajectory.js";
import Navbar from "/app/component/Navbar.js";
const main = () => {

    let navbar = new Navbar();
    navbar.data()
          .logo()
          .nav()

  const graphArea = document.getElementById('graph-container');
  const width= window.innerWidth<500? window.innerWidth-100:400;
  const height = 400;
  let scoreTrajectoryData =[];
  const fetchData =async  () => {
    let result = await fetch('/app/graph/v1/getScoreTrajectoryData');
    let data = await result.json();
    scoreTrajectoryData = JSON.parse(JSON.stringify(data));
    //draw the trajectory graph
    const scoreTrajectory  = new ScoreTrajectory({selector:graphArea,data:scoreTrajectoryData,width:width,height:height});
    // if resize is needed
     scoreTrajectory.onResize()
  }
  fetchData()

}
main()
