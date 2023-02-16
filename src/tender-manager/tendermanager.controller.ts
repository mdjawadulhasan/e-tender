import { Body, Controller, Delete, Get, Param, ParseFloatPipe, ParseIntPipe, Post, Put, Query, Req, Request, UsePipes, ValidationPipe } from "@nestjs/common";
import { TenderForm } from "./Services/tender.dto";
import { TendermanagerForm } from "./DTOs/tendermanager.dto";
import { TendermanagerService } from "./Services/tendermanager.service";


@Controller("/TenderManager")
export class TendermanagerController {
    constructor(private tendermanagerService: TendermanagerService) { }

    @Get("/index")
    getAdmin(): any {
        return this.tendermanagerService.getIndex();
    }
    @Get("/viewprofile/:id")
    getUserByID(@Param("id", ParseIntPipe) id: number): any {
        return this.tendermanagerService.getTmanagerProfile(id);
    }

    @Post("/create")
    @UsePipes(new ValidationPipe())
    async create(@Body() tmdto: TendermanagerForm) {
        return await this.tendermanagerService.insert(tmdto);
    }

    @Put("/update/:id")
    @UsePipes(new ValidationPipe())
    async update(@Body() tmdto: TendermanagerForm, @Param('id') id: number) {
        return this.tendermanagerService.update(tmdto, id);
    }


    @Post("/createtender")
    @UsePipes(new ValidationPipe())
    createTender(@Body() tenderdto: TenderForm): any {
        return this.tendermanagerService.createTender(tenderdto);
    }

    @Put("/updatetender/:id")
    @UsePipes(new ValidationPipe())
    updateTender(@Body() tenderdto: TenderForm): any {
        return this.tendermanagerService.updateTender(tenderdto);
    }


    @Delete("/deletetender/:id")
    deleteTenderById(@Param("id", ParseIntPipe) id: number): any {
        return this.tendermanagerService.deleteTenderById(id);
    }

    @Get("/viewalltender")
    getAllTender(): any {
        return this.tendermanagerService.getAllTender();
    }

    //Patch is used for to update single data .
    @Get("/findtenderById/:id")
    findtenderById(@Param("id", ParseIntPipe) id: number): any {
        return this.tendermanagerService.findtenderById(id);
    }

    @Get("/findtenderByTenderAmount/:amount")
    findtenderByTenderAmount(@Param("amount", ParseFloatPipe) amount: number): any {
        return this.tendermanagerService.findtenderByTenderAmount(amount);
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
    viewagencyByArea(@Query() qry: any): any {
        return this.tendermanagerService.viewagencyByArea(qry);
    }






}
