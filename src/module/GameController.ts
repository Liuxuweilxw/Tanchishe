import Food from './Food'
import ScorePanel from './ScorePanel'
import Snake from './Snake'


class GameController {
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;
    direction: string = "";
    isAlive:boolean=true;

// restart = true;
    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.init();
        // this.isAlive = true;
    }

    init() {
        document.addEventListener('keydown', this.KeydownHandler.bind(this) as EventListenerOrEventListenerObject);
        this.run();
    }


    //ArrowUp/Down/Left/Right

    KeydownHandler(event: KeyboardEvent) {
        // console.log(event.key);
        if (event.key == "ArrowUp" || event.key == "ArrowDown" || event.key == "ArrowLeft" || event.key == "ArrowRight") {
            this.direction = event.key;
            // console.log(this.direction)
        } else {
            alert("invalid Key");
        }
        // console.log(this)

    }

    dead() {
        alert("U Dead")
        this.snake.X =0;
        this.snake.Y = 0;
        // this.restart = true;
        this.direction="";
    }

    run() {
        let X = this.snake.X;
        let Y = this.snake.Y;
        // console.log(X)
        // if (this.snake.X == 0 && this.snake.Y == 0) {
        //     this.restart = false
        // }
        // this.restart=false;
        switch (this.direction) {
            case "Up":
            case "ArrowUp":
                // if (Y > 0) {
                //     Y -= 10;
                // } else {
                //     this.dead()
                // }
                Y -= 10;
                break;
            case "Down":
            case "ArrowDown":
                // if (Y < 290) {
                //     Y += 10;
                // } else {
                //     this.dead()
                // }
                Y += 10;
                break;
            case "Left":
            case "ArrowLeft":
                // if (X > 0) {
                //     X -= 10;
                // } else {
                //     this.dead()
                // }
                X -= 10;
                break;
            case "Right":
            case "ArrowRight":
                // if (X < 290) {
                //     X += 10;
                // } else {
                //     this.dead()
                // }
                X += 10;
                break;
        }
        // if (this.restart != true) {
        try {
            this.snake.X = X;
            this.snake.Y = Y;
        }catch (e) {
            alert("Game Over!");
            this.isAlive=false;
        }

        // }
        // console.log(this.snake.X)

        if(this.isAlive){
            setTimeout(this.run.bind(this), 300-(this.scorePanel.level-1)*30);
        }else{
            this.snake.X=0;
            this.snake.Y=0;
        }

    }
}

export default GameController;