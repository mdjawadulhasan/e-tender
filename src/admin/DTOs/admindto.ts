import { IsByteLength, IsEmail, IsInt, IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class AdminForm {
   
   
    id: number;

    @IsNotEmpty({ message: "Please enter your Name" })
    name: string;

    @IsEmail()
    email: string

    @IsNotEmpty({ message: "Please enter your phone number" })
    @IsByteLength(10)
    phoneNumber: string;


}