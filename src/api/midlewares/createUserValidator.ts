import { celebrate, Joi, Segments } from 'celebrate';

const createUserValidator = celebrate({
  [Segments.BODY]: {
    name: Joi.string().required(),
    cpf: Joi.string()
      .pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)
      .required(),
    birth: Joi.date().iso().required(),
    cep: Joi.string()
      .pattern(/^\d{5}-\d{3}$/)
      .required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    qualified: Joi.boolean().required(),
  },
});

export default createUserValidator;
