"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
const supertest_1 = __importDefault(require("supertest"));
const vitest_1 = require("vitest");
(0, vitest_1.describe)("POST /sum", () => {
    (0, vitest_1.it)("Should behave nicely", async () => {
        const { status, body } = await (0, supertest_1.default)(__1.app).post("/sum").send({
            a: 1,
            b: 2
        });
        (0, vitest_1.expect)(body).toEqual({ answer: 3, id: vitest_1.expect.any(Number) });
    });
});
