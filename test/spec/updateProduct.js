const request = require("supertest")("https://kasir-api.belajarqa.com");
const expect = require("chai").expect;
const { Token, detailProduct } = require("../../config");

describe("update product", () => {
  it("positive scanario - success update product", async () => {
    const response = await request
    .put(detailProduct)
    .send({
      category_id: "98c498ec-4a6f-406a-8351-3ac957d565b6",
      code: "A314ASDDFIER3432",
      name: "ayam goreng",
      price: "7000",
      cost: "3000",
      stock: "10",
    })
    .set("Authorization", "Bearer " + Token)
    // console.log(response.body);
    expect(response.status).to.equal(200);
    expect(response.body.data.name).to.have.equal("ayam goreng");
  });

  it("negative scanario - there is no name when updating the product", async () => {
    const response = await request
    .put(detailProduct)
    .send({
      category_id: "98c498ec-4a6f-406a-8351-3ac957d565b6",
      code: "A314ASDDFIER3432",
      name: "",
      price: "7000",
      cost: "3000",
      stock: "10",
    })
    .set("Authorization", "Bearer " + Token)
    // console.log(response.body);
    expect(response.status).to.equal(400);
    expect(response.body.message).to.have.equal('"name" is not allowed to be empty');
  });
});
