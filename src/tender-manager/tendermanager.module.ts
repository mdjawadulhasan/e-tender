import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TendermanagerController } from "./tendermanager.controller"
import { TendermanagerEntity } from "./entities/tendermanager.entity";
import { TendermanagerService } from "./Services/tendermanager.service"
import { TenderEntity } from "./entities/tender.entity";
import { TenderService } from "./Services/tender.service";
import { MulterModule } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { extname } from "path";

@Module({

    imports: [
        MulterModule.register({
            storage: diskStorage({
                destination: './Images',
            }),
        }),


        TypeOrmModule.forFeature([TendermanagerEntity, TenderEntity])],
    controllers: [TendermanagerController],
    providers: [TendermanagerService, TenderService],

})

export class TendermanagerModule { }