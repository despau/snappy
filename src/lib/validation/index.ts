import * as z from "zod"


export const SignupValidation = z.object({
    name: z.string().min(2, { message: 'Too short'} ),
    username: z.string().min(2, { message: 'Too short'} ),
    email: z.string().min(2, { message: 'email must not be Too short'} ),
    password: z.string().min(2, { message: 'Provide longer password'} ),
  })

  
  
export const SigninValidation = z.object({
  email: z.string().min(2, { message: 'email must not be Too short'} ),
  password: z.string().min(2, { message: 'Provide longer password'} ),
})


export const PostValidation = z.object({
  caption: z.string().min(5).max(2000),
  file: z.custom<File[]>(),
  location: z.string().min(2).max(100),
  tags: z.string()
})

