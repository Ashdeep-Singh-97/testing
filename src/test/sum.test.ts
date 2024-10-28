import { app } from "..";
import request from "supertest";
import { describe, it, expect, vi } from "vitest";
import { prismaClient } from '../__mocks__/db'
vi.mock('../db');
describe("POST /sum", () => {
    it("Should behave nicely" , async ()=> {
        prismaClient.request.create.mockResolvedValue({
            id: 1,
            a: 1,
            b: 1,
            type: "Sum",
            answer: 3
          });
    
          vi.spyOn(prismaClient.request, "create");
        const {status, body} = await request(app).post("/sum").send({
            a : 1,
            b : 2
        })
        expect(prismaClient.request.create).toHaveBeenCalledWith({
            data: {
              a: 1,
              b: 2,
              type: "Sum",
              answer: 3
            }
          })
        expect(body).toEqual({answer : 3 , id : expect.any(Number)});
    })
})
