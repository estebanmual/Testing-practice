const calculator = require('./task3');

describe("add", () => {
    it("", () => {
        const result = calculator.add(1,2,3);
        expect(result).toBe(6)
    })

    it("", () => {
        const result = calculator.add(1,2,3,4,5);
        expect(result).toBe(15)
    })

    it("", () => {
        const result = calculator.add(1,2);
        expect(result).toBe(3)
    })
})

describe("substract", () => {
    it("", () => {
        const result = calculator.substract(7,2);
        expect(result).toBe(5)
    })

    it("", () => {
        const result = calculator.substract(9,6);
        expect(result).toBe(3)
    }) 

    it("", () => {
        const result = calculator.substract(2,7);
        expect(result).toBe(-5)
    }) 
})

describe("divide", () => {
    it("", () => {
        const result = calculator.divide(9,3);
        expect(result).toBe(3)
    })

    it("", () => {
        const result = calculator.divide(15,3);
        expect(result).toBe(5)
    })

    it("", () => {
        const result = calculator.divide(90,10);
        expect(result).toBe(9)
    })
})

describe("multiply", () => {
    it("", () => {
        const result = calculator.multiply(2,2);
        expect(result).toBe(4);
    })

    it("", () => {
        const result = calculator.multiply(4,16);
        expect(result).toBe(64);
    })

    it("", () => {
        const result = calculator.multiply(23,3);
        expect(result).toBe(69);
    })
})