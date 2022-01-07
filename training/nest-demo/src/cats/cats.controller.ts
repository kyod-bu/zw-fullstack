import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Put,
  ParamData,
  Delete,
  Param,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { Observable, of } from 'rxjs';
import { CreateCatDto, UpdateCatDto, ListAllEntities } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

// @Controller({ host: 'admin.example.com' })
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    // return 'This action adds a new cat';
    this.catsService.create(createCatDto);
  }

  // @Post2()
  // create(@Res() res: Response) {
  //   return res.status(HttpStatus.CREATED).send();
  // }

  @Get()
  async findAll(): Promise<Cat[]> {
    // return `This action returns all cats (limit: ${query.limit} items)`;
    this.catsService.findAll();
  }

  // @Get()
  // findAll(@Query() query: ListAllEntities) {
  //   return `This action returns all cats (limit: ${query.limit} items)`;
  // }

  // @Get()
  // findAll2(@Res() res: Response) {
  //   return res.status(HttpStatus.OK).json([]);
  // }

  // @Get()
  // findAll3(@Res({ passthrough: true }) res: Response) {
  //   res.status(HttpStatus.OK);
  //   return [];
  // }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This actions updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
