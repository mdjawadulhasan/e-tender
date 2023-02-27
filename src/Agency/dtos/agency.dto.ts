import { IsEmail, IsNotEmpty, IsNumber, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class AgencyDto{

    @IsString({message: "Agency name must be string "})
    @IsNotEmpty({message: "Agency name can not be empty"})
    @MinLength(3,{message: "Agency name Minimum lenght is 3"})
    @MaxLength(20,{message: "Agency id is to long maximum range is 5 "})
    
   AgencyName: string;

   @IsNumber()
   @IsNotEmpty({message: "Enter Agency ID  "})
   id:number;

   @IsString({message: "Agency location  must be string "})
    @IsNotEmpty({message: "Enter Agency  Location "})
   // @Matches('[a-z0-9]+')
    location:string

    @IsEmail()
    Email:string
    @IsNumber()
    workingRecord:number
    //1 not good
    //2 Good
    //3 Very Good


    

} 