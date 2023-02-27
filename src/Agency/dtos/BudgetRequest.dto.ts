import { IsEmail, IsNotEmpty, IsNumber, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class BudgeRequestDto{

   

   @IsNumber()
   @IsNotEmpty({message: "Enter tender ID  "})
   id:number;

   @IsNotEmpty({message: "Enter tender id "})
   
   // @Matches('[a-z0-9]+')
   @IsNumber()
   Tender_id :number;
//    @IsNumber()
//     @IsNotEmpty({message: "Enter Agency id "})
//     Agency_id:number;

    @IsNumber()
    Amount:number;
    @IsNotEmpty({message: "Enter created at "})
   
    Created_at:Date;
    @IsNotEmpty({message: "Enter  update at"})
   
    Updated_at  :Date;
    @IsNotEmpty({message: "Enter tender  status "})
    @IsNumber()
    Status:number
    //1 not good
    //2 Good
    //3 Very Good
    Agency:number


    

} 