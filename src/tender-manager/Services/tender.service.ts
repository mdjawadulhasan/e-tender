import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MoreThan, Repository } from "typeorm";
import { TenderForm } from "../DTOs/tender.dto";
import { TenderEntity } from "../entities/tender.entity";


@Injectable()
export class TenderService {


    constructor(
        @InjectRepository(TenderEntity)
        private tenderRepo: Repository<TenderEntity>,
    ) { }


    // getTmanagerProfile(id): any {

    //     return this.tenderRepo.findOneBy({ id });
    // }

    insert(Tmdto: TenderForm) {

        return this.tenderRepo.save(Tmdto);
    }

    update(Tmdto: TenderForm, id): any {
        return this.tenderRepo.update(id, Tmdto);
    }

    getAll(): any {
        return this.tenderRepo.find();
    }

    deleteTenderById(id: number): any {
        return this.tenderRepo.delete(id);
    }


    // findtenderById(id): any {

    //     return this.tenderRepo.findOneBy({ id });
    // }

    // findTenderByAmount(amount: number): any {
    //     return this.tenderRepo.find({
    //         where: {
    //             budget: MoreThan(amount),
    //         },
    //     });
    // }


    

    

    
}