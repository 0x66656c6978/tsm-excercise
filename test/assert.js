module.exports = (assertion, errorMessage) => {
    if (!assertion) {
        throw new Error(errorMessage)
    }
}