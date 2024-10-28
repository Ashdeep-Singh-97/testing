"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const db_1 = require("./__mocks__/db");
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.post("/sum", async (req, res) => {
    const a = req.body.a;
    const b = req.body.b;
    const result = a + b;
    const response = await db_1.prismaClient.request.create({
        data: {
            a: a,
            b: b,
            answer: result,
            type: "Sum"
        }
    });
    res.json({ answer: result, id: response.id });
});
exports.app.post("/multiply", async (req, res) => {
    const a = req.body.a;
    const b = req.body.b;
    const result = a * b;
    await db_1.prismaClient.request.create({
        data: {
            a: a,
            b: b,
            answer: result,
            type: "Multiply"
        }
    });
    res.json({ answer: result });
});
