

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
        if(this.X==val){
            return;
        }
        if(val<0 || val>290 ){
            throw new Error('🐍撞墙了');
        }
        this.head.style.left = val+'px';
    }

    set Y(val:number){
        if(this.Y==val){
            return;
        }
        if(val<0 || val>290 ){
            throw new Error('🐍撞墙了');
        }
        this.head.style.top = val+'px';
    }

    addbody(){
        this.element.insertAdjacentHTML("beforeend","<div></div>>");
    }

}

export default Snake;