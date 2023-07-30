const request = require("supertest")("https://kasir-api.belajarqa.com");
const expect = require("chai").expect;
const { Token, detailProduct } = require("../../config");

const login = require("../spec/login");
const addProduct = require("../spec/addProduct");
const getAllProduct = require("../spec/getAllProduct");
const getDetailProduct = require("../spec/getDetailProduct");
const updateProduct = require("../spec/updateProduct");
const deleteProduct = require("../spec/deleteProduct");

describe("All Test", () => {
  describe("Login", login);
  describe("Get All Product", getAllProduct);
  describe("Get Detail Product", getDetailProduct);
  describe("Add Product", addProduct);
  describe("Update Product", updateProduct);
  describe("Delete Product", deleteProduct);
});