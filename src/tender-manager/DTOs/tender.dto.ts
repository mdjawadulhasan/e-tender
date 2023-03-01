import { IsEmail, IsInt, IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class TenderForm {
   
   
    id: number;

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

   
    Cmpltpercentege: number;
   
    TendermanagerId:number

    AgencyId:number;

    @IsNotEmpty()
    Status: number;
    
  


}


