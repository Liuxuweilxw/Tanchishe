

class Snake{
    head: HTMLElement;
    // bodies:HTMLCollection;

    constructor() {
        this.head = document.querySelector('#snake>div') as HTMLElement;
    }
}