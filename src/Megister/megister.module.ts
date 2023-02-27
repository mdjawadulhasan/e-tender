import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MegisterController } from './megister.controller';
import { MegisterEntity } from './Entity/megister.entity';
import { MegisterService } from './Services/megister.servces';

@Module({
  imports: [TypeOrmModule.forFeature([MegisterEntity])],
  controllers: [MegisterController],
  providers: [MegisterService],
})
export class MegisterModule {}
