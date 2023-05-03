import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { AdminForm } from "../DTOs/admindto";
import { AdminEntity } from "../entities/admin.entity";
import * as bcrypt from 'bcrypt';
import { MailerService } from "@nestjs-modules/mailer";

@Injectable()
export class AdminService {


    constructor(
        @InjectRepository(AdminEntity)
        private adminRepo: Repository<AdminEntity>, private mailerService: MailerService
    ) { }


    getIndex(): string {
        return "Welcome to Admin Dash Board";

    }
    getTadminProfile(id): any {

        return this.adminRepo.findOneBy({ id });
    }

    getTadminProfilebyemail(email): any {

        return this.adminRepo.findOneBy({ email });
    }


    async sendEmail(mydata) {
        return await this.mailerService.sendMail({
            to: mydata.email,
            subject: mydata.subject,
            text: mydata.text,
        });

    }



    async insert(admindto: AdminForm) {

        const salt = await bcrypt.genSalt();
        const hassedpassed = await bcrypt.hash(admindto.password, salt);
        admindto.password = hassedpassed;
        return this.adminRepo.save(admindto);

    }


    async signin(aemail, apassword) {
        const mydata = await this.adminRepo.findOneBy({ email: aemail });
        const isMatch = await bcrypt.compare(apassword, mydata.password);


        if (typeof isMatch !== 'undefined') {
        }
        if (isMatch) {
            return mydata.id;
        }
        else {
            return 0;
        }
    }


    update(admindto: AdminForm, id): any {
        return this.adminRepo.update(id, admindto);
    }


   

    async deleteAdminById(id: number): Promise<void> {
        const admin: AdminForm = await this.adminRepo.findOneBy({ id });
        if (!admin) {
            throw new Error(`Admin with id ${id} not found.`);
        }
        await this.adminRepo.delete(admin);
    }



    //Megister

    FindMegisterByAdminId(id): any {
        return this.adminRepo.find(({
            where: { id: id },
            relations: {
                Megisters: true,
            },
        }))
    }




}