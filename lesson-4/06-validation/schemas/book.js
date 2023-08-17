const Joi = require("joi");

const bookSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  pages: Joi.number().required(),
  sale: Joi.boolean(),
});

module.exports = bookSchema;
