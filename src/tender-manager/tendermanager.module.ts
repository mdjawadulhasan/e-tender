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

@Module({

    imports: [
        // MulterModule.register({
        //     storage: diskStorage({
        //         destination: './Images',
        //     }),
        // }),
        // MailerModule.forRoot({
        //     transport: {
        //         host: 'smtp.gmail.com',
        //         port: 465,
        //         ignoreTLS: true,
        //         secure: true,
        //         auth: {
        //             user: 'e.tenderspring2023@gmail.com',
        //             pass: 'gqdgqqwhfmwbuhvt'
        //         },
        //     }
        // }),

        TypeOrmModule.forFeature([TendermanagerEntity, TenderAuctonEntity, TenderEntity, OTPEntity])],
    controllers: [TendermanagerController, TenderController],
    providers: [OTPService, TendermanagerService, TenderService, TenderAuctionService],
    exports: [TendermanagerService, TenderService]
})

export class TendermanagerModule { }