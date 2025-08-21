import sum from "./sum.js";

describe("test for sum fnx",() => {
    test("add 2+2 to equals 4",() => {
       expect(sum(2,2)).toBe(4);
    });

    test("add  to -5 + -5 equals -10",() => {
    expect(sum(-5,-5)).toBe(-10);
    });
});