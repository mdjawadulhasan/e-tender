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





}