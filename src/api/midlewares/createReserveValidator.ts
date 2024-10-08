import { celebrate, Joi, Segments } from 'celebrate';

const createReserveValidator = celebrate({
  [Segments.BODY]: {
    startDate: Joi.date().iso().required(),
    endDate: Joi.date().iso().required(),
    carId: Joi.number().integer().required(),
    userId: Joi.number().integer().required(),
    finalValue: Joi.number().required(),
  },
});

export default createReserveValidator;
