import { IsEmail, IsNotEmpty, MinLength, MaxLength, IsInt, IsAlpha, IsNumber } from "class-validator";

export class TenderAuctinForm {


  id: number;

  @IsNotEmpty({ message: "BID is required." })
  Bid: number

  AgencyId:number;

 
  TenderId: number


}
