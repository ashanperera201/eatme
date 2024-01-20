"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
const add = (a, b) => {
    return a + b;
};
exports.add = add;
test('adds two numbers', () => {
    expect((0, exports.add)(2, 3)).toBe(5);
    expect((0, exports.add)(-1, 1)).toBe(0);
    expect((0, exports.add)(0, 0)).toBe(0);
});
//# sourceMappingURL=sample.test.js.map