import { IsEmail, IsNotEmpty, IsNumber, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class BudgeRequestDto{

   

   @IsNumber()
   @IsNotEmpty({message: "Enter tender ID  "})
   id:number;


    @IsNumber()
    Amount:number;
    @IsNotEmpty({message: "Enter created at "})
   
    Created_at:Date;
    @IsNotEmpty({message: "Enter  update at"})
   
    Updated_at  :Date;
    @IsNotEmpty({message: "Enter tender  status "})
    @IsNumber()
    Status:number
    
    Agency:number
    Tender:number


    

} 