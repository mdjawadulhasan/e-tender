import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TendermanagerController } from "./tendermanager.controller"
import { TendermanagerEntity } from "./entities/tendermanager.entity";
import { TendermanagerService } from "./Services/tendermanager.service"
import { TenderEntity } from "./entities/tender.entity";
import { TenderService } from "./Services/tender.service";

@Module({

    imports: [TypeOrmModule.forFeature([TendermanagerEntity,TenderEntity])],
    controllers: [TendermanagerController],
    providers: [TendermanagerService,TenderService],

})

export class TendermanagerModule { }