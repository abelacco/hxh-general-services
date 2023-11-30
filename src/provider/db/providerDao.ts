import { CreateProviderDto, FindProviderDto, UpdateProviderDto } from '../dto/index';
import { Provider } from '../entities/provider.entity';

export interface IProviderDao {
  create(createDoctoDto: CreateProviderDto): Promise<Provider>;

  findAll(props?: FindProviderDto): Promise<Array<Provider>>;
    
  findAllByPagination(findHotelDto: FindProviderDto): Promise<{ data: Provider[]; total: number }>;

  findById(id: string): Promise<Provider>;

  findByName(name: string): Promise<Provider>;

  update(id: string, updateProviderDto: UpdateProviderDto): Promise<Provider>;

  remove(id: string): Promise<Provider>;
}
