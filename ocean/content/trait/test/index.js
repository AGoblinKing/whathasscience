module.exports = {
    testString: 'trait',
    testDataTrait: 'trait',
    
    test(entity) {
        return this.testString;
    },

    test2(entity) {
        return this.testDataTrait
    }
};
