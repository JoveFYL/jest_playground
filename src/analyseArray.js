export default function analyseArray(arr) {
    return arr.reduce(
        (wish, curr, idx) => {
            return {
                average:
                    (wish.average * (idx < 2 ? 1 : idx) + curr) / (idx + 1),
                min: curr < wish.min ? curr : wish.min,
                max: curr > wish.max ? curr : wish.max,
                length: arr.length,
            };
        },
        {
            average: 0,
            min: Number.MAX_SAFE_INTEGER,
            max: Number.MIN_SAFE_INTEGER,
            length: arr.length,
        }
    );
}
