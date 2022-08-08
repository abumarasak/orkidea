// Database
const User = require("./model");
// error handeler
const asuncHandler = require("express-async-handler");
// hash data or unhash data
const { hashData, verifyHashedData } = require("../../utils/bcrypt");
// validation
const {
  validEmail,
  validImage,
  validPassword,
} = require("../../utils/validation");
// upload image and remove image from local
const { uploadFile } = require("../../utils/s3");
const util = require("util");
const fs = require("fs");
const unlinkFile = util.promisify(fs.unlink);
// token
const {
  generateAccessToken,
  generateRefreshToken,
} = require("../../utils/token");
const Token = require("../token/model");

// @desc Signup user
// @route Post /api/auth/signup
// @access Public
const signup = asuncHandler(async (req, res) => {});

// @desc Signin user
// @route Post /api/auth/signin
// @access Public
const signin = asuncHandler(async (req, res) => {});

// @desc Signout user
// @route Post /api/auth/signout
// @access Public
const signout = asuncHandler(async (req, res) => {});

module.exports = { signin, signup, signout };
