import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { PaginationDto } from 'src/common/dto';

export class FindHotelDto extends PaginationDto {

  @ApiProperty()
  @IsString()
  @IsOptional()
  phone: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  name: string;

  // @ApiProperty()
  // @IsString()
  // @IsOptional()
  // speciality: string;

}
