import Joi from "joi";

export const userValidator = Joi.object({
  userName: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  repeat_password: Joi.ref("password"),
})
.with('password', 'repeat_password');
