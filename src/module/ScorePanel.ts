

class ScorePanel {
    private score: number = 0;
    private level: number = 1;
    private max_level: number;
    private upScore: number;
    scoreEle: HTMLElement;
    levelEle: HTMLElement;

    constructor(max_level: number = 10, upScore: number = 10) {
        this.levelEle = document.getElementById('level') as HTMLElement;
        this.scoreEle = document.getElementById('score') as HTMLElement;
        this.max_level = max_level
        this.upScore = upScore
    }

    addScore() {
        this.score++;
        this.scoreEle.innerHTML = this.score + '';
        if (this.score % this.upScore == 0) {
            this.levelUp()
        }
    }

    levelUp() {
        if (this.level < this.max_level) {
            this.level++;
            this.levelEle.innerHTML = this.level + '';
        }

    }


}

export default ScorePanel;

// const scorePanel = new ScorePanel()
// scorePanel.addScore()
// scorePanel.levelUp()