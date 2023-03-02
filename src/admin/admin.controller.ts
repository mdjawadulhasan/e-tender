import { Body, Controller, Delete, Get, Param, ParseBoolPipe, ParseIntPipe, Patch, Post, Put, Query, UsePipes, ValidationPipe } from "@nestjs/common";
import { MegisterDto } from "src/Megister/Dtos/megister.dto";
import { MegisterService } from "src/Megister/Services/megister.servces";
import { AdminForm } from "./DTOs/admindto";
import { AdminService } from "./services/admin.service";


@Controller("/Admin")
export class AdminController {
    constructor(private adminService: AdminService, private readonly megisterService: MegisterService) { }

    //Admin CRUD


    @Get("/index")
    getAdmin(): any {
        return this.adminService.getIndex();
    }

    @Get("/viewprofile/:id")
    getUserByID(@Param("id", ParseIntPipe) id: number): any {
        return this.adminService.getTadminProfile(id);
    }

    @Post("/create")
    @UsePipes(new ValidationPipe())
    async create(@Body() admindto: AdminForm) {
        return await this.adminService.insert(admindto);
    }

    @Put("/update/:id")
    @UsePipes(new ValidationPipe())
    async update(@Body() admindto: AdminForm, @Param('id') id: number) {
        return this.adminService.update(admindto, id);
    }


    // @Patch(':id')
    // async updateAdminIsActive(
    //     @Query('id') id: number,
    //     @Query('isActive') isActive: boolean,
    // ): Promise<void> {
    //     return this.adminService.updateAdminIsActive(id, isActive);
    // }

    @Delete('/delete/:id')
    async deleteAdminById(@Param('id') id: number): Promise<void> {
        return this.adminService.deleteAdminById(id);
    }
















    

    //-----------------------------------------
    //Megister Modify

    @Get("/Megister/getall")
    getAlluser() {
        return this.megisterService.getAlluser();
    }

    @Get("/Megister/get/:id")
    getuser(@Param("id", ParseIntPipe) id: number): any {
        return this.megisterService.getuser(id);
    }

    @Post("/Megister/add")
    @UsePipes(new ValidationPipe)
    AddUser(@Body() megister: MegisterDto): any {
        return this.megisterService.AddUser(megister);
    }

    @Delete("/Megister/deleteById/:id")
    DeleteUser(@Param('id', ParseIntPipe) id: number): any {
        return this.megisterService.DeleteUser(id);
    }






}
