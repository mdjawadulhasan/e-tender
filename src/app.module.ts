import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TendermanagerModule } from './tender-manager/tendermanager.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TendermanagerEntity } from './tender-manager/entities/tendermanager.entity';
import { TenderEntity } from './tender-manager/entities/tender.entity';
// import { AdminEntity } from './admin/entities/admin.entity';
import { AdminModule } from './admin/admin.module';
import { AgencyEntity } from './Agency/Entity/agency.entity';
import { AgencyModule } from './Agency/agency.module';
import { BudgetRequestEntity } from './Agency/Entity/BudgetRequest.entity';

@Module({
  imports: [TendermanagerModule,AdminModule,AgencyModule,
     TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '41959',
    database: 'Agency',
    entities: [TendermanagerEntity,TenderEntity,AgencyEntity,BudgetRequestEntity],
    autoLoadEntities: true,
    synchronize: true,
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
