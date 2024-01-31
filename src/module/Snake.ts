

class Snake{
    head: HTMLElement;
    bodies:HTMLCollection;
    element:HTMLElement;

    constructor() {
        this.element = document.getElementById('snake') as HTMLElement;
        this.head = document.querySelector('#snake>div') as HTMLElement;
        this.bodies = this.element.getElementsByTagName('div') as HTMLCollection;
    }

    get X(){
        return this.head.offsetLeft;
    }

    get Y(){
        return this.head.offsetTop;
    }

    set X(val:number){
        this.head.style.left = val+'px';
    }

    set Y(val:number){
        this.head.style.top = val+'px';
    }

    addbody(){
        this.element.insertAdjacentHTML("beforeend","<div></div>>");
    }

}

export default Snake;