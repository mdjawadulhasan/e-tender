import { Body, Controller, Delete, Get, Param, ParseFloatPipe, ParseIntPipe, Post, Put, Query, Req, Request, Res, Session, UnauthorizedException, UploadedFile, UseGuards, UseInterceptors, UsePipes, ValidationPipe } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { extname } from "path";
import { TendermanagerForm } from "./DTOs/tendermanager.dto";
import { TenderService } from "./Services/tender.service";
import { TendermanagerService } from "./Services/tendermanager.service";
import * as moment from 'moment';
import * as fs from 'fs';
import { SessionGuard } from "./session.guard";
import { OTPService } from "./Services/OTP.service";
import { Response } from 'express';

@Controller("/TenderManager")
export class TendermanagerController {
    constructor(private tendermanagerService: TendermanagerService,
        private tenderService: TenderService, private otpService: OTPService) { }

    @UseGuards(SessionGuard)
    @Get("/index")
    getAdmin(@Session() session): any {
        console.log(session.tmemail);
        return this.tendermanagerService.getIndex();
    }
    @Get("/viewprofile/:id")
    getUserByID(@Param("id", ParseIntPipe) id: number): any {
        return this.tendermanagerService.getTmanagerProfile(id);
    }

    @Get("/viewprofilebyemail/:email")
    getUserByemail(@Param("email") email: string): any {
        return this.tendermanagerService.getTmanagerProfilebyemail(email);
    }


    @Get('/getimage/:name')
    getImages(@Param('name') name, @Res() res) {
        res.sendFile(name, { root: './Images' })
    }

    @Put("/update")
    @UsePipes(new ValidationPipe())
    async update(@Body() tmdto: TendermanagerForm) {
        return this.tendermanagerService.update(tmdto, tmdto.id);
    }



    @Post("/signup")
    @UsePipes(new ValidationPipe())
    @UseInterceptors(FileInterceptor('myfile', { dest: 'tmp/' }))
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




    @Post('/signin')
     async signin(@Session() session, @Body('email') email: string, @Body('password') password: string) {
       

        var b=await this.tendermanagerService.signin(email, password);
        if (b) {
            session.email = email;
            console.log("session.email = " + session.email);
            this.otpService.create(email);
            return session.email;
        } else {        
            return 0;
        }
    }




    @Post('/validate')
    async ValidateOTP(@Session() session, @Body('otp') otp: number,@Body('semail') semail: string) {
       console.log(otp);
       
        const isOTPValid = await this.otpService.validate(semail, otp);
        if (isOTPValid) {
            console.log("created",semail);
            return (semail);
           
        } else {
            session.destroy();
            throw new UnauthorizedException({ message: "invalid credentials" });
        }
    }


    @Get('/signout')
    signout(@Session() session, @Res() res: Response) {
        session.destroy((err) => {
            if (err) {
                throw new Error('Failed to destroy session');
            }
            res.setHeader('Set-Cookie', ['connect.sid=; Max-Age=-1; Path=/; HttpOnly']);
            res.status(200).json({ message: 'Logged out successfully' });
        });
    }

   


    @Delete("/delete/:id")
    deleteTenderById(@Param("id", ParseIntPipe) id: number): any {
        return this.tendermanagerService.deleteById(id);
    }



    @Get("/AuctionBids/:id")
    ShowBid(@Param("id", ParseIntPipe) id: number): any {
        return this.tenderService.FindTenderAuctionsByTenderId(id);
    }







}
