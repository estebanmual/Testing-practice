class calculator {
    static add(...numbers) {
        let answer = 0;
        numbers.forEach((el) => {
            answer += el
        });
        return answer;
    }

    static substract(a , b) {
        return a-b 
    } 

    static divide(a , b) {
        return a/b
    }

    static multiply(a , b) {
        return a*b
    }
}

module.exports = calculator
