import { CreateHotelDto , UpdateHotelDto , FindHotelDto } from '../dto/index';
import { Hotel } from '../entities/hotel.entity';

export interface IHotelDao {
  create(createDoctoDto: CreateHotelDto): Promise<Hotel>;

  findAll(props?: FindHotelDto): Promise<Array<Hotel>>;
    
  findAllByPagination(findHotelDto: FindHotelDto): Promise<{ data: Hotel[]; total: number }>;

  findById(id: string): Promise<Hotel>;

  findByName(name: string): Promise<Hotel>;

  update(id: string, updateHotelDto: UpdateHotelDto): Promise<Hotel>;

  remove(id: string): Promise<Hotel>;
}
