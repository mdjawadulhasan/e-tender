import { Body, Controller, Delete, Get, Param, ParseBoolPipe, ParseIntPipe, Patch, Post, Put, Query, UsePipes, ValidationPipe } from "@nestjs/common";
import { AdminForm } from "./DTOs/admindto";
import { AdminService } from "./services/admin.service";


@Controller("/Admin")
export class AdminController {
    constructor(private adminService: AdminService) { }

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

   
    @Patch(':id')
    async updateAdminIsActive(
      @Query('id') id: number,
      @Query('isActive') isActive: boolean,
    ): Promise<void> {
      return this.adminService.updateAdminIsActive(id, isActive);
    }
    
    @Delete('/deleteadmin/:id')
    async deleteAdminById(@Param('id') id: number): Promise<void> {
      return this.adminService.deleteAdminById(id);
    }


    //-----------------------------------------





    @Get("/adduser")
    adduser(@Query() qry: any): any {
        return this.adminService.adduser(qry);
    }

    @Get("/blockuser/:id")
    blockuserById(@Param("id", ParseIntPipe) id: number): any {
        return this.adminService.blockuserById(id);
    }

    @Get("/activeuser/:id")
    activeuserById(@Param("id", ParseIntPipe) id: number): any {
        return this.adminService.activeuserById(id);
    }


    


    @Get("/userstatus/:id")
    userStatusById(@Param("id", ParseIntPipe) id: number): any {
        return this.adminService.userStatusById(id);
    }

    @Get("/checkstatus/:stat")
    checkstatus(@Param("stat", ParseBoolPipe) stat: boolean): any {
        return this.adminService.checkstatus(stat);
    }

    @Get("/sentmsg")
    sentMsg(@Query() qry: any): any {
        return this.adminService.sentMsg(qry);
    }

    @Get("/userlog/:id")
    userLog(@Param("id", ParseIntPipe) id: number): any {
        return this.adminService.userLog(id);
    }



}
