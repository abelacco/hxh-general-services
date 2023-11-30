import { CreateClientDto  , UpdateClientDto} from "../dto";
import { Client } from "../entities/client.entity";

export interface IClientDao {
  create(createPatientDto: CreateClientDto): Promise<Client>;

  findAll(): Promise<Array<Client>>;

  findById(id: string): Promise<Client>;
  
  findByPhone(phone: string): Promise<Client>;

  update(id: string, updatePatientDto: UpdateClientDto): Promise<Client>;

  remove(id: string): Promise<Client>;
}