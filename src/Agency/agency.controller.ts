import { Body, Controller, Delete, Get, Param, ParseBoolPipe, ParseIntPipe, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { AgencyService } from './agency.service';
import { Agency } from './AgencyInterface/agency';
import { AgencyDto } from './dtos/agency.dto';


@Controller("Agency")
export class AgencyController {
  constructor(private readonly agencyService: AgencyService) {}

  @Get('ALL')
  getAllAgency(): Agency[]  {
    return this.agencyService.getAllAgency() ;
  }
  @Get('/history')
  record(): any  {
    return this.agencyService.record() ;
  }

  @Get('/projectcomplete')
  project(): any{
    return this.agencyService.project() ;
  }
  @Get('/upcomingproject')
  nextproject(): any{
    return this.agencyService.Nextproject() ;
  }


  @Get('/:id')
  getAgency(@Param("id", ParseIntPipe ) id:number):Agency  {
    return this.agencyService.getAgencyById(id) ;
  }


 

  @Get('/searchById/:id')
  search(@Param("id") id:number):Agency  {
    return this.agencyService.search(id) ;
  }
  @Get('/searchByName/:agencyName')
  getAgencybyname(@Param("agencyName" ) AgencyName:string):Agency  {
    return this.agencyService.getAgencybyname(AgencyName) ;
  }

//testinfg
  @Post("add")
  @UsePipes(new ValidationPipe())
  addAgency(@Body() agency:AgencyDto):Agency{
    return this.agencyService.addAgency(agency);
  }
  @Delete("/DeleteById/:id")
  deleteAgency(@Param("id") id:number):Agency[]{
    return this.agencyService.deleteAgency(id);
  }

  @Delete("/DeleteByName/:AgencyName")
  deleteAgencybyname(@Param("AgencyName") AgencyName:string):Agency[]{
    return this.agencyService.deleteAgencybyname(AgencyName);
  }


  @Put("/UpdateById/:id")
  updateAgencybyid(
      @Param("id") id: number,
      
  ): any {
      return this.agencyService.updateAgencybyid(id);
  }

  @Put("/UpdateByName/:name")
  updateAgencybyname(
      @Param("name") name: string,
      
  ): any {
      return this.agencyService.updateAgencybyname(name);
  }

  @Get("/viewagencyArea")
  viewagencyArea(@Query() location:string): string {
    return this.agencyService.viewagencyArea(location);
  } 
  @Get("/tandervalidOrnot/:valid")
  tanderValidornot(@Param("valid",ParseBoolPipe) valid:boolean):boolean{
    return this.agencyService.tanderValidornot(valid);
}

@Get("/proposal/:valid")
adminApproaveProposal(@Param("valid",ParseBoolPipe) valid:boolean):string{
    return this.agencyService.adminApproaveProposal(valid);
}






  

}

