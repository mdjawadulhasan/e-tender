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

@Controller("/Admin")
export class AdminController {
    constructor(private adminService: AdminService, private readonly megisterService: MegisterService) { }

    //Admin CRUD

    @UseGuards(SessionGuard)
    @Get("/index")

    getAdminIndex(@Session() session): any {
        console.log(session.adminemail);
        return this.adminService.getIndex();
    }

    @Get("/viewprofile/:id")
    getUserByID(@Param("id", ParseIntPipe) id: number): any {
        return this.adminService.getTadminProfile(id);
    }


    @Put("/update/:id")
    @UsePipes(new ValidationPipe())
    async update(@Body() admindto: AdminForm, @Param('id') id: number) {
        return this.adminService.update(admindto, id);
    }


    // @Patch(':id')
    // async updateAdminIsActive(
    //     @Query('id') id: number,
    //     @Query('isActive') isActive: boolean,
    // ): Promise<void> {
    //     return this.adminService.updateAdminIsActive(id, isActive);
    // }

    @Delete('/delete/:id')
    async deleteAdminById(@Param('id') id: number): Promise<void> {
        return this.adminService.deleteAdminById(id);
    }


    @Post("/signup")
    @UsePipes(new ValidationPipe())
    @UseInterceptors(FileInterceptor('file', { dest: 'tmp/' }))
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


    @Get('/signin')
    signin(@Session() session, @Body() mydto: AdminForm) {
        if (this.adminService.signin(mydto)) {

            session.adminemail = mydto.email;
            return { message: "Login Success !" };
        }
        else {
            return { message: "invalid credentials" };
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
    sendEmail(@Body() mydata){
    return this.adminService.sendEmail(mydata);
    }


    //-----------------------------------------


    //Megister Modify

    @Get("/Megister/getall")
    getAlluser() {
        return this.megisterService.getAlluser();
    }

    @Get("/Megister/get/:id")
    getuser(@Param("id", ParseIntPipe) id: number): any {
        return this.megisterService.getuser(id);
    }

    @Post("/Megister/add")
    @UsePipes(new ValidationPipe)
    AddUser(@Body() megister: MegisterDto): any {
        return this.megisterService.AddUser(megister);
    }

    @Delete("/Megister/deleteById/:id")
    DeleteUser(@Param('id', ParseIntPipe) id: number): any {
        return this.megisterService.DeleteUser(id);
    }






}
