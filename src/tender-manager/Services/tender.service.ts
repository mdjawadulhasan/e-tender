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

    get(id: number): any {
        return this.tenderRepo.findOneBy({ id });
    }

    deleteTenderById(id: number): any {
        return this.tenderRepo.delete(id);
    }

    getCustom(val): any {
        return this.tenderRepo.find({
            where: {
                Status: val
            }
        });
    }




    searchByName(name: string, status: number): any {
        return this.tenderRepo.find({
            where: {
                Tendername: Like(`%${name}%`),
                Status: status
            }
        });
    }

    searchByLocation(location: string, status: number): any {
        return this.tenderRepo.find({
            where: {
                Projectlocation: Like(`%${location}%`),
                Status: status
            }
        });
    }

    searchByBudget(minBudget: number, maxBudget: number, status: number): any {
        return this.tenderRepo.find({
            where: {
                Tenderbudget: Between(minBudget, maxBudget),
                Status: status
            }
        });
    }



    FindTenderAuctionsByTenderId(id): any {
        return this.tenderRepo.find(({
            where: { id: id },
            relations: {
                TenderAucton: true,
            },
        }))
    }

    ChangeStatus(id, status) {
        return this.tenderRepo.update(id, {
            Status: status
        })
    }

    Approvebid(id, agencyid) {
        return this.tenderRepo.update(id, {
            Status: 1,
            Agency: agencyid
        })
    }



    async getTotalTendersByStatus(status: number): Promise<number> {
        const count = await this.tenderRepo.count({ where: { Status: status } });
        return count;
    }


    async getTotalTenderscompletedByAgencyID(status: number, agencyId: number): Promise<number> {
        const count = await this.tenderRepo.count({ where: { Status: status, Agency: { id: agencyId } } });
        return count;
      }
    




}