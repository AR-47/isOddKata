import { isOdd } from "./main.js";

test("isOdd returns true for odd numbers", () => {
    expect(isOdd(157)).toBe(true);
    expect(isOdd(9)).toBe(true);
})

test("isOdd returns false for even numbers", () => {
    expect(isOdd(0)).toBe(false);
    expect(isOdd(132)).toBe(false);
})

test("isOdd returns error statement for non-integar inputs", () => {
    expect(isOdd(0.5)).toBe('You did not input an integar');
    expect(isOdd('hello')).toBe('You did not input an integar');
})
