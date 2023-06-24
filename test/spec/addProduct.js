const request = require("supertest")("https://kasir-api.belajarqa.com");
const expect = require("chai").expect;
const { Token } = require("../../config");

describe("add product", () => {
  it("Positive Scanario - Success add product", async () => {
    const response = await request
      .post("/products")
      .send({
        category_id: "811f547e-a24e-4f94-bfe1-b7ed7d11c03f",
        code: "A314ASDDFIER3432",
        name: "ayam",
        price: "5000",
        cost: "3000",
        stock: "5"
      })
      .set("Authorization", "Bearer " + Token)
    // console.log(response.body);
    expect(response.status).to.equal(201);
    expect(response.body.message).to.equal('Product berhasil ditambahkan');
    expect(response.body.data.name).to.be.equal('ayam');
  });

  it("negative Scanario - failed add product because the name is empty", async () => {
    const response = await request
      .post("/products")
      .send({
        category_id: "811f547e-a24e-4f94-bfe1-b7ed7d11c03f",
        code: "A314ASDDFIER3432",
        name: "",
        price: "5000",
        cost: "3000",
        stock: "5"
      })
      .set("Authorization", "Bearer " + Token)
    // console.log(response.body);
    expect(response.status).to.equal(400);
    expect(response.body.message).to.equal('"name" is not allowed to be empty');
  });

  it("Negative Scenario - failed add product because no tokens", async () => {
    const response = await request
    .post("/products")
    .send({
      category_id: "811f547e-a24e-4f94-bfe1-b7ed7d11c03f",
      code: "A314ASDDFIER3432",
      name: "ayam",
      price: "5000",
      cost: "3000",
      stock: "5"
    })
    // console.log(response.body);
    expect(response.status).to.equal(401);
    expect(response.body.message).to.equal('Missing authentication');
  });
});
