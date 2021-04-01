import * as fJS from './functionalJS.js'

describe('ntimes func', () => {
    it(`ntimes(5,'x') should return 'xxxxx'`, () => {
        expect(fJS.ntimes('x', 5)).toEqual(['x', 'x', 'x', 'x', 'x'])
    })
})

describe('range func', () => {
    it('range(1,7) should return [1..6]', () => {
        expect(fJS.range(1, 7)).toEqual([1, 2, 3, 4, 5, 6])
    })
})

describe('range2 func', () => {
    it('should be a partially applied range func with start=0',
        () => expect(fJS.range2(3)).toEqual([0, 1, 2]))
})

describe('hasSubSeq func', () => {
    it('shuold return false for seq < n', () => {
        expect(fJS.hasSubSeq(4, 1, [1, 1, 1])).toBe(false)
    })
    it('should return true when n=4 and seq=[1,1,1,1]', () => {
        expect(fJS.hasSubSeq(4, 1, [1, 1, 1, 1])).toBe(true)
    })
    it('should also work with zeros on the left', () => {
        expect(fJS.hasSubSeq(4, 1, [0, 0, 0, 1, 1, 1, 1])).toBe(true)
    })

})