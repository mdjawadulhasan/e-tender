import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { TenderForm } from "../DTOs/tender.dto";
import { TendermanagerForm } from "../DTOs/tendermanager.dto";
import { TendermanagerEntity } from "../entities/tendermanager.entity";





@Injectable()
export class TendermanagerService {


    constructor(
        @InjectRepository(TendermanagerEntity)
        private tendermanagerRepo: Repository<TendermanagerEntity>,
    ) { }

    getIndex(): string {
        return "Welcome to Tender Manager Home Page";

    }
    getTmanagerProfile(id): any {

        return this.tendermanagerRepo.findOneBy({ id });
    }


    insert(Tmdto: TendermanagerForm) {

        return  this.tendermanagerRepo.save(Tmdto);
    }

    update(Tmdto: TendermanagerForm, id): any {
        return this.tendermanagerRepo.update(id, Tmdto);
    }

    
    
    
    
    
    viewAllAgency(): any {
        return "Agency List";
    }

    // createTender(tenderdto: TenderForm): any {

    //     return "Name: " + tenderdto.name + " \n id is " + tenderdto.id + " \n location: " + tenderdto.location;
    // }

    updateTender(tenderdto: TenderForm): any {
        return "Tender Updated";
    }


    deleteTenderById(id): any {

        return "Deleted Tender Id is : " + id;
    }


    getAllTender(): any {
        return "All tender List";
    }



    findtenderById(id): any {

        return "Tender Id is : " + id;
    }

    findtenderByTenderAmount(amount): any {

        return "All the tender > : " + amount;
    }

    viewagencyById(id): any {

        return "Agency Id is : " + id;
    }

    viewagencyByArea(qry): any {
        return "Location : " + qry.location;
    }

}