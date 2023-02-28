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

    @Post("/createtender")
    @UsePipes(new ValidationPipe())
    createTender(@Body() tenderdto: TenderForm): any {
        return this.tenderService.insert(tenderdto);
    }

    @Put("/updatetender/:id")
    @UsePipes(new ValidationPipe())
    async updateTender(@Body() tdto: TenderForm, @Param('id') id: number) {
        return this.tenderService.update(tdto, id);
    }

    @Delete("/deletetender/:id")
    deleteTenderById(@Param("id", ParseIntPipe) id: number): any {
        return this.tenderService.deleteTenderById(id);
    }

    @Get("/viewalltender")
    getAllTender(): any {
        return this.tenderService.getAll();
    }


    @Get("/FindTenderByManagerId/:id")
    FindTenderByManagerId(@Param("id", ParseIntPipe) id: number): any {
        return this.tendermanagerService.FindTenderByManagerId(id);
    }


    //Searching Tender

    @Get('availabletenders/search-by-name/:name')
    searchByName(@Param('name') name: string): any {
        return this.tenderService.searchByName(name);
    }

    @Get('availabletenders/search-by-location/:location')
    searchByLocation(@Param('location') location: string): any {
        return this.tenderService.searchByLocation(location);
    }

    @Get('availabletenders/search-by-budget/:minBudget/:maxBudget')
    searchByBudget(
        @Param('minBudget') minBudget: number,
        @Param('maxBudget') maxBudget: number
    ): any {

        return this.tenderService.searchByBudget(minBudget, maxBudget);
    }

}
