import express from "express";
import { prismaClient } from "./__mocks__/db";
// import { PrismaClient } from "@prisma/client";

export const app = express();

app.use(express.json());

app.post("/sum",async (req,res) => {
    const a = req.body.a;
    const b = req.body.b;

    const result = a + b;
    // console.log(prismaClient);
    const response = await prismaClient.request.create({
        data : {
            a : a,
            b : b,
            answer : result,
            type : "Sum"
        }
    })
    res.json({answer : result , id:response.id});
})

app.post("/multiply",async (req,res) => {
    const a = req.body.a;
    const b = req.body.b;

    const result = a * b;
    await prismaClient.request.create({
        data : {
            a : a,
            b : b,
            answer : result,
            type : "Multiply"
        }
    })
    res.json({answer : result});
})
