import { z } from 'zod'

const loginSchema = z.object({
    email: z.string().email({ message: "Invalid Email" }),
    password: z.string().min(1, "Password is required"),
})

export default loginSchema