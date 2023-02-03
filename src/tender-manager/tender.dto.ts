import {IsEmail, IsNotEmpty } from "class-validator";

export class TenderForm {   
    @IsNotEmpty({message: "Please enter Id"}) 
    id: number;

    @IsNotEmpty({message: "Please enter Tender Name"})
    name: string;

    @IsNotEmpty({message: "Please enter Tender location"})
    location: string;



}