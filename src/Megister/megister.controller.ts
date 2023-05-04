import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
  Session,
  UploadedFile,
  UseGuards,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import {
  ParseBoolPipe,
  ParseIntPipe,
  ValidationPipe,
} from '@nestjs/common/pipes';
import { FileInterceptor } from '@nestjs/platform-express';
import { MegisterDto } from './Dtos/megister.dto';
import { MegisterService } from './Services/megister.servces';
import { SessionGuard } from './session.guard';
import { Request, Response } from 'express';
import * as moment from 'moment';
import * as fs from 'fs';
import { extname } from 'path';
import { BudgetReqService } from '../Agency/Services/BudgetReq.service';
import { TenderService } from 'src/tender-manager/Services/tender.service';
import { AgencyService } from 'src/Agency/Services/agency.service';
import { FeedBackDto } from './Dtos/FeedBack.dto';
import { FeedbackService } from './Services/FeedBack.service';

@Controller('megister')
export class MegisterController {
  constructor(
    private readonly fdService: FeedbackService,
    private readonly agencyService: AgencyService,
    private tenderService: TenderService,
    private readonly megisterService: MegisterService,
    private readonly BudgetReqService: BudgetReqService,
  ) {}

  @UseGuards(SessionGuard)
  @Get('/index')
  getAdmin(@Session() session): any {
    console.log(session.mgstid);
    return this.megisterService.getIndex();
  }

  @Get('/viewprofile/:id')
  getUserByID(@Param('id', ParseIntPipe) id: number): any {
    return this.megisterService.getProfile(id);
  }

  @Post('/signup')
  @UsePipes(new ValidationPipe())
  @UseInterceptors(FileInterceptor('file', { dest: 'tmp/' }))
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Body() tmdto: MegisterDto,
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
    return await this.megisterService.insert(tmdto);
  }

  @Post('/signin')
  async signin(
    @Session() session,
    @Body('Email') Email: string,
    @Body('password') password: string,
  ) {
    console.log(Email, password);
    var b = await this.megisterService.signin(Email, password);
    if (b) {
      session.Email = Email;
      return session.Email;
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
      res.setHeader('Set-Cookie', [
        'connect.sid=; Max-Age=-1; Path=/; HttpOnly',
      ]);
      res.status(200).json({ message: 'Logged out successfully' });
    });
  }

  @Put('/update')
  @UsePipes(new ValidationPipe())
  async update(@Body() megisterDto: MegisterDto) {
    return this.megisterService.update(megisterDto, megisterDto.id);
  }

  @Delete('/delete/:id')
  deleteMegisterById(@Param('id', ParseIntPipe) id: number): any {
    return this.megisterService.deleteById(id);
  }

  @Post('/sendemail')
  sendEmail(@Body() mydata) {
    return this.megisterService.sendEmail(mydata);
  }

  //Budget Request Update

  @Get('/BudgetReq/all')
  getAllTender(): any {
    return this.BudgetReqService.getAll();
  }

  @Get('/BudgetReq/view/:id')
  GetBudgetReqById(@Param('id', ParseIntPipe) id: number): any {
    return this.BudgetReqService.get(id);
  }

  @Get('/BudgetReq/Accept/:id')
  AcceptBudgetReq(@Param('id', ParseIntPipe) id: number): any {
    return this.BudgetReqService.ChangeStatus(id, 1);
  }

  @Get('/BudgetReq/Delete/:id')
  DeleteBudgetReq(@Param('id', ParseIntPipe) id: number): any {
    return this.BudgetReqService.ChangeStatus(id, 2);
  }

  @Get('/AuctionBids/:id')
  ShowBid(@Param('id', ParseIntPipe) id: number): any {
    return this.tenderService.FindTenderAuctionsByTenderId(id);
  }

  //Agency
  @Get('/Agency/search/:AgencyName')
  SearchAgencyByName(@Param('AgencyName') AgencyName: string): any {
    return this.agencyService.SearchAgencyByName(AgencyName);
  }

  @Get('/Agency/Block/:id')
  BlockAgency(@Param('id', ParseIntPipe) id: number): any {
    return this.agencyService.ChangeStatus(id, 2);
  }

  @Get('/Agency/Active/:id')
  ActiveAgency(@Param('id', ParseIntPipe) id: number): any {
    return this.agencyService.ChangeStatus(id, 1);
  }

  //Feedbacks
  @Get('/Completed /search-by-name/:name')
  searchCmpTByName(@Param('name') name: string): any {
    return this.tenderService.searchByName(name, 3);
  }

  @Get('/Completed /search-by-location/:location')
  earchCmpTByLocation(@Param('location') location: string): any {
    return this.tenderService.searchByLocation(location, 3);
  }

  //CRUD
  @Post('/Feedback/create')
  @UsePipes(new ValidationPipe())
  createTender(@Body() fdto: FeedBackDto): any {
    return this.fdService.insert(fdto);
  }

  @Put('/Feedback/update/:id')
  @UsePipes(new ValidationPipe())
  async updateTender(@Body() tdto: FeedBackDto, @Param('id') id: number) {
    return this.fdService.update(tdto, id);
  }

  @Delete('/Feedback/delete/:id')
  deleteTenderById(@Param('id', ParseIntPipe) id: number): any {
    return this.fdService.deleteById(id);
  }

  @Get('/Feedback/all')
  getAllFeedback(): any {
    return this.fdService.getAll();
  }

  @Get('/Feedback/:id')
  getFeedbackByID(@Param('id', ParseIntPipe) id: number): any {
    return this.fdService.get(id);
  }

  @Get('/getimage/:name')
  getImages(@Param('name') name, @Res() res) {
    // console.log(name);
    res.sendFile(name, { root: './Images' });
  }

  @Get('/viewprofilebyemail/:Email')
  getUserByemail(@Param('Email') Email: string): any {
    return this.megisterService.getProfilebyemail(Email);
  }
}
