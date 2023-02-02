import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, Req, Request, UsePipes, ValidationPipe } from "@nestjs/common";
import { TendermanagerForm } from "./tendermanager.dto";
import { TendermanagerService } from "./tendermanager.service";


@Controller("/admin")
export class TendermanagerController {
    constructor(private tendermanagerService: TendermanagerService) { }

    @Get("/index")
    getAdmin(): any {
        return this.tendermanagerService.getIndex();
    }
    @Get("/finduser/:id")
    getUserByID(@Param("id", ParseIntPipe) id: number,): any {
        return this.tendermanagerService.getUserByID(id);
    }


    @Get("/finduser")
    getUserByIDName(@Query() qry: any): any {
        return this.tendermanagerService.getUserByIDName(qry);
    }
    @Post("/insertuser")
    @UsePipes(new ValidationPipe())
    insertUser(@Body() mydto: TendermanagerForm): any {
        return this.tendermanagerService.insertUser(mydto);
    }

    @Put("/updateuser/")
    @UsePipes(new ValidationPipe())
    updateUser(
        @Body("name") name: string,
        @Body("id") id: number
    ): any {
        return this.tendermanagerService.updateUser(name, id);
    }

    @Put("/updateuser/:id")
    updateUserbyid(
        @Body("name") name: string,
        @Param("id", ParseIntPipe) id: number
    ): any {
        return this.tendermanagerService.updateUserbyid(name, id);
    }

    @Delete("/deleteuser/:id")
    deleteUserbyid(
        @Param("id", ParseIntPipe) id: number
    ): any {
        return this.tendermanagerService.deleteUserbyid(id);
    }

}
