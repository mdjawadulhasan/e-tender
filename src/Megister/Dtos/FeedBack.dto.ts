import { IsNotEmpty, IsNumber } from "class-validator";

export class FeedBackDto {

   @IsNumber()
   @IsNotEmpty({ message: "enter a  ID" })
   id: number;

   @IsNotEmpty({ message: "Write  a Feedback " })
   FeedbackText: string;

   @IsNotEmpty({ message: "Give the Rating" })
   Rating: number;

   TenderId: number;
   AgencyId: number;
   MegisterId: number;


}