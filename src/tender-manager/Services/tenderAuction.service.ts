import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { TenderAuctinForm } from "../DTOs/TenderAuction.dto";
import { TenderAuctonEntity } from "../entities/TenderAuction.entity";


@Injectable()
export class TenderAuctionService {


    constructor(
        @InjectRepository(TenderAuctonEntity)
        private tenderAuctonRepo: Repository<TenderAuctonEntity>,
    ) { }

    insert(Tmdto: TenderAuctinForm) {

        return this.tenderAuctonRepo.save(Tmdto);
    }

   
   
   

    update(Tmdto: TenderAuctinForm, id): any {
        return this.tenderAuctonRepo.update(id, Tmdto);
    }

    async getAll(TenderID: number) {
        const tenders = await this.tenderAuctonRepo.find({
            where: { Tender: { id: TenderID } }

        });
        return tenders;
    }

    get(id: number): any {
        return this.tenderAuctonRepo.findOneBy({ id });
    }

    deleteBidById(id: number): any {
        return this.tenderAuctonRepo.delete(id);
    }

    async sortBid(TenderID: number) {
        const tenders = await this.tenderAuctonRepo.find({
            where: { Tender: { id: TenderID } },
            order: { Bid: 'ASC' },
        });
        return tenders;
    }

    async deleteBidByTenderId(x: number) {
        const tenders = await this.tenderAuctonRepo.find({ where: { Tender: { id: x } } });
        await this.tenderAuctonRepo.remove(tenders);
      }
    



}