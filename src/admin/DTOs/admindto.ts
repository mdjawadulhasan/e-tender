import { IsByteLength, IsEmail, IsInt, IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class AdminForm {
    @IsNotEmpty({ message: "ID is required." })
    @IsInt({ message: "Id must be an integer." })
    id: number;

    @IsNotEmpty({ message: "Please enter your Name" })
    name: string;

    @IsEmail()
    email: string

    @IsNotEmpty({ message: "Please enter your phone number" })
    @IsByteLength(10)
    phoneNumber: string;

    isActive:boolean;

}