import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Between, Like, MoreThan, Repository } from "typeorm";
import { TenderForm } from "../DTOs/tender.dto";
import { TenderEntity } from "../entities/tender.entity";


@Injectable()
export class TenderService {


    constructor(
        @InjectRepository(TenderEntity)
        private tenderRepo: Repository<TenderEntity>,
    ) { }


  

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



    searchByName(name: string): any {
        return this.tenderRepo.find({
            where: {
                Tendername: Like(`%${name}%`),
                Status: 0
            }
        });
    }

    searchByLocation(location: string): any {
        return this.tenderRepo.find({
            where: {
                Projectlocation: Like(`%${location}%`),
                Status: 0
            }
        });
    }

    searchByBudget(minBudget: number, maxBudget: number): any {
        return this.tenderRepo.find({
          where: {
            Tenderbudget: Between(minBudget, maxBudget),
            Status: 0
          }
        });
      }
      


    

    

    
}