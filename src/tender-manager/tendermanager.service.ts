import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { TenderForm } from "./tender.dto";
import { TendermanagerForm } from "./tendermanager.dto";
import { TendermanagerEntity } from "./tendermanager.entity";





@Injectable()
export class TendermanagerService {


    constructor(
        @InjectRepository(TendermanagerEntity)
        private tendermanagerRepo: Repository<TendermanagerEntity>,
    ) { }

    getIndex(): string {
        return "Welcome to Tender Manager Home Page";

    }
    getTmanagerProfile(): any {

        return "Tender Manager Profile";
    }


    async insert(Tmdto: TendermanagerForm) {

        return await this.tendermanagerRepo.save(Tmdto);
    }

    update(Tmdto: TendermanagerForm): any {
        return "Profile Updated";
    }

    viewAllAgency(): any {
        return "Agency List";
    }

    createTender(tenderdto: TenderForm): any {

        return "Name: " + tenderdto.name + " \n id is " + tenderdto.id + " \n location: " + tenderdto.location;
    }

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