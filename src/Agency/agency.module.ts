import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgencyController } from './agency.controller';
import { AgencyEntity } from './Entity/agency.entity';
import { BudgetRequestEntity } from './Entity/BudgetRequest.entity';
import { AgencyService } from './Services/agency.service';





@Module({
  imports: [TypeOrmModule.forFeature([AgencyEntity,BudgetRequestEntity])],
  controllers: [AgencyController],
  providers: [AgencyService],
})
export class AgencyModule {}
