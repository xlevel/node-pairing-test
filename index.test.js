const { createMap } = require('./index');

describe('name_test_target', () => {
    it('name_test_scenario', () => {
        const testInput = [["*", ".", ".", "."], [".", ".", "*", "."], [".", ".", ".", "."]];
        const expectedOutput = [["*", "2", "1", "1"], ["1", "2", "*", "1"], ["0", "1", "1", "1"]];

        const result = createMap(testInput);

        expect(result).toBe(expectedOutput);
    });
});