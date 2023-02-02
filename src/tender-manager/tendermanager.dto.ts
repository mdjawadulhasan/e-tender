import {IsNotEmpty } from "class-validator";

export class TendermanagerForm {   
    @IsNotEmpty({message: "Please enter your Id"}) 
    id: number;

    @IsNotEmpty()
    name: string;



}