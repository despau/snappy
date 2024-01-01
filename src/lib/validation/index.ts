import * as z from "zod"


export const SignupValidation = z.object({
    name: z.string().min(2, { message: 'Too short'} ),
    username: z.string().min(2, { message: 'Too short'} ),
    email: z.string().min(2, { message: 'email must not be Too short'} ),
    password: z.string().min(2, { message: 'Provide longer password'} ),
  })