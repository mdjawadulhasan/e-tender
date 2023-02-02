import { Module } from "@nestjs/common";
import { TendermanagerController } from "./tendermanager.controller"
import { TendermanagerService } from "./tendermanager.service"

@Module({

controllers: [TendermanagerController],
providers: [TendermanagerService],

})

export class TendermanagerModule {}