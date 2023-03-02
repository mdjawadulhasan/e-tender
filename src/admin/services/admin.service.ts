import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { AdminForm } from "../DTOs/admindto";
import { AdminEntity } from "../entities/admin.entity";
import * as bcrypt from 'bcrypt';

@Injectable()
export class AdminService {


    constructor(
        @InjectRepository(AdminEntity)
        private adminRepo: Repository<AdminEntity>,
    ) { }


    getIndex(): string {
        return "Welcome to Admin Dash Board";

    }
    getTadminProfile(id): any {

        return this.adminRepo.findOneBy({ id });
    }



    async insert(admindto: AdminForm) {

        const salt = await bcrypt.genSalt();
        const hassedpassed = await bcrypt.hash(admindto.password, salt);
        admindto.password = hassedpassed;
        return this.adminRepo.save(admindto);

    }


    async signin(mydto) {
        const mydata = await this.adminRepo.findOneBy({ email: mydto.email });
        const isMatch = await bcrypt.compare(mydto.password, mydata.password);
        if (isMatch) {
            return 1;
        }
        else {
            return 0;
        }

    }

    update(Tmdto: AdminForm, id): any {
        return this.adminRepo.update(id, Tmdto);
    }


    // async updateAdminIsActive(id: number, isActive: boolean): Promise<void> {
    //     const tender = await this.adminRepo.findOneBy({ id });
    //     if (!tender) {
    //         throw new Error(`Tender with id ${id} not found`);
    //     }
    //     tender.isActive = isActive;
    //     await this.adminRepo.save(tender);
    // }

    async deleteAdminById(id: number): Promise<void> {
        const admin: AdminForm = await this.adminRepo.findOneBy({ id });
        if (!admin) {
            throw new Error(`Admin with id ${id} not found.`);
        }
        await this.adminRepo.delete(admin);
    }






}