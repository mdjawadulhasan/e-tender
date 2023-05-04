import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Like, MoreThan, Repository } from 'typeorm';
import { BudgeRequestDto } from '../dtos/BudgetRequest.dto';
import { BudgetRequestEntity } from '../entities/BudgetRequest.entity';

@Injectable()
export class BudgetReqService {
  [x: string]: any;
  constructor(
    @InjectRepository(BudgetRequestEntity)
    private BudgetReqRepo: Repository<BudgetRequestEntity>,
  ) {}

  BudgetReqCreate(BreqDTO: BudgeRequestDto) {
    //
    // const now = new Date();
    // BreqDTO.Created_at = now;
    // BreqDTO.Status = 0;
    return this.BudgetReqRepo.save(BreqDTO);
  }



  update(BreqDTO: BudgeRequestDto, id): any {
    return this.BudgetReqRepo.update(id, BreqDTO);
  }

  
  
  
  
  
  

  getAll(): any {
    return this.BudgetReqRepo.find();
  }

  get(id: number): any {
    return this.BudgetReqRepo.findOneBy({ id });
  }

  deleteBudgetReqById(id: number): any {
    return this.BudgetReqRepo.delete(id);
  }

  getCustomBudgetReq(val): any {
    return this.BudgetReqRepo.find({
      where: {
        Status: val,
      },
    });
  }

  ChangeStatus(id, status) {
    return this.BudgetReqRepo.update(id, {
      Status: status,
    });
  }

  async FindBudgetReqByAgencyId(
    agencyId: number,
  ): Promise<BudgetRequestEntity[]> {
    return this.BudgetReqRepo.find({
      where: { Agency: { id: agencyId } },
      relations: {
        Tender: true,
      },
    });
  }
}
