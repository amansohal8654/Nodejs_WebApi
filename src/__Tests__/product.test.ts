import supertest from "supertest";
import createServer from "../utils/server";
import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";

const app = createServer();

beforeAll(async () => {
    const memoryServer = await MongoMemoryServer.create();
    await mongoose.connect(memoryServer.getUri());

})

afterAll(async () => {
    await mongoose.disconnect();
    await mongoose.connection.close();
});

describe("product", () => {
    describe("get product routes", () => {
        describe("given product does not exist", () => {
            it("should return a 404", async () => {
                const productId = "product123"
                await supertest(app).get(`/api/products/${productId}`).expect(404);
            })
        })
    })
})