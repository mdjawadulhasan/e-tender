import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Between, Like, MoreThan, Repository } from "typeorm";
import { BudgeRequestDto } from "../dtos/BudgetRequest.dto";
import { BudgetRequestEntity } from "../entities/BudgetRequest.entity";



@Injectable()
export class BudgetReqService {


    constructor(
        @InjectRepository(BudgetRequestEntity)
        private BudgetReqRepo: Repository<BudgetRequestEntity>,
    ) { }




    insert(BreqDTO: BudgeRequestDto) {

        const now = new Date();
        BreqDTO.Created_at = now;
        return this.BudgetReqRepo.save(BreqDTO);
    }

    update(BreqDTO: BudgeRequestDto, id): any {

        const now = new Date();
        BreqDTO.Created_at = now;
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
                Status: val
            }
        });
    }




    ChangeStatus(id, status) {
        return this.BudgetReqRepo.update(id, {
            Status: status
        })
    }




}