import { IsNotEmpty,IsString, MaxLength, IsNumber, MinLength } from "class-validator";
//import { IsNumber,  } from "class-validator/types/decorator/decorators";


export class MegisterDto
{
   @IsNotEmpty({message: "enter a Megister name"})
   @IsString({message: " Megister name must be string"})
   @MaxLength(20 ,{message: "Max Megister name length is 20"})
   @MinLength(3,{message: "Min Megister name lenght is 3"})

    name:string;
   @IsNumber()
   @IsNotEmpty({message: "enter a Megister ID"})
    id:number;
    @IsString({message: "enter a Megister area name"})
    location:string;
    
}