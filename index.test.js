
const sum = require("./index");


describe('Testing sum function', () => { 
    //test suite
    test("add 2 positive numbers", () => {  
        // tests
        // toBe => === strict equality
      expect(sum(1,2)).toBe(3);
    });

    test("add 2 negative numbers", () => {  
        // tests
        // toBe => === strict equality
      expect(sum(-1,-2)).toBe(-3);
    });

    test("add 2 floating numbers", () => {  
        // tests
        // toBe => === strict equality
      expect(sum(1.3,2.3)).toBe(3.6 );
    });

    test("add 2 floating numbers, where output is integer", () => {  
        // tests
        // toBe => === strict equality
      expect(sum(1.5,1.5)).toBe(3);
    });

    test("add 2 numbers as strings, and output is integer", () => {  
        // tests
        // toBe => === strict equality
      expect(sum("1.5","1.5")).toBe(3);
    });

    test("call sum with no arguments", () => {  
        // tests
        // toBe => === strict equality
      expect(sum()).toBe("sum invoke without arguments");
    });

    test("call sum with one arguments", () => {  
        // tests
        // toBe => === strict equality
      expect(sum(1)).toBe("sum functions need atleast 2 arguments");
    });

    test("add 3 numbers", () => {  
        // tests
        // toBe => === strict equality
      expect(sum(1,2,3)).toBe(6);
    });
});