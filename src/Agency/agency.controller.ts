import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
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

  @Get('/:id')
  getAgency(@Param("id" ) id:string):Agency  {
    return this.agencyService.getAgency(id) ;
  }
  @Get('/:agencyName')
  getAgencybyname(@Param("agencyName" ) AgencyName:string):Agency  {
    return this.agencyService.getAgencybyname(AgencyName) ;
  }


  @Post("add")
  @UsePipes(new ValidationPipe())
  addAgency(@Body() agency:AgencyDto):Agency{
    return this.agencyService.addAgency(agency);
  }
  @Delete("/:id")
  deleteAgency(@Param("id") id:string):Agency[]{
    return this.agencyService.deleteAgency(id);
  }

  @Put("/:id")
  updateAgencybyid(
      @Body("name") name: string,
      @Param("id") id:string
  ): any {
      return this.agencyService.updateAgencybyid(name,id);
  }



  

}

