import { IsEmail, IsNotEmpty, IsNumber, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class BudgeRequestDto {




    id: number;


    @IsNumber()
    Amount: number;

    @IsNotEmpty({ message: "Mention the cause" })
    Cause: string;

    Created_at: Date;

    Updated_at: Date;


    Status: number

    AgencyId: number
    TenderId: number




} 