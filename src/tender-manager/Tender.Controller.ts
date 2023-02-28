import { Body, Controller, Delete, Get, Param, ParseFloatPipe, ParseIntPipe, Post, Put, Query, Req, Request, UploadedFile, UseInterceptors, UsePipes, ValidationPipe } from "@nestjs/common";
import { TenderForm } from "./DTOs/tender.dto";
import { TenderService } from "./Services/tender.service";
import { TendermanagerService } from "./Services/tendermanager.service";


@Controller("/Tenders")
export class TenderController {
    constructor(private tendermanagerService: TendermanagerService,
        private tenderService: TenderService) { }


    //-----------Tender CRUD




    @Post("/create")
    @UsePipes(new ValidationPipe())
    createTender(@Body() tenderdto: TenderForm): any {
        return this.tenderService.insert(tenderdto);
    }

    @Put("/update:id")
    @UsePipes(new ValidationPipe())
    async updateTender(@Body() tdto: TenderForm, @Param('id') id: number) {
        return this.tenderService.update(tdto, id);
    }

    @Delete("/delete/:id")
    deleteTenderById(@Param("id", ParseIntPipe) id: number): any {
        return this.tenderService.deleteTenderById(id);
    }

    @Get("/all")
    getAllTender(): any {
        return this.tenderService.getAll();
    }

    @Get("/viewTender/:id")
    getUserByID(@Param("id", ParseIntPipe) id: number): any {
        return this.tenderService.get(id);
    }

    @Get("/Available")
    getAvailableTender(): any {
        return this.tenderService.getCustom(0);
    }

    @Get("/Assigned")
    getAssignedTender(): any {
        return this.tenderService.getCustom(1);
    }

    @Get("/Blocked")
    getBlockedTender(): any {
        return this.tenderService.getCustom(2);
    }


    @Get("/Completed")
    getCompletedTender(): any {
        return this.tenderService.getCustom(3);
    }



    @Get("/Available/FindByManagerId/:id")
    FindTenderByManagerId(@Param("id", ParseIntPipe) id: number): any {
        return this.tendermanagerService.FindTenderByManagerId(id);
    }


    //Searching Available Tender for Auctions

    @Get('/available/search-by-name/:name')
    searchByName(@Param('name') name: string): any {
        return this.tenderService.searchByName(name, 0);
    }

    @Get('/available/search-by-location/:location')
    searchByLocation(@Param('location') location: string): any {
        return this.tenderService.searchByLocation(location, 0);
    }

    @Get('/available/search-by-budget/:minBudget/:maxBudget')
    searchByBudget(
        @Param('minBudget') minBudget: number,
        @Param('maxBudget') maxBudget: number
    ): any {

        return this.tenderService.searchByBudget(minBudget, maxBudget, 0);
    }



    //Searching Ongoing Project By the Tenders

    @Get('/Ongoing/search-by-name/:name')
    searchOGTByName(@Param('name') name: string): any {
        return this.tenderService.searchByName(name, 1);
    }

    @Get('/Ongoing/search-by-location/:location')
    earchOGTByLocation(@Param('location') location: string): any {
        return this.tenderService.searchByLocation(location, 1);
    }

    @Get('/Ongoing/search-by-budget/:minBudget/:maxBudget')
    earchOGTByBudget(
        @Param('minBudget') minBudget: number,
        @Param('maxBudget') maxBudget: number
    ): any {

        return this.tenderService.searchByBudget(minBudget, maxBudget, 1);
    }



    //Searching Blocked Project By the Tenders

    @Get('/Blocked/search-by-name/:name')
    searchBLKTByName(@Param('name') name: string): any {
        return this.tenderService.searchByName(name, 2);
    }

    @Get('/Blocked/search-by-location/:location')
    earchBLKTByLocation(@Param('location') location: string): any {
        return this.tenderService.searchByLocation(location, 2);
    }

    @Get('/Blocked/search-by-budget/:minBudget/:maxBudget')
    searchBLKTByBudget(
        @Param('minBudget') minBudget: number,
        @Param('maxBudget') maxBudget: number
    ): any {

        return this.tenderService.searchByBudget(minBudget, maxBudget, 2);
    }


    //Searching Completed  Project By the Tenders

    @Get('/Completed /search-by-name/:name')
    searchCmpTByName(@Param('name') name: string): any {
        return this.tenderService.searchByName(name, 3);
    }

    @Get('/Completed /search-by-location/:location')
    earchCmpTByLocation(@Param('location') location: string): any {
        return this.tenderService.searchByLocation(location, 3);
    }

    @Get('/Completed/search-by-budget/:minBudget/:maxBudget')
    searchCmpTByBudget(
        @Param('minBudget') minBudget: number,
        @Param('maxBudget') maxBudget: number
    ): any {

        return this.tenderService.searchByBudget(minBudget, maxBudget, 3);
    }

}