import { Bowling } from './bowling'

describe('A bowling game', () => {

    it("test if we can roll", () => {
      let game = new Bowling();
      expect(game.roll(2)).toBe(2)
    })
    
    it('Test if we can gutterGame', () => {
      let game = new Bowling();
      expect(game.multiRoll(20, 0)).toBe(0)
    })

    it('Test if we are noob (score 20)', () => {
      let game = new Bowling();
      expect(game.multiRoll(20, 1)).toBe(20)
    })

    it('Test if we can spare', () => {
      let game = new Bowling();
      game.roll(6)
      game.roll(4)
      game.multiRoll(18, 0)
      expect(game.spare(1)).toBe(10)
      //expect(game.getScore).toBe(10)
    })

    it('Test if we can strike', () => {
      let game = new Bowling();
      game.roll(10)
      game.multiRoll(18, 0)
      expect(game.strike(0)).toBe(10)
    })

    it('Test if we are pro (score 300)', () => {
      let game = new Bowling();

      game.multiRoll(12, 10)
      for (let i = 0; i < 10; i++) {
        if(i == 9) {
          game.lastStrike()
          expect(game.strike(i)).toBe(300)
        }else{
          game.strike(i)
        }       
      }

      //expect(game.Score).toBe(300)
    })
})
