import { celebrate, Joi, Segments } from 'celebrate';

const updateReserveValidator = celebrate({
  [Segments.BODY]: {
    startDate: Joi.date(),
    endDate: Joi.date(),
    finalValue: Joi.number(),
    carId: Joi.number(),
  },
});

export default updateReserveValidator;
