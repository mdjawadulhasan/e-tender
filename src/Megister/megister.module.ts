import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MegisterController } from './megister.controller';
import { MegisterEntity } from './Entity/megister.entity';
import { MegisterService } from './Services/megister.servces';
import { FeedBackEntity } from './Entity/FeedBack.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MegisterEntity, FeedBackEntity])],
  controllers: [MegisterController],
  providers: [MegisterService],
  exports: [MegisterService],
})
export class MegisterModule { }
