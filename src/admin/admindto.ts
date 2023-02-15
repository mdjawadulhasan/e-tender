import { IsByteLength, IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class AdminForm {
    @IsNotEmpty({ message: "Please enter your Id" })
    @MinLength(2, { message: "ID should be at least 2 characters long" })
    @MaxLength(10, { message: "ID should not be longer than 10 characters" })
    id: number;

    @IsNotEmpty({ message: "Please enter your Name" })
    name: string;

    @IsEmail()
    email: string

    @IsNotEmpty({ message: "Please enter your phone number" })
    @IsByteLength(10)
    phoneNumber: string;

}