import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgencyController } from './agency.controller';
<<<<<<< HEAD
import { AgencyEntity } from './Entity/agency.entity';
import { BudgetRequestEntity } from './Entity/BudgetRequest.entity';
=======
import { AgencyEntity } from './entities/agency.entity';
>>>>>>> 36707f84e0205efa16e22f6f3c9f8a77e3682413
import { AgencyService } from './Services/agency.service';





@Module({
  imports: [TypeOrmModule.forFeature([AgencyEntity,BudgetRequestEntity])],
  controllers: [AgencyController],
  providers: [AgencyService],
})
export class AgencyModule { }
