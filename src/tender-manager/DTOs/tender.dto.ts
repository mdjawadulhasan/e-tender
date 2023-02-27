import { IsEmail, IsInt, IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class TenderForm {
    @IsNotEmpty({ message: "ID is required." })
    @IsInt({ message: "Id must be an integer." })
    id: number;

    @IsNotEmpty({ message: "Name is required." })
    @MinLength(5, { message: "Name must be at least 5 characters long." })
    @MaxLength(15, { message: "Name cannot be more than 15 characters long." })

    @IsInt()
    Tenderid: number;

    @IsNotEmpty({ message: "Tender Name is required." })
    Tendername: string;

    
    @IsNotEmpty({ message: "Project Location is required." })
    Projectlocation: string;

    @IsNotEmpty({ message: "Project Location Coordinate is required." })
    LocationXCoordinate: string;

    @IsNotEmpty({ message: "Project Location Coordinate is required." })
    LocationYCoordinate: string;

    @IsNotEmpty({ message: "Tenderbudget is required." })
    Tenderbudget: number;

    @IsNotEmpty({ message: "ProjectStartDate is required." })
    ProjectStartDate: number;

    @IsNotEmpty({ message: "ProjectCmplttDate is required." })
    ProjectCmplttDate: number;

    @IsNotEmpty({ message: "Deadline is required." })
    Deadline: number;

   
    Cmlptpercentege: number;

    
    isActive: boolean;



}