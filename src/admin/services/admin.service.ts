import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { AdminForm } from "../DTOs/admindto";
import { AdminEntity } from "../entities/admin.entity";

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

    insert(admindto: AdminForm): any {

        return this.adminRepo.save(admindto);
    }

    update(Tmdto: AdminForm, id): any {
        return this.adminRepo.update(id, Tmdto);
    }


    async updateAdminIsActive(id: number, isActive: boolean): Promise<void> {
        const tender = await this.adminRepo.findOneBy({ id });
        if (!tender) {
            throw new Error(`Tender with id ${id} not found`);
        }
        tender.isActive = isActive;
        await this.adminRepo.save(tender);
    }

    async deleteAdminById(id: number): Promise<void> {
        const admin: AdminForm = await this.adminRepo.findOneBy({ id });
        if (!admin) {
            throw new Error(`Admin with id ${id} not found.`);
        }
        await this.adminRepo.delete(admin);
    }



    userCount(qry): any {
        return "Total : " + qry.utype + "= 10";
    }


    blockuserById(id): any {

        return "Blocked User Id is : " + id;
    }

    delteuserById(id): any {

        return "Deleted User Id is : " + id;
    }

    activeuserById(id): any {

        return "Actived User Id is : " + id;
    }

    userStatusById(id): any {

        return "Status : Active for user with ID =: " + id;
    }

    userLog(id): any {

        return "User log with ID =: " + id;
    }

    sentMsg(qry): any {

        return "Your message is : " + qry.msg;
    }

    adduser(qry): any {

        return "User Name : " + qry.name + " and |  User ID : " + qry.id;
    }




    checkstatus(stat): any {

        return "Status :  " + stat;
    }


}