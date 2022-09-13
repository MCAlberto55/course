//the code

export class Bowling  {
    private score: number
    private currentFrame: number
    private pointsLog: Array<number>
    private lastIsStrike: boolean

    constructor(){
        this.score = 0
        this.currentFrame = 0
        this.pointsLog = []
        this.lastIsStrike = false
    }

    public roll(scoreAchieved: number): any {
        this.pointsLog.push(scoreAchieved)
        return this.getScore()
    }

    public multiRoll(frames: number, rollScore: number):any {
        for (let i = 0; i < frames; i++) {
            this.pointsLog.push(rollScore)
        }
        return this.getScore()
    }

    public spare(index: number) {
        let spare = this.pointsLog[index]
        spare += this.pointsLog[index + 1]
        this.pointsLog[index] = spare
        return this.getScore()
    }

    public strike(index: number) {
        let strike = this.pointsLog[index]
        strike += this.pointsLog[index + 1]
        strike += this.pointsLog[index + 2]
        this.pointsLog[index] = strike
        return this.getScore()
    }

    public getScore(): any {
        if(this.lastIsStrike) {
            this.pointsLog.pop()
            this.pointsLog.pop()
        }
        this.score =  this.pointsLog.reduce(function(a, b){ return a + b; })
        return this.score
    }

    public lastStrike(){
        this.lastIsStrike = true;
    }

 
}