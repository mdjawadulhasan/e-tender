import { Body, Controller, Delete, Get, Param, ParseBoolPipe, ParseIntPipe, Patch, Post, Put, Query, Res, Session, UnauthorizedException, UploadedFile, UseGuards, UseInterceptors, UsePipes, ValidationPipe } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import * as moment from 'moment';
import { extname } from "path";
import { MegisterDto } from "src/Megister/Dtos/megister.dto";
import { MegisterService } from "src/Megister/Services/megister.servces";
import { AdminForm } from "./DTOs/admindto";
import { AdminService } from "./services/admin.service";
import * as fs from 'fs';
import { SessionGuard } from "./session.guard";
import { Request, Response } from 'express';
import { TenderForm } from "src/tender-manager/DTOs/tender.dto";
import { TenderService } from "src/tender-manager/Services/tender.service";
import { AgencyService } from "src/Agency/Services/agency.service";
import { TendermanagerService } from "src/tender-manager/Services/tendermanager.service";

@Controller("/Admin")
export class AdminController {
    constructor(private tendermanagerService: TendermanagerService, private adminService: AdminService, private readonly agencyService: AgencyService, private tenderService: TenderService, private readonly megisterService: MegisterService) { }

    //Admin CRUD

    @UseGuards(SessionGuard)
    @Get("/index")

    getAdminIndex(): any {
        return this.adminService.getIndex();
    }

    @Get("/viewprofile/:id")
    getUserByID(@Param("id", ParseIntPipe) id: number): any {
        return this.adminService.getTadminProfile(id);
    }

    @Get("/viewprofilebyemail/:email")
    getUserByemail(@Param("email") email: string): any {
        return this.adminService.getTadminProfilebyemail(email);
    }

    @Get('/getimage/:name')
    getImages(@Param('name') name, @Res() res) {
        res.sendFile(name, { root: './Images' })
    }

    @Put("/update")
    @UsePipes(new ValidationPipe())
    async update(@Body() admindto: AdminForm) {
        return this.adminService.update(admindto, admindto.id);
    }



    @Delete("/delete/:id")
    deleteAdminById(@Param("id", ParseIntPipe) id: number): any {
        return this.tendermanagerService.deleteById(id);
    }


    @Post("/signup")
    @UsePipes(new ValidationPipe())
    @UseInterceptors(FileInterceptor('myfile', { dest: 'tmp/' }))
    async create(@UploadedFile() file: Express.Multer.File, @Body() tmdto: AdminForm) {


        if (file) {
            const filename = `${moment().format('YYYYMMDDHHmmss')}${extname(file.originalname)}`;
            tmdto.ImgfileName = filename;
            const tmpFilePath = file.path; // temporary path of the uploaded file
            const destFilePath = `Images/${filename}`;
            await fs.promises.mkdir('Images', { recursive: true }); // create Images folder if it doesn't exist
            await fs.promises.rename(tmpFilePath, destFilePath); // move the file to the Images folder
        }

        return await this.adminService.insert(tmdto);
    }


