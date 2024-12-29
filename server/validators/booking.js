import { z } from 'zod';

export const validateBooking = (data) => {
  const schema = z.object({
    tour: z.string(),
    travelDate: z.string().transform(str => new Date(str)),
    numberOfTravelers: z.number().min(1),
    totalPrice: z.number().positive()
  });

  return schema.safeParse(data);
};