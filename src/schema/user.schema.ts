import {object, string, TypeOf} from "zod";

export const createUserSchema = object({
    body: object({
        name: string({
            required_error: "user name is required please fill out the field name"
        }),
        password: string({
            required_error: "password is required please fill out the field password"
        }).min(6, "password must be at least 6 characters long"),
        passwordConfirmation:  string({
            required_error: "password is required please fill out the field password"
        }),
        email:  string({
            required_error: "email is required please fill out the field email"
        }).email("your email is not valid")
    }).refine((data) => data.password === data.passwordConfirmation, {
        message: "password do not match",
        path: ["passwordConfirmation"],
    })
})

export type createUserInput = Omit<
    TypeOf<typeof createUserSchema>, 
    "body.PasswordConfirmation">