import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { UpdateClientDto } from './dto/update-client.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model, mongo } from 'mongoose';
import { Client } from './entities/client.entity';
import { mongoExceptionHandler } from 'src/common/mongoExceptionHandler';
import { MongoDbService } from './db/mongodb.service';
import { IClientDao } from './db/clientDao';
import { CreateClientDto } from './dto/create-client.dto';
import {findCreateClientDto} from './dto/findCreate-client.dto'

@Injectable()
export class ClientService {
  private readonly _db: IClientDao
  constructor(
    readonly _mongoDbService: MongoDbService,
  ) {
    this._db = _mongoDbService
  }

  async addOne(createClientDto: CreateClientDto): Promise<Client> {
    try {
      const createClient = this._db.create(createClientDto);
      return createClient;
    } catch (error) {
      throw error;
    }
  }

  async getAll(): Promise<Array<Client>> {
    try {
      const results = await this._db.findAll();
      if (!results) throw new NotFoundException('Could not find any patients');
      return results;
    } catch (error) {
      throw error;
    }
  }

  async getById(id: string): Promise<Client> {
    try {
      const client = await this._db.findById(id);
      if (!client) throw new NotFoundException('Client not found');
      return client;
    } catch (error) {
      throw error;
    }
  }

  async getByPhone(phone: string): Promise<Client> {
    try {
      const client = await this._db.findByPhone(phone);
      if (!client) throw new NotFoundException('Patient not found');
      return client;
    } catch (error) {
      throw error;
    }
  }

  async update(
    id: string,
    updateClientDto: UpdateClientDto,
  ): Promise<string> {
    try {
      const client = await this._db.update(
        id,
        updateClientDto,
      );
      if (!client) throw new NotFoundException('Client not found');
      return `Client ${client.id} updated successfully`;
    } catch (error) {
      throw error;
    }
  }

  async updateByPhone(
    phone: string,
    updateClientDto: UpdateClientDto,
  ): Promise<string> {
    try {
      const client = await this.getByPhone(phone);
      console.log('Client', client)
      this.update(client.id, updateClientDto)
      // const patient = await this._db.update(
      //   phone,
      //   updatePatientDto,
      // );
      return `Client ${client.name} updated successfully`;
    } catch (error) {
      throw error;
    }
  }

  async remove(id: string): Promise<string> {
    try {
      const client = await this._db.remove(id);
      if (!client) throw new NotFoundException('Client not found');
      return `Client ${client.id} deleted successfully`;
    } catch (error) {
      throw error;
    }
  }

  async findOrCreatePatient(findCreateClientDto: findCreateClientDto): Promise<Client> {
    let phone = findCreateClientDto.phone
    let client:Client
    try {
      client = await this._db.findByPhone(phone);
      if(!client) {
        client = await this._db.create(findCreateClientDto);
      }
      Logger.log('patient', client)
      return client;
    } catch (error) {
      throw error;
    }
  }
}
