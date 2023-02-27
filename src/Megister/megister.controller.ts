import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes } from '@nestjs/common';
import { ParseBoolPipe, ParseIntPipe, ValidationPipe } from '@nestjs/common/pipes';
import { MegisterDto } from './Dtos/megister.dto';
import { MegisterService } from './Services/megister.servces';
//import { AppService } from './app.service';

@Controller("megister")
export class MegisterController {
  constructor(private readonly megisterService: MegisterService) {}

  @Get("getall")
  getAlluser(): string {
    return this.megisterService.getAlluser();
  }
  @Get("/:id")
  getuser(@Param("id",ParseIntPipe) id:number): any {
    return this.megisterService.getuser(id);
  }
  @Post("/add")
  @UsePipes(new ValidationPipe)
  AddUser(@Body() megister:MegisterDto): any {
    return this.megisterService.AddUser(megister);
  }
  @Put("/:name")
  Update(@Param() Param): string {
    return this.megisterService.Update(Param.name);
  }
  @Delete("/deleteById/:id")
  DeleteUser(@Param('id',ParseIntPipe) id:number): any {
    return this.megisterService.DeleteUser(id);
  }




  @Get("/search/:id")
  searchbyid(@Param() Param): string {
    return this.megisterService.searchbyid(Param.id);
  }
  @Get("/search/:name")
  searchbyname(@Param() Param): string {
    return this.megisterService.searchbyname(Param.name);
  }

  @Get("/progress/work")
  progresss(): string {
    return this.megisterService.progresss();
  }
  @Get("/area/megister")
  megisterArea(): string {
    return this.megisterService.megisterArea();
  }
  @Get("/position/megister")

  megisterPosition(): string {
    return this.megisterService.megisterPosition();
  }
  @Get("/asigntender/megister")

  Assigntender(): string {
    return this.megisterService.Assigntender();
  }
 @Get("/completetender/megister")
  completetender():string{
    return this.megisterService.completetender();
  }
  @Get("/completetenderbyid/megister")
  completetenderbyid():string{
    return this.megisterService.completetenderbyid();
  }
  @Get("/visit/:id")
  MegiterVisitOrNot(@Param("id",ParseBoolPipe)id:boolean):boolean{
    return this.megisterService.MegiterVisitOrNot(id)
  }
  
  
}
