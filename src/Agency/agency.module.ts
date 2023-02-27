import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgencyController } from './agency.controller';
import { AgencyEntity } from './entities/agency.entity';
import { AgencyService } from './Services/agency.service';





@Module({
  imports: [TypeOrmModule.forFeature([AgencyEntity])],
  controllers: [AgencyController],
  providers: [AgencyService],
})
export class AgencyModule { }
