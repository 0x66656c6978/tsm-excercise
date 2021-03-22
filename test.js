const formatGoldTests = require('./test/formatGold');
const getLayoutOrderTests = require('./test/getLayoutOrder');

const runTest = (name, fn) => {
    console.info(`Running test ${name}`)
    fn();
}

runTest('formatGold', formatGoldTests);
runTest('getLayoutOrder', getLayoutOrderTests);