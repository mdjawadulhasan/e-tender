import { Body, Controller, Delete, Get, Param, ParseBoolPipe, ParseIntPipe, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { AgencyEntity } from './agency.entity';
import { AgencyService } from './agency.service';
import { Agency } from './AgencyInterface/agency';
import { AgencyDto } from './dtos/agency.dto';


@Controller("Agency")
export class AgencyController {
  constructor(private readonly agencyService: AgencyService) {}

   @Post("add")
  @UsePipes(new ValidationPipe())
   insert(@Body() agency:AgencyDto):any{
    return this.agencyService.insert(agency);
  }
  
  @Get('/FindAgencyByid/:id')
  getAgencyById(@Param("id", ParseIntPipe ) id:number):any  {
    return this.agencyService.getAgencyById(id) ;
  }

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




 

  @Get('/searchById/:id')
  search(@Param("id") id:number):Agency  {
    return this.agencyService.search(id) ;
  }
  @Get('/searchByName/:agencyName')
  getAgencybyname(@Param("agencyName" ) AgencyName:string):Agency  {
    return this.agencyService.getAgencybyname(AgencyName) ;
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

