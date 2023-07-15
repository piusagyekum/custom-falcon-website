const Joi = require("joi")

export const contactSchema = Joi.object().keys({
  name: Joi.string().required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  subject: Joi.string().required(),
  mobile: Joi.string()
    .required()
    .regex(/^\+?[\d-]{10,}/)
    .messages({
      "string.pattern.base": "Please input a valid mobile number",
    }),
  description: Joi.string().required(),
})
