import { Injectable, NotFoundException } from '@nestjs/common';
import { IProviderDao } from './providerDao';
import { InjectModel } from '@nestjs/mongoose';
import { Model, mongo } from 'mongoose';
import { mongoExceptionHandler } from 'src/common/mongoExceptionHandler';
import { Provider } from '../entities/provider.entity';
import { CreateProviderDto, FindProviderDto, UpdateProviderDto } from '../dto/index';

@Injectable()
export class MongoDbService implements IProviderDao {
  constructor(
    @InjectModel(Provider.name) private readonly _providerModel: Model<Provider>,
  ) {}

  async create(createProviderDto: CreateProviderDto): Promise<Provider> {
    try {
      const createProvider = new this._providerModel(createProviderDto);
      await createProvider.save();
      return createProvider;
    } catch (error) {
      if (error instanceof mongo.MongoError) mongoExceptionHandler(error);
      else throw error;
    }
  }

  async findAll(props?: FindProviderDto): Promise<Array<Provider>> {

    try {
      const results = await this._providerModel.find(props);
      return results;
    } catch (error) {
      if (error instanceof mongo.MongoError) mongoExceptionHandler(error);
      else throw error;
    }
  }

  async findAllByPagination(findProviderDto: FindProviderDto): Promise<{data: Provider[] ; total:number}> {
    try {
      // Construir el objeto de consulta
      const query = {};
      if (findProviderDto.phone) {
        query['phone'] = { $regex: findProviderDto.phone, $options: 'i' }; // Búsqueda insensible a mayúsculas/minúsculas
      }
      if (findProviderDto.name) {
        query['name'] = { $regex: findProviderDto.name, $options: 'i' }; // Búsqueda insensible a mayúsculas/minúsculas
      }
  
      // Aplicar paginación
      const limit = findProviderDto.limit || 10; // Valor por defecto si no se proporciona
      const offset = findProviderDto.offset || 0;
  
      // Realizar la consulta con filtros y paginación
      const data = await this._providerModel.find(query).limit(limit).skip(offset);
  
      // Obtener el conteo total de documentos que coinciden con los criterios de búsqueda
      const total = await this._providerModel.countDocuments(query);
  
      return {data, total};
    } catch (error) {
      if (error instanceof mongo.MongoError) mongoExceptionHandler(error);
      else throw error;
    }
  }
  
  

  async findByName(name: string): Promise<Provider> {
    try {
      const findProvider: Provider = await this._providerModel.findOne({ name });
      if (!findProvider) throw new NotFoundException('hotel not found!');
      return findProvider;
    } catch (error) {
      if (error instanceof mongo.MongoError) mongoExceptionHandler(error);
      else throw error;
    }
  }

  async findById(id: string): Promise<Provider> {
    try {
      const hotel = await this._providerModel.findById(id);
      return hotel;
    } catch (error) {
      if (error instanceof mongo.MongoError) mongoExceptionHandler(error);
      else throw error;
    }
  }

  async update(id: string, updateProviderDto: UpdateProviderDto): Promise<Provider> {
    try {
      const provider = await this._providerModel.findByIdAndUpdate(
        id,
        updateProviderDto,
      );
      return provider;
    } catch (error) {
      if (error instanceof mongo.MongoError) mongoExceptionHandler(error);
      else throw error;
    }
  }

  async remove(id: string): Promise<Provider> {
    try {
      const provider = await this._providerModel.findByIdAndDelete(id);
      return provider;
    } catch (error) {
      if (error instanceof mongo.MongoError) mongoExceptionHandler(error);
      else throw error;
    }
  }
}
