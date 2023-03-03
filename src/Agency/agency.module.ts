import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgencyController } from './agency.controller';
import { AgencyEntity } from './entities/agency.entity';
import { BudgetRequestEntity } from './entities/BudgetRequest.entity';
import { AgencyService } from './Services/agency.service';
import { BudgetReqService } from './Services/BudgetReq.service';





@Module({
  imports: [TypeOrmModule.forFeature([AgencyEntity, BudgetRequestEntity])],
  controllers: [AgencyController],
  providers: [AgencyService, BudgetReqService],
  exports: [AgencyService, BudgetReqService]

})
export class AgencyModule { }
