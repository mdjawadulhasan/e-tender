import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TendermanagerController } from "./tendermanager.controller"
import { TendermanagerEntity } from "./tendermanager.entity";
import { TendermanagerService } from "./tendermanager.service"

@Module({
    
imports: [TypeOrmModule.forFeature([TendermanagerEntity])],
controllers: [TendermanagerController],
providers: [TendermanagerService],

})

export class TendermanagerModule {}