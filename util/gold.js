/**
 * Represent the given integer gold amount as a human readable gold amount.
 * If either copper, silver or gold amount to 0 they will be left out of the representation.
 * 
 * Examples:
 *  99     => 99c
 *  100    => 1s
 *  10010  => 1g 10c
 *  10100  => 1g 1s
 *  100112 => 10g 1s 12c
 * 
 * @param {Number} number 
 * @returns {String}
 */
const formatGold = (number) => {
    if (isNaN(number)) {
        throw new Error('Input value is not a number');
    }
    number = +number; // force conversion to Number if it's a string
    const gold = Math.floor(number / 10000);
    const silver = Math.floor(number / 100) % 100;
    const copper = number % 100;
    return (
        [
            { value: gold, suffix: 'g' },
            { value: silver, suffix: 's' },
            { value: copper, suffix: 'c' }
        ]
        .filter(({ value }) => value > 0)
        .map(({ value, suffix }) => value + suffix)
        .join(' ')
    );
};

module.exports = { formatGold };