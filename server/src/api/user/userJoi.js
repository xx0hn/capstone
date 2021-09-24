const joi = require("joi");

const email = joi.string().email().required();
const nickName = joi.string().max(20).required();
const password = joi.string().min(6).required();
const phone = joi
  .string()
  .length(11)
  .pattern(/^[0-9]+$/)
  .required();
const smsAdv = joi.boolean().required();
const emailAdv = joi.boolean().required();
// 추후에 비밀번호 복잡성 증가 예정
// 핸드폰 번호 검증도 수정 예정
exports.signInJoi = joi.object({
  email: email,
  nickName: nickName,
  password: password,
  phone: phone,
  emailAdv: emailAdv,
  smsAdv: smsAdv,
});

exports.loginJoi = joi.object({
  email: email,
  password: password,
});
