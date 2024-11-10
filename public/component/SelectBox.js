class SelectBox  {
    #selectBoxContaioner=null;
    #selectBox=null;
    #childId=null;
    #optionList=[];
    constructor(optionList=['All', 'purched', 'Abandoned', 'name']){
        this.#optionList=[...optionList]
      
     
    }

    addparent(parentClass='select'){
        this.#selectBoxContaioner = d3.selectAll(`div.${parentClass}`)
        .data([1])
        .join('div')
        .attr('class', `${parentClass}`)
        return this;
    }
    addChild(childId='select-box'){
        this.#childId=childId;
        this.#selectBox = this.#selectBoxContaioner.selectAll(`select#${childId}`)
        .data([1])
        .join('select')
        .attr('id', childId)
      
      this.#selectBox.selectAll('option')
        .data(this.#optionList)
        .join('option')
        .text((d) => d)

     return this
    }

    onChange(callback){
        document.getElementById(this.#childId)
        
          .addEventListener("change",callback)
    }
}
export default SelectBox
