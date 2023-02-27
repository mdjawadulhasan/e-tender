import { IsEmail, IsNotEmpty, MinLength, MaxLength, IsInt, IsAlpha } from "class-validator";

export class TendermanagerForm {

   
    id: number;

    @IsNotEmpty({ message: "Name is required." })
    @MinLength(5, { message: "Name must be at least 5 characters long." })
    @MaxLength(15, { message: "Name cannot be more than 15 characters long." })
    @IsAlpha()
    name: string;

    @IsNotEmpty({ message: "Email is required." })
    @IsEmail()
    email: string;

    @IsNotEmpty({ message: "Password is required." })
    @MinLength(5, { message: "Password must be at least 5 characters long." })
    password: string;

   
    ImgfileName: string;

}
