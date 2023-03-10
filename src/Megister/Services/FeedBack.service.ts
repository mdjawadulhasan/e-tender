import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { FeedBackDto } from "../Dtos/FeedBack.dto";
import { FeedBackEntity } from "../Entity/FeedBack.entity";



@Injectable()
export class FeedbackService {


    constructor(
        @InjectRepository(FeedBackEntity)
        private FeedBackRepo: Repository<FeedBackEntity>,
    ) { }

    insert(Tmdto: FeedBackDto) {

        return this.FeedBackRepo.save(Tmdto);
    }

    update(Tmdto: FeedBackDto, id): any {
        return this.FeedBackRepo.update(id, Tmdto);
    }

    getAll(): any {
        return this.FeedBackRepo.find();
    }

    get(id: number): any {
        return this.FeedBackRepo.findOneBy({ id });
    }

    deleteById(id: number): any {
        return this.FeedBackRepo.delete(id);
    }

}