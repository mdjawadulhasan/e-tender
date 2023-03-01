import { Body, Controller, Delete, Get, Param, ParseFloatPipe, ParseIntPipe, Post, Put, Query, Req, Request, Session, UnauthorizedException, UploadedFile, UseInterceptors, UsePipes, ValidationPipe } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { extname } from "path";
import { TendermanagerForm } from "./DTOs/tendermanager.dto";
import { TenderService } from "./Services/tender.service";
import { TendermanagerService } from "./Services/tendermanager.service";
import * as moment from 'moment';
import * as fs from 'fs';
import { TenderAuctinForm } from "./DTOs/TenderAuction.dto";
import { TenderAuctionService } from "./Services/tenderAuction.service";

@Controller("/TenderManager")
export class TendermanagerController {
    constructor(private tendermanagerService: TendermanagerService,
        private tenderService: TenderService, private tenderauctionService: TenderAuctionService) { }

    @Get("/index")
    getAdmin(): any {
        return this.tendermanagerService.getIndex();
    }
    @Get("/viewprofile/:id")
    getUserByID(@Param("id", ParseIntPipe) id: number): any {
        return this.tendermanagerService.getTmanagerProfile(id);
    }

    @Post("/signup")
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


    @Get('/signin')
    signin(@Session() session, @Body() mydto: TendermanagerForm) {
        if (this.tendermanagerService.signin(mydto)) {
            session.tmemail = mydto.email;
            return { message: "Login Success" };
        }
        else {
            return { message: "invalid credentials" };
        }

    }


    @Get('/signout')
    signout(@Session() session) {
        if (session.destroy()) {
            return { message: "Logged Out from the Account" };
        }
        else {
            throw new UnauthorizedException("Invalid actions");
        }
    }

    @Put("/update/:id")
    @UsePipes(new ValidationPipe())
    async update(@Body() tmdto: TendermanagerForm, @Param('id') id: number) {
        return this.tendermanagerService.update(tmdto, id);
    }


    @Get("/AuctionBids/:id")
    ShowBid(@Param("id", ParseIntPipe) id: number): any {
        return this.tenderService.FindTenderAuctionsByTenderId(id);
    }


    @Post("/createbid")
    @UsePipes(new ValidationPipe())
    createBid(@Body() TaucDTO: TenderAuctinForm): any {
        return this.tenderauctionService.insert(TaucDTO);
    }




}
