const request = require("supertest")("https://kasir-api.belajarqa.com");
const expect = require("chai").expect;
const { Token, detailProduct } = require("../../config");

describe("Delete Product", () => {
  it("Positive Scenario - Delete Product success", async () => {
    const response = await request
      .delete(detailProduct)
      .set("Authorization", "Bearer " + Token)
    expect(response.status).to.equal(200);
    expect(response.body.message).to.have.equal("Product berhasil dihapus");
  });

  it("Positive Scenario - Delete Product success", async () => {
    const response = await request
      .delete(detailProduct)
    // console.log(response.body);
    expect(response.status).to.equal(401);
    expect(response.body.message).to.have.equal("Missing authentication");
  });
});