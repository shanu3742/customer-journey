class Navbar {
  #navData = [];
  constructor() {}

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
    let header = d3.select("header");
    header.selectAll('div.navlink')
        .data([1])
        .join('div')
        .attr('class','navlink')
        .selectAll("a")
        .data(this.#navData)
        .join("a")
        .attr("href", (d) => d.linkTo)
        .text((d) => d.label);
    return this;
  }
}
export default Navbar;
