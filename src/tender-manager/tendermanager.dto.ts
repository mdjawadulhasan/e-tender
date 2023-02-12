import { IsEmail, IsNotEmpty } from "class-validator";

export class TendermanagerForm {
    @IsNotEmpty({ message: "Please enter your Id" })
    id: number;

    @IsNotEmpty({ message: "Please enter your Name" })
    name: string;

    @IsEmail()
    email: string



}