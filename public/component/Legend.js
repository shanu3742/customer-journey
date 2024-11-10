class Legend{
    #legendDetails={};
    #parentElement
    #legendContainer=null;
    constructor(){}
    data(legendDetails){
        this.#legendDetails=legendDetails;
        return this
    }

    parent(parentElement){
     this.#parentElement = parentElement;
    return this;
    }

    legendContainer(legendClass='legend-container',xCord=0,yCord=0){
    let legend = this.#parentElement.selectAll(`div.legend`)
                                    .data([1])
                                    .join('div')
                                    .attr('class',`legend`)
                                    .style('position','absolute')
                                    .style('top',xCord)
                                    .style('left',yCord)
                                    .style('padding',10)
                                    .style('z-index',2)
     this.#legendContainer = legend.selectAll(`div.${legendClass}`)
                                            .data(Object.keys(this.#legendDetails))
                                            .join('div')
                                            .attr('class', legendClass)
     return this;
    }

    dot(dotClass='box'){
        this.#legendContainer.selectAll(`div.${dotClass}`)
                    .data((d) => [d])
                    .join('div')
                    .attr('class', dotClass)
                    .style('background', (d) => {
                    return this.#legendDetails[d].color;
                    })
    return this;
    }
    text(textClass){
        this.#legendContainer.selectAll(`div.${textClass}`)
            .data((d) => [d])
            .join('div')
            .attr('class', textClass)
            .text((d) => this.#legendDetails[d].label)
            .style('color', 'white')
       return this;
    }

}

export default Legend;