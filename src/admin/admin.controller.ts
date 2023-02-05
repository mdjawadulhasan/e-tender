import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, Req, Request, UsePipes, ValidationPipe } from "@nestjs/common";
import { AdminForm } from "./admindto";
import { AdminService } from "./admin.service";


@Controller("/Admin")
export class AdminController {
    constructor(private adminService: AdminService) { }

    @Get("/index")
    getAdmin(): any {
        return this.adminService.getIndex();
    }
    @Get("/viewprofile")
    getUserByID(): any {
        return this.adminService.getTadminProfile();
    }

    @Post("/create")
    @UsePipes(new ValidationPipe())
    create(@Body() tmdto: AdminForm): any {
        return this.adminService.insert(tmdto);
    }

    @Put("/update/")
    @UsePipes(new ValidationPipe())
    update(@Body() tmdto: AdminForm): any {
        return this.adminService.update(tmdto);
    }

    @Get("/usercount")
    userCount(@Query() qry:any): any {
      return this.adminService.userCount(qry);
    } 


    @Get("/adduser")
    adduser(@Query() qry:any): any {
      return this.adminService.adduser(qry);
    } 
    
    @Get("/blockuser/:id")
    blockuserById( @Param("id", ParseIntPipe) id: number): any {
        return this.adminService.blockuserById(id);
    } 

    @Get("/activeuser/:id")
    activeuserById( @Param("id", ParseIntPipe) id: number): any {
        return this.adminService.activeuserById(id);
    } 


    @Get("/deleteuser/:id")
    delteuserById( @Param("id", ParseIntPipe) id: number): any {
        return this.adminService.delteuserById(id);
    } 


    @Get("/userstatus/:id")
    userStatusById( @Param("id", ParseIntPipe) id: number): any {
        return this.adminService.userStatusById(id);
    } 

    @Get("/sentmsg")
    sentMsg(@Query() qry:any): any {
      return this.adminService.sentMsg(qry);
    } 

    @Get("/userlog/:id")
    userLog( @Param("id", ParseIntPipe) id: number): any {
        return this.adminService.userLog(id);
    } 



}
