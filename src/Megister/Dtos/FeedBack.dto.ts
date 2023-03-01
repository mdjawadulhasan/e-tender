import { IsNotEmpty, IsString, MaxLength, IsNumber, MinLength, IsEmail } from "class-validator";
//import { IsNumber,  } from "class-validator/types/decorator/decorators";


export class FeedBackDto {
   //    @IsNotEmpty({message: "enter a Tender name"})
   //    TenderID:number;

   @IsNumber()
   @IsNotEmpty({ message: "enter a  ID" })
   id: number;



   @IsNotEmpty({ message: "Write  a Feedback " })
   FeedbackText: string;
   @IsNotEmpty({ message: "Write  a Feedback " })
   Rating: number;

   Tender: number;
   Agency: number;





}