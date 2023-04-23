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


    async insert(Tmdto: TendermanagerForm) {

        const salt = await bcrypt.genSalt();
        const hassedpassed = await bcrypt.hash(Tmdto.password, salt);
        Tmdto.password = hassedpassed;
        return this.tendermanagerRepo.save(Tmdto);

    }

    update(Tmdto: TendermanagerForm, id): any {
        return this.tendermanagerRepo.update(id, Tmdto);
    }

    deleteById(id: number): any {
        return this.tendermanagerRepo.delete(id);
    }

    getall(): any {
        return this.tendermanagerRepo.find();
    }



    async signin(uemail, upassword) {
        const mydata = await this.tendermanagerRepo.findOneBy({ email: uemail });
        const isMatch = await bcrypt.compare(upassword, mydata.password);
       
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