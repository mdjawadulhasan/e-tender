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
){}
  getAlluser(): string {
    return 'Get ALL User Megister!';
  }
  getuser(id) {
    return this.megisterRepo.findOneBy({id});
  }
  AddUser(megister:MegisterDto): any {
    return this.megisterRepo.save(megister);

  }
  Update(name:string): string {
    return "Update " + name+" Megister Informatin !";
  }
  DeleteUser(id) {
    return this.megisterRepo.delete({id});
  
 }

   searchbyid(id :string) :any{
    return "fund megister "+id ;
   }
   searchbyname(name :string) :any{
    return "fund megister "+name ;
   }

   progresss() :any{
    return "80% work done  " ;
   }
   megisterArea() :any{
    return " megister work in dhaka north  " ;
   }

   megisterPosition():any{
    return "Senior "
   }
   Assigntender():any{
    return "7 tender monitor now "
   }
   completetender():any{
    return "30 tender complete monitoring"
   }
   completetenderbyid():any{
    return "30"
   }
   MegiterVisitOrNot(id):boolean{
    return id;
   }
}
