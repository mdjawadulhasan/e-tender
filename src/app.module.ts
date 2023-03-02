import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TendermanagerModule } from './tender-manager/tendermanager.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TendermanagerEntity } from './tender-manager/entities/tendermanager.entity';
import { TenderEntity } from './tender-manager/entities/tender.entity';
import { AdminEntity } from './admin/entities/admin.entity';
import { AdminModule } from './admin/admin.module';
import { BudgetRequestEntity } from './Agency/entities/BudgetRequest.entity';
import { AgencyEntity } from './Agency/entities/agency.entity';
import { AgencyModule } from './Agency/agency.module';
import { MegisterEntity } from './Megister/Entity/megister.entity';
import { MegisterModule } from './Megister/megister.module';
import { TenderAuctonEntity } from './tender-manager/entities/TenderAuction.entity';
import { FeedBackEntity } from './Megister/Entity/FeedBack.entity';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { MailerModule } from '@nestjs-modules/mailer';



@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: './Images',
      }),
    }),
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: 465,
        ignoreTLS: true,
        secure: true,
        auth: {
          user: 'e.tenderspring2023@gmail.com',
          pass: 'gqdgqqwhfmwbuhvt'
        },
      }
    }),


    TendermanagerModule, AdminModule, AgencyModule, MegisterModule, TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123',
      database: 'e-tender',
      autoLoadEntities: true,
      synchronize: true,
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }