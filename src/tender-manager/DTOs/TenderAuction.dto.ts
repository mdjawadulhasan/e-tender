import { IsEmail, IsNotEmpty, MinLength, MaxLength, IsInt, IsAlpha, IsNumber } from "class-validator";

export class TenderAuctinDto {

  @IsNotEmpty({ message: "ID is required." })
  @IsInt({ message: "Id must be an integer." })
  id: number;

  @IsNotEmpty({ message: "BID is required." })
  Bid: number


  Agency: number
  Tender: number


}
