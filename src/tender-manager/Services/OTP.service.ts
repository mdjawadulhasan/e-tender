import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { LessThan, MoreThanOrEqual, Repository } from "typeorm";
import { OTPEntity } from "../entities/OTP.entity";
import { MailerService } from "@nestjs-modules/mailer/dist";



@Injectable()
export class OTPService {


    constructor(
        @InjectRepository(OTPEntity)
        private OTPRepo: Repository<OTPEntity>, private mailerService: MailerService
    ) { }




    async create(email: string) {
        const now = new Date();
        const expirationTime = new Date(now.getTime() + 3 * 60 * 1000);

        const otp = new OTPEntity();
        otp.temail = email;
        otp.CreationTime = now;
        otp.ExpirationTime = expirationTime;
        otp.OTP = Math.floor(10000 + Math.random() * 90000);
        this.sendEmail(otp);
        return await this.OTPRepo.save(otp);

    }

    sendEmail(mydata) {

        const OTPtext = mydata.OTP.toString();
        return this.mailerService.sendMail({
            to: mydata.temail,
            subject: "EmailVerification",
            text: OTPtext,
        });

    }


    async validate(email: string, otp: number) {

        console.log("Inside ",email);
        const now = new Date();
        const otpEntity = await this.OTPRepo.findOne({
            where: {
                temail: email,
                OTP: otp,
                CreationTime: LessThan(now),
                ExpirationTime: MoreThanOrEqual(now),
            },
        });
        if (!otpEntity) {
            return false;
        }
        await this.OTPRepo.delete(otpEntity.id);
        return true;
    }


    async Delete() {
        const currentTime = new Date();
        await OTPEntity.createQueryBuilder()
            .delete()
            .where("ExpirationTime < :currentTime", { currentTime })
            .execute();
    }





}