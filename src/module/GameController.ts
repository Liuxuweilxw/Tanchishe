import Food from './Food'
import ScorePanel from './ScorePanel'
import Snake from './Snake'


class GameController {
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;

    direction: string = "ArrowRight";

    restart = true;

    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.init();
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
        this.restart = true;
        this.direction="ArrowRight";
    }

    run() {
        let X = this.snake.X;
        let Y = this.snake.Y;
        console.log(X)
        if (this.snake.X == 0 && this.snake.Y == 0) {
            this.restart = false
        }
        // this.restart=false;
        switch (this.direction) {
            case "Up":
            case "ArrowUp":
                if (Y > 0) {
                    Y -= 10;
                } else {
                    this.dead()
                }
                break;
            case "Down":
            case "ArrowDown":
                if (Y < 290) {
                    Y += 10;
                } else {
                    this.dead()
                }
                break;
            case "Left":
            case "ArrowLeft":
                if (X > 0) {
                    X -= 10;
                } else {
                    this.dead()
                }
                break;
            case "Right":
            case "ArrowRight":
                if (X < 290) {
                    X += 10;
                } else {
                    this.dead()
                }
                break;
        }
        if (this.restart != true) {
            this.snake.X = X;
            this.snake.Y = Y;
        }
        // console.log(this.snake.X)
        setTimeout(this.run.bind(this), 300-(this.scorePanel.level-1)*30);
    }
}

export default GameController;