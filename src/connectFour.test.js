import * as c4 from './connectFour.js'

describe('connectFour', () => {
    const emptyBoard = [
        [0, 0, 0, 0, 0, 0, 0]
        , [0, 0, 0, 0, 0, 0, 0]
        , [0, 0, 0, 0, 0, 0, 0]
        , [0, 0, 0, 0, 0, 0, 0]
        , [0, 0, 0, 0, 0, 0, 0]
        , [0, 0, 0, 0, 0, 0, 0]]

    describe('checkifWinningState func', () => {
        it('should return false on an empty board', () => {
            expect(c4.checkIfWinningState(emptyBoard, 1)).toBe(false)
        })
        it('it should recognize column streaks', () => {
            const normalCollumnSolutionTop = [
                [0, 0, 0, 1, 0, 0, 0]
                , [0, 0, 0, 1, 0, 0, 0]
                , [0, 0, 0, 1, 0, 0, 0]
                , [0, 0, 0, 1, 0, 0, 0]
                , [0, 0, 0, 0, 0, 0, 0]
                , [0, 0, 0, 0, 0, 0, 0]]
            const normalCollumnSolutionBottom = [
                [0, 0, 0, 0, 0, 0, 0]
                , [0, 0, 0, 0, 0, 0, 0]
                , [0, 0, 0, 1, 0, 0, 0]
                , [0, 0, 0, 1, 0, 0, 0]
                , [0, 0, 0, 1, 0, 0, 0]
                , [0, 0, 0, 1, 0, 0, 0]]

            expect(c4.checkIfWinningState(normalCollumnSolutionBottom, 1)).toBe(true)
            expect(c4.checkIfWinningState(normalCollumnSolutionBottom, 1)).toBe(true)
        })
        it('should recognize row streaks', () => {
            const normalLeftAlignedRowSolution = [...emptyBoard]
            normalLeftAlignedRowSolution[3] = [1, 1, 1, 1, 0, 0, 0]
            expect(c4.checkIfWinningState(normalLeftAlignedRowSolution, 1)).toBe(true)

            const normalRightAlignedRowSolution = [...emptyBoard]
            normalRightAlignedRowSolution[1] = [0, 0, 0, 1, 1, 1, 1]
            expect(c4.checkIfWinningState(normalRightAlignedRowSolution, 1)).toBe(true)
        })
        it('should recognize diagonal streaks', () => {
            const leftDiagonalStreakBottomUp = [
                [0, 0, 0, 0, 0, 0, 0]
                , [0, 0, 0, 0, 0, 0, 0]
                , [0, 0, 0, 1, 0, 0, 0]
                , [0, 0, 1, 0, 0, 0, 0]
                , [0, 1, 0, 0, 0, 0, 0]
                , [1, 0, 0, 0, 0, 0, 0]]
            expect(c4.checkIfWinningState(leftDiagonalStreakBottomUp, 1)).toBe(true)

            const leftDiagonalStreakTopDown = [
                [0, 0, 0, 0, 0, 0, 1]
                , [0, 0, 0, 0, 0, 1, 0]
                , [0, 0, 0, 0, 1, 0, 0]
                , [0, 0, 0, 1, 0, 0, 0]
                , [0, 0, 0, 0, 0, 0, 0]
                , [0, 0, 0, 0, 0, 0, 0]]
            expect(c4.checkIfWinningState(leftDiagonalStreakTopDown, 1)).toBe(true)

            const rightDiagonalStreakBottomUp = [
                [0, 0, 0, 0, 0, 0, 0]
                , [0, 0, 0, 0, 0, 0, 0]
                , [0, 0, 0, 1, 0, 0, 0]
                , [0, 0, 0, 0, 1, 0, 0]
                , [0, 0, 0, 0, 0, 1, 0]
                , [0, 0, 0, 0, 0, 0, 1]]
            expect(c4.checkIfWinningState(rightDiagonalStreakBottomUp, 1)).toBe(true)

            const rightDiagonalStreakTopDown = [
                [0, 1, 0, 0, 0, 0, 0]
                , [0, 0, 1, 0, 0, 0, 0]
                , [0, 0, 0, 1, 0, 0, 0]
                , [0, 0, 0, 0, 1, 0, 0]
                , [0, 0, 0, 0, 0, 0, 0]
                , [0, 0, 0, 0, 0, 0, 0]]
            expect(c4.checkIfWinningState(rightDiagonalStreakTopDown, 1)).toBe(true)
        })
    })
})







