import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MegisterModule } from "src/Megister/megister.module";
import { AdminController } from "./admin.controller"
import { AdminEntity } from "./entities/admin.entity";
import { AdminService } from "./services/admin.service"

@Module({
    imports: [TypeOrmModule.forFeature([AdminEntity]), MegisterModule],
    controllers: [AdminController],
    providers: [AdminService],

})

export class AdminModule { }