import { Body, Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MegisterDto } from '../Dtos/megister.dto';
import { MegisterEntity } from '../Entity/megister.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class MegisterService {

  constructor(
    @InjectRepository(MegisterEntity)
    private megisterRepo: Repository<MegisterEntity>,
  ) { }


  getAlluser() {
    return this.megisterRepo.find();
  }

  getuser(id) {
    return this.megisterRepo.findOneBy({ id });
  }
  async AddUser(megisterDTO: MegisterDto): Promise<any> {

    const salt = await bcrypt.genSalt();
    const hassedpassed = await bcrypt.hash(megisterDTO.password, salt);
    megisterDTO.password = hassedpassed;
    return this.megisterRepo.save(megisterDTO);

  }


  async update(megisterDTO: MegisterDto, id): Promise<any> {

    const salt = await bcrypt.genSalt();
    const hassedpassed = await bcrypt.hash(megisterDTO.password, salt);
    megisterDTO.password = hassedpassed;
    return this.megisterRepo.update(id, megisterDTO);
  }

  DeleteUser(id) {
    return this.megisterRepo.delete({ id });

  }


}
