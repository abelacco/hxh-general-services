// import { PartialType } from '@nestjs/mapped-types';
import { PartialType } from '@nestjs/swagger';
import { CreateHotelDto } from './create-hotel.dto';

export class UpdateHotelDto extends PartialType(CreateHotelDto) {}
