import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { TendermanagerForm } from "../DTOs/tendermanager.dto";
import { TendermanagerEntity } from "../entities/tendermanager.entity";
import * as bcrypt from 'bcrypt';

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


    async signin(mydto) {
        const mydata = await this.tendermanagerRepo.findOneBy({ email: mydto.email });
        const isMatch = await bcrypt.compare(mydto.password, mydata.password);
        if (isMatch) {
            return 1;
        }
        else {
            return 0;
        }

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