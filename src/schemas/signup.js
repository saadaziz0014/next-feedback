import { z } from 'zod'

const signupSchema = z.object({
    name: z.string().min(1, 'Name is required').max(20, 'Name must be less than 20 characters'),
    email: z.string().email({ message: "Invalid Email" }),
    password: z.string().min(6, "Password must be at least 6 characters long"),
});

export default signupSchema