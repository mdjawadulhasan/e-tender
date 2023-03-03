import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TendermanagerModule } from 'src/tender-manager/tendermanager.module';
import { AgencyController } from './agency.controller';
import { AgencyEntity } from './entities/agency.entity';
import { BudgetRequestEntity } from './entities/BudgetRequest.entity';
import { AgencyService } from './Services/agency.service';
import { BudgetReqService } from './Services/BudgetReq.service';





@Module({
  imports: [TypeOrmModule.forFeature([AgencyEntity, BudgetRequestEntity]), TendermanagerModule],
  controllers: [AgencyController],
  providers: [AgencyService, BudgetReqService],
  exports: [AgencyService, BudgetReqService]

})
export class AgencyModule { }
