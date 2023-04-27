import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Query,
  Res,
  Session,
  UploadedFile,
  UseGuards,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AgencyEntity } from './entities/agency.entity';
import { AgencyService } from './Services/agency.service';
import { AgencyDto } from './DTOs/agency.dto';
import { SessionGuard } from './session.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import * as moment from 'moment';
import { extname } from 'path';
import * as fs from 'fs';
import { Request, Response } from 'express';
import { BudgeRequestDto } from './dtos/BudgetRequest.dto';
import { BudgetReqService } from './Services/BudgetReq.service';
import { TenderService } from 'src/tender-manager/Services/tender.service';
import { TenderAuctinForm } from 'src/tender-manager/DTOs/TenderAuction.dto';
import { TenderAuctionService } from 'src/tender-manager/Services/tenderAuction.service';

@Controller('Agency')
export class AgencyController {
  constructor(
    private tenderauctionService: TenderAuctionService,
    private readonly agencyService: AgencyService,
    private readonly BudgetReqService: BudgetReqService,
    private readonly tenderservice: TenderService,
  ) {}

  @UseGuards(SessionGuard)
  @Get('/index')
  getAdmin(@Session() session): any {
    console.log(session.agencyid);
    return this.agencyService.getIndex();
  }

  @Get('/viewprofile/:id')
  getUserByID(@Param('id', ParseIntPipe) id: number): any {
    return this.agencyService.getAgencyById(id);
  }

  @Post('/signup')
  @UsePipes(new ValidationPipe())
  @UseInterceptors(FileInterceptor('file', { dest: 'tmp/' }))
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Body() tmdto: AgencyDto,
  ) {
    if (file) {
      const filename = `${moment().format('YYYYMMDDHHmmss')}${extname(
        file.originalname,
      )}`;
      tmdto.ImgfileName = filename;
      const tmpFilePath = file.path; // temporary path of the uploaded file
      const destFilePath = `Images/${filename}`;
      await fs.promises.mkdir('Images', { recursive: true }); // create Images folder if it doesn't exist
      await fs.promises.rename(tmpFilePath, destFilePath); // move the file to the Images folder
    }

    return await this.agencyService.insert(tmdto);
  }

  // @Get('/signin')
  // async signin(@Session() session, @Body() mydto: AgencyDto) {

  // var id = await this.agencyService.signin(mydto);
  // if (id) {

  // session.agencyid = id;
  // return { message: "Login Success !" };
  // }
  // else {
  // return { message: "invalid credentials eee" };
  // }

  // }



  
  @Post('/signin')
  async signin(@Session() session, @Body('Email') email: string, @Body('password') password: string) {
    
console.log(email,password);
     var b=await this.agencyService.signin(email, password);
     if (b) {
         session.email = email;
         return session.email;
     } else {        
         return 0;
     }
 }

  // @Get('/signin')
  // async signin(
    // @Session() session,
    // @Body('Email') Email: string,
    // @Body('password') password: string,
  // ) {
    // var b = await this.agencyService.signin(Email, password);
    // if (b) {
      // session.email = Email;
      // return session.email;
    // } else {
      // return { message: 'invalid credentials eee' };
    // }
  // }

  @Get('/signout')
  signout(@Session() session, @Res() res: Response) {
    session.destroy((err) => {
      if (err) {
        throw new Error('Failed to destroy session');
      }
      res.setHeader('Set-Cookie', [
        'connect.sid=; Max-Age=-1; Path=/; HttpOnly',
      ]);
      res.status(200).json({ message: 'Logged out successfully' });
    });
  }

  @Put('/update/:id')
  @UsePipes(new ValidationPipe())
  async update(@Body() admindto: AgencyDto, @Param('id') id: number) {
    return this.agencyService.update(admindto, id);
  }

  // @Post('/sendemail')
  // sendEmail(@Body() mydata) {
  //   return this.agencyService.sendEmail(mydata);
  // }
  @Post('/sendemail')
  @UseInterceptors(FileInterceptor('file'))
  async sendEmail(@Body() mydata, @UploadedFile() file) {
    return await this.agencyService.sendEmail(mydata, file);
  }

  //--BudgetRequest

  @Post('/BudgetReq/create')
  @UsePipes(new ValidationPipe())
  createTender(@Body() tenderdto: BudgeRequestDto): any {
    return this.BudgetReqService.insert(tenderdto);
  }

  @Put('/BudgetReq/update/:id')
  @UsePipes(new ValidationPipe())
  async updateTender(@Body() tdto: BudgeRequestDto, @Param('id') id: number) {
    return this.BudgetReqService.update(tdto, id);
  }

  @Get('/viewprofilebyemail/:Email')
  getUserByemail(@Param('Email') Email: string): any {
    return this.agencyService.getTmanagerProfilebyemail(Email);
  }

  @Delete('/BudgetReq/delete/:id')
  deleteTenderById(@Param('id', ParseIntPipe) id: number): any {
    return this.BudgetReqService.deleteBudgetReqById(id);
  }

  @Get('/BudgetReq/all')
  getAllTender(): any {
    return this.BudgetReqService.getAll();
  }

  @Get('/BudgetReq/view/:id')
  GetBudgetReqById(@Param('id', ParseIntPipe) id: number): any {
    return this.BudgetReqService.get(id);
  }

  //FeedBacks & Prev Records

  @Get('/Feedbacks/:id')
  GetFeedbacksById(@Param('id', ParseIntPipe) id: number): any {
    return this.agencyService.FindFeedbacksByAgencyId(id);
  }

  @Get('/PrevProjects/:id')
  GetPrevProjectsById(@Param('id', ParseIntPipe) id: number): any {
    return this.agencyService.FindTendersByAgencyId(id);
  }

  @Get('/TotalProjectCompleted/:id')
  GetTotalProjectCompletedById(@Param('id', ParseIntPipe) id: number): any {
    return this.tenderservice.getTotalTenderscompletedByAgencyID(3, id);
  }

  //Auctions
  @Post('/Auction/createbid')
  @UsePipes(new ValidationPipe())
  createBid(@Body() TaucDTO: TenderAuctinForm): any {
    return this.tenderauctionService.insert(TaucDTO);
  }

  @Put('/Auction/updatebid:id')
  @UsePipes(new ValidationPipe())
  async updateBid(@Body() tdto: TenderAuctinForm, @Param('id') id: number) {
    return this.tenderauctionService.update(tdto, id);
  }

  @Delete('/Auction/deletebid/:id')
  deleteBid(@Param('id', ParseIntPipe) id: number): any {
    return this.tenderauctionService.deleteBidById(id);
  }

  @Get('/Auction/allbid/:id')
  getAllBids(@Param('id', ParseIntPipe) id: number): any {
    return this.tenderauctionService.getAll(id);
  }

  @Get('/Auction/viewBid/:id')
  getBidByID(@Param('id', ParseIntPipe) id: number): any {
    return this.tenderauctionService.get(id);
  }
}
