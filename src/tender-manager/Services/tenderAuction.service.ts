import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Between, Like, MoreThan, Repository } from "typeorm";
import { TenderForm } from "../DTOs/tender.dto";
import { TenderEntity } from "../entities/tender.entity";
import { TenderAuctonEntity } from "../entities/TenderAuction.entity";


@Injectable()
export class TenderAuctionService {


    constructor(
        @InjectRepository(TenderAuctonEntity)
        private tenderAuctonRepo: Repository<TenderAuctonEntity>,
        @InjectRepository(TenderEntity)
        private readonly tenderRepository: Repository<TenderEntity>,

    ) { }










}