import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TendermanagerModule } from './tender-manager/tendermanager.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TendermanagerEntity } from './tender-manager/entities/tendermanager.entity';
import { TenderEntity } from './tender-manager/entities/tender.entity';
import { AdminEntity } from './admin/entities/admin.entity';

@Module({
  imports: [TendermanagerModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123',
    database: 'temp',
    entities: [TendermanagerEntity,TenderEntity,AdminEntity],
    autoLoadEntities: true,
    synchronize: true,
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
