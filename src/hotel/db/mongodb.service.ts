import { Injectable, NotFoundException } from '@nestjs/common';
import { IHotelDao } from './hotelDao';
import { InjectModel } from '@nestjs/mongoose';
import { Model, mongo } from 'mongoose';
import { mongoExceptionHandler } from 'src/common/mongoExceptionHandler';
import { Hotel } from '../entities/hotel.entity';
import { CreateHotelDto ,FindHotelDto, UpdateHotelDto } from '../dto/index';

@Injectable()
export class MongoDbService implements IHotelDao {
  constructor(
    @InjectModel(Hotel.name) private readonly _hotelModel: Model<Hotel>,
  ) {}

  async create(createHotelDto: CreateHotelDto): Promise<Hotel> {
    try {
      const createHotel = new this._hotelModel(createHotelDto);
      await createHotel.save();
      return createHotel;
    } catch (error) {
      if (error instanceof mongo.MongoError) mongoExceptionHandler(error);
      else throw error;
    }
  }

  async findAll(props?: FindHotelDto): Promise<Array<Hotel>> {

    try {
      const results = await this._hotelModel.find(props);
      return results;
    } catch (error) {
      if (error instanceof mongo.MongoError) mongoExceptionHandler(error);
      else throw error;
    }
  }

  async findAllByPagination(findHotelDto: FindHotelDto): Promise<{data: Hotel[] ; total:number}> {
    try {
      // Construir el objeto de consulta
      const query = {};
      if (findHotelDto.phone) {
        query['phone'] = { $regex: findHotelDto.phone, $options: 'i' }; // Búsqueda insensible a mayúsculas/minúsculas
      }
      if (findHotelDto.name) {
        query['name'] = { $regex: findHotelDto.name, $options: 'i' }; // Búsqueda insensible a mayúsculas/minúsculas
      }
  
      // Aplicar paginación
      const limit = findHotelDto.limit || 10; // Valor por defecto si no se proporciona
      const offset = findHotelDto.offset || 0;
  
      // Realizar la consulta con filtros y paginación
      const data = await this._hotelModel.find(query).limit(limit).skip(offset);
  
      // Obtener el conteo total de documentos que coinciden con los criterios de búsqueda
      const total = await this._hotelModel.countDocuments(query);
  
      return {data, total};
    } catch (error) {
      if (error instanceof mongo.MongoError) mongoExceptionHandler(error);
      else throw error;
    }
  }
  
  

  async findByName(name: string): Promise<Hotel> {
    try {
      const findHotel: Hotel = await this._hotelModel.findOne({ name });
      if (!findHotel) throw new NotFoundException('hotel not found!');
      return findHotel;
    } catch (error) {
      if (error instanceof mongo.MongoError) mongoExceptionHandler(error);
      else throw error;
    }
  }

  async findById(id: string): Promise<Hotel> {
    try {
      const hotel = await this._hotelModel.findById(id);
      return hotel;
    } catch (error) {
      if (error instanceof mongo.MongoError) mongoExceptionHandler(error);
      else throw error;
    }
  }

  async update(id: string, updateHotelDto: UpdateHotelDto): Promise<Hotel> {
    try {
      const hotel = await this._hotelModel.findByIdAndUpdate(
        id,
        updateHotelDto,
      );
      return hotel;
    } catch (error) {
      if (error instanceof mongo.MongoError) mongoExceptionHandler(error);
      else throw error;
    }
  }

  async remove(id: string): Promise<Hotel> {
    try {
      const hotel = await this._hotelModel.findByIdAndDelete(id);
      return hotel;
    } catch (error) {
      if (error instanceof mongo.MongoError) mongoExceptionHandler(error);
      else throw error;
    }
  }
}
