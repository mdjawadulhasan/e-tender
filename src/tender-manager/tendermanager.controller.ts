import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, Req, Request, UsePipes, ValidationPipe } from "@nestjs/common";
import { TenderForm } from "./tender.dto";
import { TendermanagerForm } from "./tendermanager.dto";

import { TendermanagerService } from "./tendermanager.service";


@Controller("/TenderManager")
export class TendermanagerController {
    constructor(private tendermanagerService: TendermanagerService) { }

    @Get("/index")
    getAdmin(): any {
        return this.tendermanagerService.getIndex();
    }
    @Get("/viewprofile")
    getUserByID(): any {
        return this.tendermanagerService.getTmanagerProfile();
    }

    @Post("/create")
    @UsePipes(new ValidationPipe())
    create(@Body() tmdto: TendermanagerForm): any {
        return this.tendermanagerService.insert(tmdto);
    }

    @Put("/update/")
    @UsePipes(new ValidationPipe())
    update(@Body() tmdto: TendermanagerForm): any {
        return this.tendermanagerService.update(tmdto);
    }


    @Post("/createtender")
    @UsePipes(new ValidationPipe())
    createTender(@Body() tenderdto: TenderForm): any {
        return this.tendermanagerService.createTender(tenderdto);
    }

    @Put("/updatetender")
    @UsePipes(new ValidationPipe())
    updateTender(@Body() tenderdto: TenderForm): any {
        return this.tendermanagerService.updateTender(tenderdto);
    }


    @Delete("/deletetender/:id")
    deleteTenderById( @Param("id", ParseIntPipe) id: number): any {
        return this.tendermanagerService.deleteTenderById(id);
    }

    @Get("/viewalltender")
    getAllTender(): any {
      return this.tendermanagerService.getAllTender();
    }  


    @Get("/findtenderById/:id")
    findtenderById( @Param("id", ParseIntPipe) id: number): any {
        return this.tendermanagerService.findtenderById(id);
    } 


    @Get("/viewallagency")
    viewAllAgency(): any {
        return this.tendermanagerService.viewAllAgency();
    } 

    @Get("/viewagencyById/:id")
    viewagencyById(@Param("id", ParseIntPipe) id: number): any {
        return this.tendermanagerService.viewagencyById(id);
    } 

    @Get("/viewagencyByArea")
    viewagencyByArea(@Query() qry:any): any {
      return this.tendermanagerService.viewagencyByArea(qry);
    } 


    

   

}
