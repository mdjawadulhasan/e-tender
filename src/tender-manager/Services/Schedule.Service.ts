import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { OTPEntity } from '../entities/OTP.entity';


@Injectable()
export class ScheduleService {
    @Cron('* * * * * *') // runs every hour at 0 minutes
    async handleCron() {
        const currentTime = new Date();
        await OTPEntity.createQueryBuilder()
            .delete()
            .where('ExpirationTime < :currentTime', { currentTime })
            .execute();
    }
}
