const crypto = require("node:crypto");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");
const sendEmail = require("../helpers/sendEmail");

async function register(req, res, next) {
  const { name, email, password } = req.body;

  try {
    const user = await User.findOne({ email }).exec();

    if (user !== null) {
      return res.status(409).send({ message: "User already registered" });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const verifyToken = crypto.randomUUID();

    await User.create({ name, email, password: passwordHash, verifyToken });

    await sendEmail({
      to: email,
      subject: `Welcome on board, ${name}`,
      html: `
        <p>To confirm your registration, please click on link below</p>
        <p>
          <a href="http://localhost:8080/api/auth/verify/${verifyToken}">Click me</a>
        </p>
      `,
      text: `
        To confirm your registration, please click on link below\n
        http://localhost:8080/api/auth/verify/${verifyToken}
      `,
    });

    res.status(201).send({ message: "Registration successfully" });
  } catch (error) {
    next(error);
  }
}

async function login(req, res, next) {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }).exec();

    if (user === null) {
      console.log("Email");
      return res
        .status(401)
        .send({ message: "Email or password is incorrect" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch !== true) {
      console.log("Password");
      return res
        .status(401)
        .send({ message: "Email or password is incorrect" });
    }

    if (user.verified !== true) {
      return res.status(401).send({ message: "Please verify your email" });
    }

    const token = jwt.sign(
      {
        id: user._id,
        name: user.name,
      },
      process.env.JWT_SECRET,
      {
        // expiresIn: 3600,
        expiresIn: "1h",
      }
    );

    await User.findByIdAndUpdate(user._id, { token }).exec();

    res.send({ token });
  } catch (error) {
    next(error);
  }
}

async function logout(req, res, next) {
  try {
    await User.findByIdAndUpdate(req.user.id, { token: null }).exec();

    res.status(204).end();
  } catch (error) {
    next(error);
  }
}

async function verify(req, res, next) {
  const { token } = req.params;

  try {
    const user = await User.findOne({ verifyToken: token }).exec();

    if (user === null) {
      return res.status(401).send({ message: "Invalid token" });
    }

    await User.findByIdAndUpdate(user._id, {
      verified: true,
      verifyToken: null,
    }).exec();

    res.send({ message: "User verified" });
  } catch (error) {
    next(error);
  }
}

module.exports = { register, login, logout, verify };
