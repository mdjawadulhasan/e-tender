import { Body, Controller, Delete, Get, Param, ParseBoolPipe, ParseIntPipe, Patch, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { AgencyEntity } from './entities/agency.entity';
import { AgencyService } from './Services/agency.service';
import { AgencyDto } from './DTOs/agency.dto';


@Controller("Agency")
export class AgencyController {
  constructor(private readonly agencyService: AgencyService) { }

  @Post("create")
  @UsePipes(new ValidationPipe())
  insert(@Body() agency: AgencyDto): any {
    return this.agencyService.insert(agency);
  }

  @Get('/FindAgencyByid/:id')
  getAgencyById(@Param("id", ParseIntPipe) id: number): any {
    return this.agencyService.getAgencyById(id);
  }
  

  @Get('/FindAgency')
  getAgencyByIDName(@Query() qry: any): any {
    return this.agencyService.getAgencyByIDName(qry);
  }

  @Get('ShowAllAgency')
  getAllAgency(): any {
    return this.agencyService.getAllAgency();
  }

  //search part 
  @Get('/search/:id')
  SearchAgencyById(@Param("id") id: number): any {
    return this.agencyService.SearchAgencyById(id);
  }

  @Get('/search/:AgencyName')
  SearchAgencyByName(@Param("AgencyName") AgencyName: string): any {
    return this.agencyService.SearchAgencyByName(AgencyName);
  }





  @Delete("/DeleteById/:id")
  deleteAgencyByid(@Param('id', ParseIntPipe) id: number): any {
    return this.agencyService.deleteAgencyByid(id);

  }
  @Delete("/DeleteByName/:AgencyName")
  deleteAgencybyname(@Param() AgencyName: string): any {
    return this.agencyService.deleteAgencybyname(AgencyName);
  }







  @Get('/history')
  record(): any {
    return this.agencyService.record();
  }

  @Get('/projectcomplete')
  project(): any {
    return this.agencyService.project();
  }
  @Get('/upcomingproject')
  nextproject(): any {
    return this.agencyService.Nextproject();
  }







  @Put("/UpdateBy")
  @UsePipes(new ValidationPipe())
  updateAgencybyid(
    @Body() AgencyDto: AgencyEntity,
    @Param('id', ParseIntPipe) id: number

  ): any {
    return this.agencyService.updateAgencybyid(AgencyDto, id)
  }







  @Get("/viewagencyArea")
  viewagencyArea(@Query() location: string): string {
    return this.agencyService.viewagencyArea(location);
  }
  @Get("/tandervalidOrnot/:valid")
  tanderValidornot(@Param("valid", ParseBoolPipe) valid: boolean): boolean {
    return this.agencyService.tanderValidornot(valid);
  }

  @Get("/proposal/:valid")
  adminApproaveProposal(@Param("valid", ParseBoolPipe) valid: boolean): string {
    return this.agencyService.adminApproaveProposal(valid);
  }

}

