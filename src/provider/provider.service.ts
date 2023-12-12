import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProviderDto, FindProviderDto, UpdateProviderDto } from './dto/index';
import { Provider } from './entities/provider.entity';
import { MongoDbService } from './db/mongodb.service';
import { IProviderDao } from './db/providerDao';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { Pagination } from 'src/common/models/pagination';

@Injectable()
export class ProviderService {
  private readonly _db: IProviderDao;
  constructor(readonly _mongoDbService: MongoDbService,
    private readonly cloudinaryService: CloudinaryService,) {
    this._db = _mongoDbService;
  }


  async addOne(createProviderDto: CreateProviderDto , imageFile: Express.Multer.File): Promise<Provider> {
    try {
    // Subir la imagen a Cloudinary y obtener la URL
    const cloudinaryResponse = await this.cloudinaryService.uploadFile(imageFile);
    const imageUrl = cloudinaryResponse.url;
    console.log(imageUrl);
    // Construir el objeto CreateProvider con la URL de la imagen
    const finalProviderData = {
      ...createProviderDto,
      imageUrl: imageUrl
    };
    console.log("finalProviderData with imageUrl",finalProviderData);
    // Llamar al método de la base de datos para crear el doctor
    // return this.doctorDbService.addOne(finalHotelData);
      const createProvider = await this._db.create(finalProviderData);
      console.log("return from service CreateProvider",createProvider);
      return createProvider;
    } catch (error) {
      throw error;
    }
  }

  async getAll(props?: FindProviderDto): Promise<Array<Provider>> {
    try {
      const results = await this._db.findAll(props);
      if (!results) throw new NotFoundException('Could not find any provider');
      return results;
    } catch (error) {
      throw error;
    }
  }

  async getAllByPagination(props?: FindProviderDto): Promise<Pagination<Provider>> {
    try {
      const result = await this._db.findAllByPagination(props);
      if (result.total === 0) throw new NotFoundException('No existen providers con esa coincidencia');
      const responsePagination = new Pagination<Provider>(result.data, result.total, props.offset, props.limit);
      return responsePagination;
    } catch (error) {
      throw error;
    }
  }

  async getByName(name: string): Promise<Provider> {
    try {
      return this._db.findByName(name);
    } catch (error) {
      throw error;
    }
  }

  async getById(id: string): Promise<Provider> {
    try {
      const provider = await this._db.findById(id);
      if (!provider) throw new NotFoundException('Provider not found');
      return provider;
    } catch (error) {
      throw error;
    }
  }

  async update(id: string, updateProviderDto: UpdateProviderDto): Promise<string> {
    try {
      const provider = await this._db.update(id, updateProviderDto);
      if (!provider) throw new NotFoundException('Provider not found');
      return `Provider ${provider.id} updated successfully`;
    } catch (error) {
      throw error;
    }
  }

  async remove(id: string): Promise<string> {
    try {
      const provider = await this._db.remove(id);
      if (!provider) throw new NotFoundException('Provider not found');
      return `Provider ${provider.id} deleted successfully`;
    } catch (error) {
      throw error;
    }
  }
}
