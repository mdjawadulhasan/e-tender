import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgencyEntity } from './Agency/agenci.entity';
import { AgencyModule } from './Agency/agency.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { TendermanagerModule } from './tender-manager/tendermanager.module';

@Module({
  imports: [AgencyModule,TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '41959',
    database: 'Agency',
    entities:[AgencyEntity],
    autoLoadEntities: true,
    synchronize: true,

  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