    @Post('/signin')
    async signin(@Session() session, @Body('email') email: string, @Body('password') password: string) {
      

       var b=await this.adminService.signin(email, password);
       if (b) {
           session.email = email;
           return session.email;
       } else {        
           return 0;
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

    @Post('/sendemail')
    sendEmail(@Body() mydata) {
        return this.adminService.sendEmail(mydata);
    }


    //-----------------------------------------
    //Megister Modify

    @Post("/Megister/create")
    @UsePipes(new ValidationPipe())
    @UseInterceptors(FileInterceptor('file', { dest: 'tmp/' }))
    async createMegister(@UploadedFile() file: Express.Multer.File, @Body() tmdto: MegisterDto) {


        if (file) {
            const filename = `${moment().format('YYYYMMDDHHmmss')}${extname(file.originalname)}`;
            tmdto.ImgfileName = filename;
            const tmpFilePath = file.path; // temporary path of the uploaded file
            const destFilePath = `Images/${filename}`;
            await fs.promises.mkdir('Images', { recursive: true }); // create Images folder if it doesn't exist
            await fs.promises.rename(tmpFilePath, destFilePath); // move the file to the Images folder
        }
        return await this.megisterService.insert(tmdto);
    }

    @Get("/Megister/getall")
    getAlluser(@Session() session) {
        return this.megisterService.get();
    }

    @Get("/Megister/all")
    getAllMegister(@Session() session) {
        return this.megisterService.get();
    }

    @Get("/Megister/get/:id")
    getuser(@Param("id", ParseIntPipe) id: number): any {
        return this.megisterService.getProfile(id);
    }


    @Delete("/Megister/deleteById/:id")
    DeleteUser(@Param('id', ParseIntPipe) id: number): any {
        return this.megisterService.deletemegisterById(id);
    }

    @Put("/Megister/update/:id")
    @UsePipes(new ValidationPipe())
    async Megisterupdate(@Body() megister: MegisterDto, @Param('id') id: number) {
        return this.megisterService.update(megister, id);
    }

    


    //-Tender

    @Post("/Tender/create")
    @UsePipes(new ValidationPipe())
    createTender(@Body() tenderdto: TenderForm): any {
        return this.tenderService.insert(tenderdto);
    }

    @Put("/Tender/update:id")
    @UsePipes(new ValidationPipe())
    async updateTender(@Body() tdto: TenderForm, @Param('id') id: number) {
        return this.tenderService.update(tdto, id);
    }

    @Delete("/Tender/delete/:id")
    deleteTenderById(@Param("id", ParseIntPipe) id: number): any {
        return this.tenderService.deleteTenderById(id);
    }

    @Get("/Tender/all")
    getAllTender(): any {
        return this.tenderService.getAll();
    }

    @Get("/Tender/viewTender/:id")
    getTenderByID(@Param("id", ParseIntPipe) id: number): any {
        return this.tenderService.get(id);
    }


    //--Agency

    @Get('/Agency/all')
    getallAgency(): any {
        return this.agencyService.get();
    }

    @Get('/Agency/FindAgencyByid/:id')
    getAgencyById(@Param("id", ParseIntPipe) id: number): any {
        return this.agencyService.getAgencyById(id);
    }

    @Get('/Agency/search/:AgencyName')
    SearchAgencyByName(@Param("AgencyName") AgencyName: string): any {
        return this.agencyService.SearchAgencyByName(AgencyName);
    }


    @Delete("/Agency/DeleteById/:id")
    deleteAgencyByid(@Param('id', ParseIntPipe) id: number): any {
        return this.agencyService.deleteAgencyByid(id);

    }

    //--Tender Manager

    @Get("/TenderManager/viewprofile/:id")
    getTenderManagerUserByID(@Param("id", ParseIntPipe) id: number): any {
        return this.tendermanagerService.getTmanagerProfile(id);
    }

    @Delete("/TenderManager/delete/:id")
    deleteTenderManagerById(@Param("id", ParseIntPipe) id: number): any {
        return this.tendermanagerService.deleteById(id);
    }

    @Get("/TenderManagers")
    GetAllTenderManager(): any {
        return this.tendermanagerService.getall();
    }

    //Tender Reports
    @Get("Tender/Reports/Auction")
    getonAcutionTenderReports(): any {
        return this.tenderService.getTotalTendersByStatus(0);
    }


    @Get("Tender/Reports/Ongoing")
    getonGoingTenderReports(): any {
        return this.tenderService.getTotalTendersByStatus(1);
    }

   
    @Get("Tender/Reports/Completed")
    getCompletedTenderReports(): any {
        return this.tenderService.getTotalTendersByStatus(3);
    }


  
    @Get("Tendermanager/totalcount")
    getTendermanagerCount(): any {
        return this.tendermanagerService.TendermanagerCount();
    }

    
    @Get("Agency/totalcount")
    getAgencyCount(): any {
        return this.agencyService.getAgencyCount();
    }

    @Get("Magister/totalcount")
    getMagisterCount(): any {
        return this.megisterService.getMagisterCount();
    }
    


}
