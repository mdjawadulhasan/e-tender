import { IsEmail, IsNotEmpty, MinLength, MaxLength, IsInt, IsAlpha, IsNumber } from "class-validator";

export class TenderAuctinDto {

    @IsNotEmpty({ message: "ID is required." })
    @IsInt({ message: "Id must be an integer." })
    id: number;

  @IsNotEmpty({ message: "BID is required." })
  Bid:number

    // @IsNotEmpty({ message: "Name is required." })
    // @IsNumber()
    // TenderIDFK: number;

    // @IsNotEmpty({ message: "Email is required." })
    // @IsEmail()
    // AgencyIDFK: number;

    // @IsNotEmpty({ message: "Password is required." })
    // @MinLength(5, { message: "Password must be at least 5 characters long." })
    // password: string;
    Agency:number
    Tender:number


}
