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
import { TenderAuctonEntity } from "./entities/TenderAuction.entity";
import { TenderController } from "./Tender.Controller";
import { TenderAuctionService } from "./Services/tenderAuction.service";
import { OTPEntity } from "./entities/OTP.entity";
import { OTPService } from "./Services/OTP.service";
import { MailerModule } from "@nestjs-modules/mailer";
import { ScheduleService } from "./Services/Schedule.Service";

@Module({

    imports: [

        TypeOrmModule.forFeature([TendermanagerEntity, TenderAuctonEntity, TenderEntity, OTPEntity])],
    controllers: [TendermanagerController, TenderController],
    providers: [OTPService, TendermanagerService, TenderService, TenderAuctionService,ScheduleService],
    exports: [TendermanagerService, TenderService, TenderAuctionService]
})

export class TendermanagerModule { }