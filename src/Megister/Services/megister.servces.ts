import { Body, Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MegisterDto } from '../Dtos/megister.dto';
import { MegisterEntity } from '../Entity/megister.entity';

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
  AddUser(megister: MegisterDto): any {
    return this.megisterRepo.save(megister);

  }
  Update(name: string): string {
    return "Update " + name + " Megister Informatin !";
  }
  DeleteUser(id) {
    return this.megisterRepo.delete({ id });

  }


}
