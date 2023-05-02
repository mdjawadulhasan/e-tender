import { IsNotEmpty, IsNumber } from "class-validator";

export class FeedBackDto {

  
   id: number;

   @IsNotEmpty({ message: "Write  a Feedback " })
   FeedbackText: string;

   @IsNotEmpty({ message: "Give the Rating" })
   Rating: number;

   TenderId: number;
   AgencyId: number;
   MegisterId: number;


}