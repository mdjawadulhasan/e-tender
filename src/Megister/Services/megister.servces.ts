import { Body, Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MegisterDto } from '../Dtos/megister.dto';
import { MegisterEntity } from '../Entity/megister.entity';
import * as bcrypt from 'bcrypt';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MegisterService {

  constructor(
    @InjectRepository(MegisterEntity)
    private megisterRepo: Repository<MegisterEntity>, private mailerService: MailerService
  ) { }

  getIndex(): string {
    return "Welcome to Megister Home Page";

  }


  get() {
    return this.megisterRepo.find();
  }
  getProfile(id): any {

    return this.megisterRepo.findOneBy({ id });
  }

  deletemegisterById(id: number): any {
    return this.megisterRepo.delete(id);
  }

  async insert(Tmdto: MegisterDto) {

    const salt = await bcrypt.genSalt();
    const hassedpassed = await bcrypt.hash(Tmdto.password, salt);
    Tmdto.password = hassedpassed;
    return this.megisterRepo.save(Tmdto);

  }


  update(Tmdto: MegisterDto, id): any {
    return this.megisterRepo.update(id, Tmdto);
  }



  async signin(mydto) {
    const mydata = await this.megisterRepo.findOneBy({ email: mydto.Email });
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


  async sendEmail(mydata) {
    return await this.mailerService.sendMail({
      to: mydata.email,
      subject: mydata.subject,
      text: mydata.text,
    });

  }


  getMagisterCount():any  {
    const count =  this.megisterRepo.count();
    return count;
}

}




