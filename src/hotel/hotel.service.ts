import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateHotelDto , FindHotelDto , UpdateHotelDto } from './dto/index';
import { Hotel } from './entities/hotel.entity';
import { MongoDbService } from './db/mongodb.service';
import { IHotelDao } from './db/hotelDao';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { Pagination } from 'src/common/models/pagination';

@Injectable()
export class HotelService {
  private readonly _db: IHotelDao;
  constructor(readonly _mongoDbService: MongoDbService,
    private readonly cloudinaryService: CloudinaryService,) {
    this._db = _mongoDbService;
  }

  async addOne(createHotelDto: CreateHotelDto , imageFile: Express.Multer.File): Promise<Hotel> {
    try {
    // Subir la imagen a Cloudinary y obtener la URL
    const cloudinaryResponse = await this.cloudinaryService.uploadFile(imageFile);
    const imageUrl = cloudinaryResponse.url;
    console.log(imageUrl);
    // Construir el objeto CreateHotel con la URL de la imagen
    const finalHotelData = {
      ...createHotelDto,
      imageUrl: imageUrl
    };
    console.log("finalHotelData with imageUrl",finalHotelData);
    // Llamar al método de la base de datos para crear el doctor
    // return this.doctorDbService.addOne(finalHotelData);
      const createHotel = await this._db.create(finalHotelData);
      console.log("return from service CreateHotel",createHotel);
      return createHotel;
    } catch (error) {
      throw error;
    }
  }

  async getAll(props?: FindHotelDto): Promise<Array<Hotel>> {
    try {
      const results = await this._db.findAll(props);
      if (!results) throw new NotFoundException('Could not find any doctor');
      return results;
    } catch (error) {
      throw error;
    }
  }

  async getAllByPagination(props?: FindHotelDto): Promise<Pagination<Hotel>> {
    try {
      const result = await this._db.findAllByPagination(props);
      if (result.total === 0) throw new NotFoundException('No existen doctores con esa coincidencia');
      const responsePagination = new Pagination<Hotel>(result.data, result.total, props.offset, props.limit);
      return responsePagination;
    } catch (error) {
      throw error;
    }
  }

  async getByName(name: string): Promise<Hotel> {
    try {
      return this._db.findByName(name);
    } catch (error) {
      throw error;
    }
  }

  async getById(id: string): Promise<Hotel> {
    try {
      const hotel = await this._db.findById(id);
      if (!hotel) throw new NotFoundException('Doctor not found');
      return hotel;
    } catch (error) {
      throw error;
    }
  }

  async update(id: string, updatehotelDto: UpdateHotelDto): Promise<string> {
    try {
      const hotel = await this._db.update(id, updatehotelDto);
      if (!hotel) throw new NotFoundException('hotel not found');
      return `hotel ${hotel.id} updated successfully`;
    } catch (error) {
      throw error;
    }
  }

  async remove(id: string): Promise<string> {
    try {
      const hotel = await this._db.remove(id);
      if (!hotel) throw new NotFoundException('hotel not found');
      return `hotel ${hotel.id} deleted successfully`;
    } catch (error) {
      throw error;
    }
  }
}
