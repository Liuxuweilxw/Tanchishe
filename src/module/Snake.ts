

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
            throw new Error(' 🐍 撞墙了');
        }
        if(this.bodies.length>1){
            if(val==(this.bodies[1] as HTMLElement).offsetLeft){
                throw new Error('🐍 掉头了');
            }

        }

        this.moveBody();
        this.head.style.left = val+'px';
        this.checkConfic();

    }

    set Y(val:number){
        if(this.Y==val){
            return;
        }
        if(val<0 || val>290 ){
            throw new Error(' 🐍 撞墙了');
        }

        if(this.bodies.length>1){
            if(val==(this.bodies[1] as HTMLElement).offsetTop){
                throw new Error('🐍 掉头了');
            }


        }

        this.moveBody();
        this.head.style.top = val+'px';
        this.checkConfic();
    }

    addbody(){
        this.element.insertAdjacentHTML("beforeend","<div></div>");
        // (this.bodies[this.bodies.length-1] as HTMLElement).style.left = (this.bodies[this.bodies.length-2] as HTMLElement).offsetLeft+'px';
        // (this.bodies[this.bodies.length-1] as HTMLElement).style.top = (this.bodies[this.bodies.length-2] as HTMLElement).offsetTop+'px';

    }

    moveBody(){
        for(let i = this.bodies.length-1;i>0;i--){
            let X = (this.bodies[i-1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i-1] as HTMLElement).offsetTop;
            (this.bodies[i] as HTMLElement).style.left = X+'px';
            (this.bodies[i] as HTMLElement).style.top = Y+'px';

        }

    }

    checkConfic(){
        for(let i = this.bodies.length-1;i>3;i--){
            if((this.bodies[i] as HTMLElement).offsetTop == this.Y && this.X== (this.bodies[i] as HTMLElement).offsetLeft){
                throw new Error('🐍 撞到自己了');
                break;
            }
        }
    }

    refresh(){
        this.element.innerHTML = "<div></div>";
        this.element = document.getElementById('snake') as HTMLElement;
        this.head = document.querySelector('#snake>div') as HTMLElement;
        this.bodies = this.element.getElementsByTagName('div') as HTMLCollection;
    }

}

export default Snake;