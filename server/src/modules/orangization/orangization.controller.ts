import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrangizationService } from './orangization.service';
import { CreateOrangizationDto } from './dto/create-orangization.dto';
import { UpdateOrangizationDto } from './dto/update-orangization.dto';

@Controller('orangization')
export class OrangizationController {
  constructor(private readonly orangizationService: OrangizationService) {}

  @Post()
  create(@Body() createOrangizationDto: CreateOrangizationDto) {
    return this.orangizationService.create(createOrangizationDto);
  }

  @Get()
  findAll() {
    return this.orangizationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orangizationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrangizationDto: UpdateOrangizationDto) {
    return this.orangizationService.update(+id, updateOrangizationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orangizationService.remove(+id);
  }
}
