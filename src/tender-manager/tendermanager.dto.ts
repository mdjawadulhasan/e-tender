import { IsEmail, IsNotEmpty, MinLength, MaxLength, IsInt, IsAlpha } from "class-validator";

export class TendermanagerForm {

    @IsNotEmpty({ message: "ID is required." })
    @IsInt({ message: "Id must be an integer." })
    id: number;

    @IsNotEmpty({ message: "Name is required." })
    @MinLength(5, { message: "Name must be at least 5 characters long." })
    @MaxLength(15, { message: "Name cannot be more than 15 characters long." })
    @IsAlpha()
    name: string;

    @IsNotEmpty({ message: "Email is required." })
    @IsEmail()
    email: string;

    @IsNotEmpty()
    isActive:boolean;





}
