const onScreenResize = (setProperties,width) => {
 const sizelistner =  () => {
    const innerWidth= window.innerWidth<width? window.innerWidth-100:width;
    setProperties(innerWidth)
  }
  window.addEventListener('resize',sizelistner)   
  return  sizelistner
}

const onScoreTrajectoryResize = (setProperties,width) => {
    window.addEventListener('resize',() => {
        const innerWidth= window.innerWidth<width? window.innerWidth-100:width;
        setProperties({width:innerWidth})
      })
}




export {onScreenResize,onScoreTrajectoryResize}