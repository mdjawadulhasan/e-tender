import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class AgencyDto{
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
   AgencyName: string;
   @IsString()
   @IsNotEmpty()
   @MaxLength(5)
   @MinLength(1)
   id:string;

} 