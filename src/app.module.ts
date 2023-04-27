import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TendermanagerModule } from './tender-manager/tendermanager.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from './admin/admin.module';
import { AgencyModule } from './Agency/agency.module';
import { MegisterModule } from './Megister/megister.module';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { MailerModule } from '@nestjs-modules/mailer';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: './Images',
      }),
    }),
    ScheduleModule.forRoot(),
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: 465,
        ignoreTLS: true,
        secure: true,
        auth: {
          user: 'e.tenderspring2023@gmail.com',
          pass: 'gqdgqqwhfmwbuhvt',
        },
      },
    }),

    TendermanagerModule,
    AdminModule,
    AgencyModule,
    MegisterModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '41959',
      database: 'e-tender',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
