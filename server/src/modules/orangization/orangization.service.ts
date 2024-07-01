import { Injectable } from '@nestjs/common';
import { CreateOrangizationDto } from './dto/create-orangization.dto';
import { UpdateOrangizationDto } from './dto/update-orangization.dto';

@Injectable()
export class OrangizationService {
  create(createOrangizationDto: CreateOrangizationDto) {
    return 'This action adds a new orangization';
  }

  findAll() {
    return `This action returns all orangization`;
  }

  findOne(id: number) {
    return `This action returns a #${id} orangization`;
  }

  update(id: number, updateOrangizationDto: UpdateOrangizationDto) {
    return `This action updates a #${id} orangization`;
  }

  remove(id: number) {
    return `This action removes a #${id} orangization`;
  }
}
