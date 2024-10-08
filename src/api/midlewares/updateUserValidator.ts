import { celebrate, Joi, Segments } from 'celebrate';

const updateUserValidator = celebrate({
  [Segments.BODY]: {
    name: Joi.string(),
    cpf: Joi.string().pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/),
    birth: Joi.date().iso(),
    cep: Joi.string().pattern(/^\d{5}-\d{3}$/),
    email: Joi.string().email(),
    password: Joi.string().min(6),
    old_password: Joi.string().when('password', {
      is: Joi.exist(),
      then: Joi.required(),
    }),
    qualified: Joi.boolean(),
  },
});

export default updateUserValidator;
