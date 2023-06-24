const request = require("supertest")("https://kasir-api.belajarqa.com");
const expect = require("chai").expect;
const { Token } = require("../../config");

describe("Get All Product", () => {
  it("Positive Scenario - Get All Product success", async () => {
    const response = await request
      .get("/products")
      .set("Authorization", "Bearer " + Token)
    // console.log(response.body.data);
    expect(response.status).to.equal(200);
    expect(response.body.data.products).to.be.an("array");
    expect(response.body.data.products).to.have.lengthOf(10);
    expect(response.body.data.products[0].name).to.have.equal("ayam");
  });

  it("Negative Scenario - no Get token all Product", async () => {
    const response = await request
      .get("/products")
    // console.log(response.body);
    expect(response.status).to.equal(401);
    expect(response.body.message).to.be.equal('Missing authentication');
  });
});