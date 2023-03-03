import { Injectable, Param, Put, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AgencyEntity } from '../entities/agency.entity';
import { AgencyDto } from '../DTOs/agency.dto';
import * as bcrypt from 'bcrypt';
import { MailerService } from "@nestjs-modules/mailer";

@Injectable()
export class AgencyService {
    constructor(
        @InjectRepository(AgencyEntity)
        private agencyRepo: Repository<AgencyEntity>, private mailerService: MailerService
    ) { }
   
    
    getIndex(): string {
        return "Welcome to Agency Dash Board";

    }


    async insert(agencyDTO: AgencyDto) {

        const salt = await bcrypt.genSalt();
        const hassedpassed = await bcrypt.hash(agencyDTO.password, salt);
        agencyDTO.password = hassedpassed;
        return this.agencyRepo.save(agencyDTO);

    }

    async signin(mydto) {
        const mydata = await this.agencyRepo.findOneBy({ Email: mydto.Email });
        const isMatch = await bcrypt.compare(mydto.password, mydata.password);

        if (typeof isMatch !== 'undefined') {
        }
        if (isMatch) {
            return mydata.id;
        }
        else {
            return 0;
        }
    }


    async update(agencyDTO: AgencyDto, id) {

        const salt = await bcrypt.genSalt();
        const hassedpassed = await bcrypt.hash(agencyDTO.password, salt);
        agencyDTO.password = hassedpassed;
        return this.agencyRepo.update(id, agencyDTO);
    }

    getAgencyById(id) {

        return this.agencyRepo.findOneBy({ id });
    }

    
    SearchAgencyByName(AgencyName) {
        return this.agencyRepo.findOneBy({ AgencyName });
    }

    deleteAgencyByid(id) {
        return this.agencyRepo.delete(id);

    }

    async sendEmail(mydata) {
        return await this.mailerService.sendMail({
            to: mydata.email,
            subject: mydata.subject,
            text: mydata.text,
        });

    }


    FindFeedbacksByAgencyId(id): any {
        return this.agencyRepo.find(({
            where: { id: id },
            relations: {
                feedBack: true,
            },
        }))
    }


    FindTendersByAgencyId(id): any {
        return this.agencyRepo.find(({
            where: { id: id },
            relations: {
                tenders: true,
            },
        }))
    }

    


    
      
      
}