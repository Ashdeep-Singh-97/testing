"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearDb = clearDb;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function clearDb() {
    prisma.request.deleteMany();
}
