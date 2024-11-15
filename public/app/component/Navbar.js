class Navbar {
  #navData = [];
  constructor() {
    
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
    ]
  ) {
    this.#navData = navData;
    return this;
  }
  logo(){

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
        .attr("src", "https://www.w3schools.com/tags/img_girl.jpg") 
        .attr("alt", "Description of the image")
        .attr('width','40')
        .attr('height','40')
        .attr('class','circle')

        return this;
       
  }
  nav() {
    let isMoblie = window.innerWidth<775;
    let header = d3.select("header");
    if(!isMoblie){
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
   let button =    header.selectAll('button.menu-mobile')
                        .data([1])
                        .join('button')
                        .attr('class','menu-mobile mx')
                        .text(`🟰`)
                        .attr('style',`font-size:36px`)

       button.on('click',this.onMobileMenuOpen)
    }

   
    
    return this;
  }

  onMobileMenuOpen = ()=> {
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
                                

     button.on('click',this.onMobileMenuClose)
              
  }
  onMobileMenuClose = () => {
    let menuConatiner = d3.selectAll('div.menu-mobile-box');
    menuConatiner.remove()
  }


}
export default Navbar;
