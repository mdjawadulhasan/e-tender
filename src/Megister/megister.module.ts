import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MegisterController } from './megister.controller';
import { MegisterEntity } from './Entity/megister.entity';
import { MegisterService } from './Services/megister.servces';
import { FeedBackEntity } from './Entity/FeedBack.entity';
import { FeedbackService } from './Services/FeedBack.service';
import { TendermanagerModule } from 'src/tender-manager/tendermanager.module';
import { AgencyModule } from "src/Agency/agency.module";

@Module({
  imports: [TypeOrmModule.forFeature([MegisterEntity, FeedBackEntity]),AgencyModule,TendermanagerModule],
  controllers: [MegisterController],
  providers: [MegisterService,FeedbackService],
  exports: [MegisterService,FeedbackService],
})
export class MegisterModule { }
