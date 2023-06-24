const request = require("supertest")("https://kasir-api.belajarqa.com");
const expect = require("chai").expect;
const { Token, detailProduct } = require("../../config");

const login = require("./login");
const addProduct = require("./addProduct");
const getAllProduct = require("./getAllProduct");
const getDetailProduct = require("./getDetailProduct");
const updateProduct = require("./updateProduct");
const deleteProduct = require("./deleteProduct");

describe("All Test", () => {
  describe("Login", login);
  describe("Get All Product", getAllProduct);
  describe("Get Detail Product", getDetailProduct);
  describe("Add Product", addProduct);
  describe("Update Product", updateProduct);
  describe("Delete Product", deleteProduct);
});