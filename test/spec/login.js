const request = require("supertest")("https://kasir-api.belajarqa.com");
const expect = require("chai").expect;

describe("Login", () => {
  it("Positive Scanario - Success Login", async () => {
    const response = await request
      .post("/authentications")
      .send({
        email: "sample@example.com",
        password: "123adsfadf@",
      });
    // console.log(response.body.data.accessToken);
    expect(response.status).to.equal(201);
    expect(response.body.data).to.have.property("accessToken");
  });

  it("Negative Scenario - Invalid email", async () => {
    const response = await request
      .post("/authentications")
      .send({ email: "invalid@example.com", password: "123adsfadf@" });

    // console.log(response.body.status);
    expect(response.status).to.equal(401);
    expect(response.body.message).to.have.equal("Kredensial yang Anda berikan salah");
  });
});
