import {IsEmail, IsInt, IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class TenderForm {   
    @IsNotEmpty({ message: "ID is required." })
    @IsInt({ message: "Id must be an integer." })
    id: number;

    @IsNotEmpty({ message: "Name is required." })
    @MinLength(5, { message: "Name must be at least 5 characters long." })
    @MaxLength(15, { message: "Name cannot be more than 15 characters long." })
  
    name: string;

    @IsNotEmpty({message: "Please enter Tender location"})
    location: string;



}