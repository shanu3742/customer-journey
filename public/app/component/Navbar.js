class Navbar {
  #navData = [];
  #sizeListner;
  constructor() {
  this.#sizeListner=  window.addEventListener('resize',this.onResize)
  }

  data(
    navData = [
      {
        label: "coustomer journey",
        linkTo: "/coustomer/journey/getJourney",
      },
      {
        label: "3d  bar chart",
        linkTo: "/coustomer/journey/bar",
      },
      {
        label: "score trajectory graph",
        linkTo: "/coustomer/journey/scoreTrajectory",
      },
    ]
  ) {
    this.#navData = navData;
    return this;
  }
  logo(logUrl='https://avatars.githubusercontent.com/u/65018865?v=4'){

    let header = d3.select("header").attr('class','header flex-box space-between mobile-box mobile-space-between');
    header.selectAll('a#logo')
        .data([1])
        .join('a')
        .attr('id','logo')
        .attr('href','/')
        .attr('class','flex-box')
        .selectAll('img')
        .data([1])
        .join('img')
        .attr("src",logUrl) 
        .attr("alt", "shanu profile")
        .attr('width','40')
        .attr('height','40')
        .attr('class','circle')

        return this;
       
  }
  nav() {
    let isMoblie = window.innerWidth<775;

    let header = d3.select("header");
    if(!isMoblie){
      let mobileNav = d3.select('.menu-mobile');
      console.log('mobile nav')
      if(mobileNav){
        mobileNav.remove()
      }

      header.selectAll('div.navlink')
      .data([1])
      .join('div')
      .attr('class','navlink')
      .selectAll("a")
      .data(this.#navData)
      .join("a")
      .attr("href", (d) => d.linkTo)
      .text((d) => d.label);
    }
    if(isMoblie){
  let bigScrenNav = d3.select('.navlink');
  console.log('bigscreen nav',bigScrenNav)
  if(bigScrenNav){
    bigScrenNav.remove()
  }


   let button =    header.selectAll('button.menu-mobile')
                        .data([1])
                        .join('button')
                        .attr('class','menu-mobile mx')
                        .text(`🟰`)
                        .attr('style',`font-size:36px`)

       button.on('click',this.#onMobileMenuOpen)
    }

   
    
    return this;
  }

  #onMobileMenuOpen = ()=> {
      console.log('mobile click')
      let menuBox = d3.select(".page-container");

  let mobileMenuContainer =    menuBox.selectAll('div.menu-mobile-box')
                                      .data([1])
                                      .join('div')
                                      .attr('class','menu-mobile-box')

    
   let button =   mobileMenuContainer.selectAll('button')
                         .data([1])
                         .join('button')
                         .attr('class','close-button')
                         .text(`❌`)
                         .attr('style',`font-size:36px`)
    
                         let navContainer =   mobileMenuContainer.selectAll('div.nav-link-container-mobile')
                         .data([1])
                         .join('div')
                         .attr('class','nav-link-container-mobile')

                         navContainer.selectAll('div.navlink')
                                  .data([1])
                                  .join('div')
                                  .attr('class','navlink flex-box column align-items')
                                  .selectAll("a")
                                  .data(this.#navData)
                                  .join("a")
                                  .attr("href", (d) => d.linkTo)
                                  .text((d) => d.label);
                                

     button.on('click',this.#onMobileMenuClose)
              
  }
  #onMobileMenuClose = () => {
    let menuConatiner = d3.selectAll('div.menu-mobile-box');
    menuConatiner.remove()
  }


  onResize= () => {
    this.nav()
  }


  onRemove(){
   if(this.#sizeListner){
    window.removeEventListener(this.#sizeListner)
   }
  }

}
export default Navbar;
