import { Body, Controller, Delete, Get, Param, ParseFloatPipe, ParseIntPipe, Post, Put, Query, Req, Request, UploadedFile, UseInterceptors, UsePipes, ValidationPipe } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { extname } from "path";
import { TenderForm } from "./DTOs/tender.dto";
import { TendermanagerForm } from "./DTOs/tendermanager.dto";
import { TenderService } from "./Services/tender.service";
import { TendermanagerService } from "./Services/tendermanager.service";
import * as moment from 'moment';
import * as fs from 'fs';

@Controller("/TenderManager")
export class TendermanagerController {
    constructor(private tendermanagerService: TendermanagerService,
        private tenderService: TenderService) { }

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
    @UseInterceptors(FileInterceptor('file', { dest: 'tmp/' }))
    async create(@UploadedFile() file: Express.Multer.File, @Body() tmdto: TendermanagerForm) {
        if (file) {
            const filename = `${moment().format('YYYYMMDDHHmmss')}${extname(file.originalname)}`;
            tmdto.ImgfileName = filename;
            const tmpFilePath = file.path; // temporary path of the uploaded file
            const destFilePath = `Images/${filename}`;
            await fs.promises.mkdir('Images', { recursive: true }); // create Images folder if it doesn't exist
            await fs.promises.rename(tmpFilePath, destFilePath); // move the file to the Images folder
        }
        return await this.tendermanagerService.insert(tmdto);
    }


    @Put("/update/:id")
    @UsePipes(new ValidationPipe())
    async update(@Body() tmdto: TendermanagerForm, @Param('id') id: number) {
        return this.tendermanagerService.update(tmdto, id);
    }




    //-----------Tender CRUD

    @Post("/tender/create")
    @UsePipes(new ValidationPipe())
    createTender(@Body() tenderdto: TenderForm): any {
        return this.tenderService.insert(tenderdto);
    }

    @Put("/tender/update:id")
    @UsePipes(new ValidationPipe())
    async updateTender(@Body() tdto: TenderForm, @Param('id') id: number) {
        return this.tenderService.update(tdto, id);
    }

    @Delete("/tender/delete/:id")
    deleteTenderById(@Param("id", ParseIntPipe) id: number): any {
        return this.tenderService.deleteTenderById(id);
    }

    @Get("/tender/all")
    getAllTender(): any {
        return this.tenderService.getAll();
    }

    @Get("/tender/Available")
    getAvailableTender(): any {
        return this.tenderService.getCustom(0);
    }

    @Get("/tender/Assigned")
    getAssignedTender(): any {
        return this.tenderService.getCustom(1);
    }

    @Get("/tender/Blocked")
    getBlockedTender(): any {
        return this.tenderService.getCustom(2);
    }


    @Get("/tender/Completed")
    getCompletedTender(): any {
        return this.tenderService.getCustom(3);
    }



    @Get("/Available/FindByManagerId/:id")
    FindTenderByManagerId(@Param("id", ParseIntPipe) id: number): any {
        return this.tendermanagerService.FindTenderByManagerId(id);
    }


    //Searching Available Tender for Auctions

    @Get('/tender/available/search-by-name/:name')
    searchByName(@Param('name') name: string): any {
        return this.tenderService.searchByName(name,0);
    }

    @Get('/tender/available/search-by-location/:location')
    searchByLocation(@Param('location') location: string): any {
        return this.tenderService.searchByLocation(location,0);
    }

    @Get('/tender/available/search-by-budget/:minBudget/:maxBudget')
    searchByBudget(
        @Param('minBudget') minBudget: number,
        @Param('maxBudget') maxBudget: number
    ): any {

        return this.tenderService.searchByBudget(minBudget, maxBudget,0);
    }



    //Searching Ongoing Project By the Tenders

    @Get('/tender/Ongoing/search-by-name/:name')
    searchOGTByName(@Param('name') name: string): any {
        return this.tenderService.searchByName(name,1);
    }

    @Get('/tender/Ongoing/search-by-location/:location')
    earchOGTByLocation(@Param('location') location: string): any {
        return this.tenderService.searchByLocation(location,1);
    }

    @Get('/tender/Ongoing/search-by-budget/:minBudget/:maxBudget')
    earchOGTByBudget(
        @Param('minBudget') minBudget: number,
        @Param('maxBudget') maxBudget: number
    ): any {

        return this.tenderService.searchByBudget(minBudget, maxBudget,1);
    }



    //Searching Blocked Project By the Tenders

    @Get('/tender/Blocked/search-by-name/:name')
    searchBLKTByName(@Param('name') name: string): any {
        return this.tenderService.searchByName(name,2);
    }

    @Get('/tender/Blocked/search-by-location/:location')
    earchBLKTByLocation(@Param('location') location: string): any {
        return this.tenderService.searchByLocation(location,2);
    }

    @Get('/tender/Blocked/search-by-budget/:minBudget/:maxBudget')
    searchBLKTByBudget(
        @Param('minBudget') minBudget: number,
        @Param('maxBudget') maxBudget: number
    ): any {

        return this.tenderService.searchByBudget(minBudget, maxBudget,2);
    }


    //Searching Completed  Project By the Tenders

    @Get('/tender/Completed /search-by-name/:name')
    searchCmpTByName(@Param('name') name: string): any {
        return this.tenderService.searchByName(name,3);
    }

    @Get('/tender/Completed /search-by-location/:location')
    earchCmpTByLocation(@Param('location') location: string): any {
        return this.tenderService.searchByLocation(location,3);
    }

    @Get('/tender/Completed/search-by-budget/:minBudget/:maxBudget')
    searchCmpTByBudget(
        @Param('minBudget') minBudget: number,
        @Param('maxBudget') maxBudget: number
    ): any {

        return this.tenderService.searchByBudget(minBudget, maxBudget,3);
    }

}
