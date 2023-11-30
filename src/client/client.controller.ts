import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Logger } from '@nestjs/common';
import { ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateClientDto } from './dto/create-client.dto';
import { Client } from './entities/client.entity';
import { UpdateClientDto, findCreateClientDto } from './dto';
import { ClientService } from './client.service';

@ApiTags('Client')
@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  @ApiResponse({status: 201, description: 'Client was creat', type: Client})
  @ApiResponse({status: 400, description: 'Bad request'})
  create(@Body() createClientDto: CreateClientDto) {
    return this.clientService.addOne(createClientDto);
  }

  @Get()
  findAll() {
    return this.clientService.getAll();
  }



  @Get('findorcreate')
  findOrCreate(@Query() findCreatePatientDto: findCreateClientDto) {
    Logger.log('findOrCreate controller')
    return this.clientService.findOrCreatePatient(findCreatePatientDto);
  }

  @Get(':id')
  @ApiParam({
    name: 'id'
  })
  findOne(@Param('id') id: string) {
    return this.clientService.getById(id);
  }

  @Patch(':id')
  @ApiParam({
    name: 'id'
  })
  update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
    return this.clientService.update(id, updateClientDto);
  }

  @Patch('')
  @ApiQuery({
    name: 'phone',
    required: true,
    type: String,
    description: 'Número de teléfono del paciente'
  })
  updateByPhone(@Query('phone') phone: string, @Body() updateClientDto: UpdateClientDto) {
    return this.clientService.updateByPhone(phone, updateClientDto);
  }

  

  @Delete(':id')
  @ApiParam({
    name: 'id'
  })
  remove(@Param('id') id: string) {
    return this.clientService.remove(id);
  }


}
