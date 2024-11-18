import { createArrowMarker } from "/app/component/arrowMarker.js";
import { createImageBorder } from "/app/component/border.js";
import { createPloatingArea } from "/app/component/createPloatingArea.js";
import { createDot } from "/app/component/dot.js";
import { generateGradient } from "/app/component/generateGradient.js";
import { createLabel } from "/app/component/label.js";
import { createImage } from "/app/component/logo.js";
import { createVerticalLine } from "/app/component/logoTail.js";
import { getLength } from "/app/utils/getLength.js";
import { getPointAtLength } from "/app/utils/getPointAtLength.JS";
import { createLinePath } from "/app/utils/lineGenerator.js";
import { onScoreTrajectoryResize } from "/app/system/resize.js";

let DEFAULT_MARGIN={
    top:90,
    bottom:20,
    left:40,
    right:20
  }

class ScoreTrajectory {
    fixedWidth;
    width;
    height;
    margin;
    imageSize;
    lineLength;
    data=[];
    selector;

    constructor({selector,width=450,height=450,margin=DEFAULT_MARGIN,imageSize=20,lineLength=40,data}){
        this.selector = selector;
        this.fixedWidth = width
        this.width= width;
        this.height=height;
        this.margin = margin;
        this.imageSize= imageSize;
        this.lineLength= lineLength;
        this.data= data;
        //draw the default  graph 
        this.draw()


    }
    setProperties = (object) => {
        for(let key in object){
            this[key] = object[key]
        }
        this.draw()
    }

    onResize=() => {
        onScoreTrajectoryResize(this.setProperties, this.fixedWidth)
    }


    draw(){
        let containerWidth =  this.width+this.margin.left+this.margin.right;
        let containerHeight = this.height+this.margin.top+this.margin.bottom;

        // append the svg object to the div called 'my_dataviz'
        let {svg,graphContainer:graphPloatingArea}= createPloatingArea(this.selector,containerWidth,containerHeight,this.margin,'score-trajectory')
        let chartData = this.data.toSorted((a,b) => a.value>b.value?1:-1);
        let yDomain = d3.extent(chartData,(d) => d.value);
        const xScale = d3.scaleLinear().domain([0,chartData.length]).range([0,this.width]);
        const yScale = d3.scaleLinear().domain(yDomain).range([this.height,0]);
        //create arrow
        svg.call(createArrowMarker)
        // Define a linear gradient
        svg.call(generateGradient)


        // Add the line
        let trajectory =  graphPloatingArea.selectAll('path#trajectory')
        .data([chartData])
        .join("path")
        .attr("fill", "none")
        .attr("stroke","url(#score-trajectory-gradient)" )
        .attr("stroke-width", 8)
        .attr('marker-end','url(#arrow)')
        .attr('id','trajectory')
        .attr("d", createLinePath(xScale,yScale) )



        
chartData.forEach((el,i) => {
    let length= getLength(i,el.value,xScale,yScale,chartData)
    //to get the cordinate of current value at the curveBasis path
    let point =getPointAtLength(trajectory.node(), length);
    graphPloatingArea
      .call(createDot,point.x,point.y,i)
      .call(createVerticalLine,point.x,point.y,i,this.lineLength)
      .call(createImage,point.x,point.y,i,this.imageSize,el.image,this.lineLength)
      .call(createImageBorder,point.x,point.y,i,this.imageSize,this.lineLength)
      .call(createLabel,point.x,point.y,i,this.imageSize,el.value)


    })
    }

}

export {ScoreTrajectory}