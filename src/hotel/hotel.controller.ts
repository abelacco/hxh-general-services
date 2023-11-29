import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseInterceptors, UploadedFile } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { CreateHotelDto , FindHotelDto, UpdateHotelDto } from './dto/index';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Hotel } from './entities/hotel.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiResponse as ApiResponseModel } from 'src/common/models/api-response';
import { ApiResponseStatus } from 'src/common/constants';

@ApiTags('Hotel')
@Controller('hotel')
export class HotelController {
  constructor(private readonly hotelService: HotelService) {}

  
  // @Post()
  // @ApiResponse({status: 201, description: 'Doctor was creat', type: Doctor})
  // @ApiResponse({status: 400, description: 'Bad request'})
  // create(@Body() createDoctorDto: CreateDoctorDto) {
  //   return this.hotelService.addOne(createDoctorDto);
  // }
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  @ApiResponse({status: 201, description: 'Hotel was created', type: Hotel})
  @ApiResponse({status: 400, description: 'Bad request'})
  create(@UploadedFile() file: Express.Multer.File, @Body() createHotelDto: CreateHotelDto) {
    return this.hotelService.addOne(createHotelDto, file);
  }

  @Get()
  async findAll(@Query() props?: FindHotelDto) {
    return this.hotelService.getAll(props);
    // try {
    //   const result = await this.hotelService.getAll(props);
      
    //   // Retorna directamente el resultado en el constructor de ApiResponseModel
    //   return new ApiResponseModel(
    //     result, 
    //     'Operación exitosa', 
    //     ApiResponseStatus.SUCCESS
    //   );
    // } catch (error) {
    //   // Maneja el error, devolviendo una respuesta de error
    //   return new ApiResponseModel(null, 'Error al obtener los doctores', ApiResponseStatus.ERROR);
    // }
  }

  @Get('paginate')
  async findAllByPagination(@Query() props?: FindHotelDto) {
    try {
      const response = await this.hotelService.getAllByPagination(props);
      
      // Retorna directamente el resultado en el constructor de ApiResponseModel
      return new ApiResponseModel(
        response, 
        'Operación exitosa', 
        ApiResponseStatus.SUCCESS
      );
    } catch (error) {
      // Maneja el error, devolviendo una respuesta de error
      return new ApiResponseModel(null, 'Error al obtener los hoteles', ApiResponseStatus.ERROR);
    }
  }

  @Get(':id')
  @ApiParam({
    name: 'id'
  })
  findOne(@Param('id') id: string) {
    return this.hotelService.getById(id);
  }

  @Patch(':id')
  @ApiParam({
    name: 'id'
  })
  update(@Param('id') id: string, @Body() UpdateHotelDto: UpdateHotelDto) {
    return this.hotelService.update(id, UpdateHotelDto);
  }

  @Delete(':id')
  @ApiParam({
    name: 'id'
  })
  remove(@Param('id') id: string) {
    return this.hotelService.remove(id);
  }
}
