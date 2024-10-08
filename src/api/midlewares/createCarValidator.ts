import { celebrate, Joi, Segments } from 'celebrate';
import { RequestHandler } from 'express';

const createCarValidator: RequestHandler = celebrate({
  [Segments.BODY]: Joi.object().keys({
    model: Joi.string().required(),
    year: Joi.number().integer().min(1950).max(2023).required(),
    valuePerDay: Joi.number().required(),
    acessories: Joi.array().items(Joi.string()).min(1).required(),
    numberOfPassengers: Joi.number().integer().required(),
  }),
});

export default createCarValidator;
