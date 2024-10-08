import { celebrate, Joi, Segments } from 'celebrate';

const updateCarValidator = celebrate({
  [Segments.BODY]: {
    model: Joi.string(),
    year: Joi.number().integer().min(1950).max(2023),
    valuePerDay: Joi.number(),
    acessories: Joi.array().items(Joi.string()),
    numberOfPassengers: Joi.number().integer(),
  },
});

export default updateCarValidator;
