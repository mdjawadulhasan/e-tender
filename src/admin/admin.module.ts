import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AgencyModule } from "src/Agency/agency.module";
import { MegisterModule } from "src/Megister/megister.module";
import { TendermanagerModule } from "src/tender-manager/tendermanager.module";
import { AdminController } from "./admin.controller"
import { AdminEntity } from "./entities/admin.entity";
import { AdminService } from "./services/admin.service"

@Module({
    imports: [TypeOrmModule.forFeature([AdminEntity]), MegisterModule, AgencyModule,
        TendermanagerModule],
    controllers: [AdminController],
    providers: [AdminService],

})

export class AdminModule { }