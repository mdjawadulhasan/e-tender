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

        return this.tendermanagerRepo.save(Tmdto);
    }

    update(Tmdto: TendermanagerForm, id): any {
        return this.tendermanagerRepo.update(id, Tmdto);
    }


    FindTenderByManagerId(id): any {
        return this.tendermanagerRepo.find(({
            where: { id: id },
            relations: {
                tenders: true,
            },
        }))
    }

}