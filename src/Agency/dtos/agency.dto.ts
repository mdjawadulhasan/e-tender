import { IsEmail, IsNotEmpty, IsNumber, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class AgencyDto {

    @IsString({ message: "Agency name must be string " })
    @IsNotEmpty({ message: "Agency name can not be empty" })
    @MinLength(3, { message: "Agency name Minimum lenght is 3" })
    @MaxLength(20, { message: "Agency id is to long maximum range is 5 " })

    AgencyName: string;

    @IsNumber()
    @IsNotEmpty({ message: "Enter Agency ID  " })
    id: number;

    @IsNotEmpty({ message: "Enter Agency  password " })
    password: string;

    @IsEmail()
    Email: string
    @IsNumber()
    Ratings: number
    @IsNumber()
    Noprojectcomleted: number

    @IsNumber()
    Status: number

    //1 not good
    //2 Good
    //3 Very Good








} 