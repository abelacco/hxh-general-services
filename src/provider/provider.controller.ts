import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ProviderService } from './provider.service';
import { CreateProviderDto, FindProviderDto, UpdateProviderDto } from './dto/index';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiResponse as ApiResponseModel } from 'src/common/models/api-response';
import { ApiResponseStatus } from 'src/common/constants';
import { Provider } from './entities/provider.entity';

@ApiTags('Provider')
@Controller('provider')
export class ProviderController {
  constructor(private readonly providerService: ProviderService) {}

  
  // @Post()
  // @ApiResponse({status: 201, description: 'Doctor was creat', type: Doctor})
  // @ApiResponse({status: 400, description: 'Bad request'})
  // create(@Body() createDoctorDto: CreateDoctorDto) {
  //   return this.hotelService.addOne(createDoctorDto);
  // }
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  @ApiResponse({status: 201, description: 'Provider was created', type: Provider})
  @ApiResponse({status: 400, description: 'Bad request'})
  create(@UploadedFile() file: Express.Multer.File, @Body() createProviderDto: CreateProviderDto) {
    return this.providerService.addOne(createProviderDto, file);
  }

  @Get()
  async findAll(@Query() props?: FindProviderDto) {
    return this.providerService.getAll(props);
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
  async findAllByPagination(@Query() props?: FindProviderDto) {
    try {
      const response = await this.providerService.getAllByPagination(props);
      
      // Retorna directamente el resultado en el constructor de ApiResponseModel
      return new ApiResponseModel(
        response, 
        'Operación exitosa', 
        ApiResponseStatus.SUCCESS
      );
    } catch (error) {
      // Maneja el error, devolviendo una respuesta de error
      return new ApiResponseModel(null, 'Error al obtener los providers', ApiResponseStatus.ERROR);
    }
  }

  @Get(':id')
  @ApiParam({
    name: 'id'
  })
  findOne(@Param('id') id: string) {
    return this.providerService.getById(id);
  }

  @Patch(':id')
  @ApiParam({
    name: 'id'
  })
  update(@Param('id') id: string, @Body() UpdateHotelDto: UpdateProviderDto) {
    return this.providerService.update(id, UpdateHotelDto);
  }

  @Delete(':id')
  @ApiParam({
    name: 'id'
  })
  remove(@Param('id') id: string) {
    return this.providerService.remove(id);
  }
}
