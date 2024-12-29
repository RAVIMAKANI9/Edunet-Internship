import { z } from 'zod';

export const validateSignup = (data) => {
  const schema = z.object({
    fullName: z.string().min(2).max(50),
    email: z.string().email(),
    password: z.string().min(6)
  });

  return schema.safeParse(data);
};

export const validateLogin = (data) => {
  const schema = z.object({
    email: z.string().email(),
    password: z.string()
  });

  return schema.safeParse(data);
};