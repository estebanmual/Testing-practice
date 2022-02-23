const stringLength = require('./task1')

describe("check length of the string", () => {
    it("", () => {
        const result = stringLength('Esteban');
        expect(result).toBe(7);
        expect(result).toBeTruthy();
    })

    it("", () => {
        const result = stringLength('Villamar');
        expect(result).toBe(8);
        expect(result).toBeTruthy();
    })

    it("", () => {
        const result = stringLength('');
        expect(result).toBeFalsy();
    })

    it("", () => {
        const result = stringLength('lskdafjlkjasasdf');
        expect(result).toBeFalsy();
    })
})