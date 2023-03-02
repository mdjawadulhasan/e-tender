import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes } from '@nestjs/common';
import { ParseBoolPipe, ParseIntPipe, ValidationPipe } from '@nestjs/common/pipes';
import { MegisterDto } from './Dtos/megister.dto';
import { MegisterService } from './Services/megister.servces';
//import { AppService } from './app.service';

@Controller("megister")
export class MegisterController {
  constructor(private readonly megisterService: MegisterService) { }

  @Get("getall")
  getAlluser() {
    return this.megisterService.getAlluser();
  }
  @Get("/:id")
  getuser(@Param("id", ParseIntPipe) id: number): any {
    return this.megisterService.getuser(id);
  }
  @Post("/add")
  @UsePipes(new ValidationPipe)
  AddUser(@Body() megister: MegisterDto): any {
    return this.megisterService.AddUser(megister);
  }
  @Put("/:name")
  Update(@Param() Param): string {
    return this.megisterService.Update(Param.name);
  }
  @Delete("/deleteById/:id")
  DeleteUser(@Param('id', ParseIntPipe) id: number): any {
    return this.megisterService.DeleteUser(id);
  }







}
