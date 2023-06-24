const request = require("supertest")("https://kasir-api.belajarqa.com");
const expect = require("chai").expect;
const { Token, detailProduct } = require("../../config");

describe("Get Detail Product", () => {
  it("Positive Scenario - Get Detail Product", async () => {
    const response = await request
      .get(detailProduct)
      .set("Authorization", "Bearer " + Token)
    // console.log(response.body);
    expect(response.status).to.equal(200);
    expect(response.body.data.product).to.have.property("code");
    expect(response.body.data.product.price).to.be.equal(5000);
  });

  it("negative Scenario - no Get token Detail Product", async () => {
    const response = await request
      .get(detailProduct)
    // console.log(response.body);
    expect(response.statusCode).to.equal(401);
    expect(response.body.message).to.have.equal("Missing authentication");
  });

});