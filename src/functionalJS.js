const partial = function (fn, ...partialArgs) {
    // eslint-disable-next-line
    let args = partialArgs;
    return function (...fullArguments) {
        return fn(...[...partialArgs, ...fullArguments]);
    }
}

const ntimes = (fill, n) => (n === 0) ? [] : [fill, ...ntimes(fill, n - 1)]

const car = ([car,]) => car

const cdr = ([, ...cdr]) => cdr

const take = (n, [car, ...cdr]) => (n === 0) ? [] : [car, ...take(n - 1, cdr)]

const range = (start, stop) => (
    (start === stop - 1) ?
        [stop - 1] :
        [start, ...range(start + 1, stop)]
)

const range2 = partial(range, 0)

const hasSubSeq = (n, fill, seq) => (
    (seq.length < n) ? false :
        (take(n, seq).every((value) => value === fill)) ?
            true :
            hasSubSeq(n, fill, [...seq].slice(1))
)

export {
    partial
    , ntimes
    , car
    , cdr
    , take
    , range
    , range2
    , hasSubSeq
}
