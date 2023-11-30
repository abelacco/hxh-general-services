import { Injectable } from "@nestjs/common";
import { UpdateClientDto } from "../dto/update-client.dto";
import { Client } from "../entities/client.entity";
import { InjectModel } from "@nestjs/mongoose";
import { Model, mongo } from "mongoose";
import { mongoExceptionHandler } from "src/common/mongoExceptionHandler";
import { CreateClientDto } from "../dto/create-client.dto";
import { IClientDao } from "./clientDao";

@Injectable()
export class MongoDbService implements IClientDao {
  constructor(
    @InjectModel(Client.name) private readonly _clientModel: Model<Client>,
  ) {}

  async create(createClientDto: CreateClientDto): Promise<Client> {
    try {
      const createClient = new this._clientModel(createClientDto);
      await createClient.save();
      return createClient;
    } catch (error) {
      console.log('error', error)
      if (error instanceof mongo.MongoError) mongoExceptionHandler(error);
      else throw error;
    }
  }

  async findAll(): Promise<Array<Client>> {
    try {
      const results = await this._clientModel.find();
      return results;
    } catch (error) {
      if (error instanceof mongo.MongoError) mongoExceptionHandler(error);
      else throw error;
    }
  }

  async findById(id: string): Promise<Client> {
    try {
      const client = await this._clientModel.findById(id);
      return client;
    } catch (error) {
      if (error instanceof mongo.MongoError) mongoExceptionHandler(error);
      else throw error;
    }
  }

  async findByPhone(phone: string): Promise<Client> {
    try {
      const client = await this._clientModel.findOne({ phone: phone });
      return client;
    } catch (error) {
      if (error instanceof mongo.MongoError) mongoExceptionHandler(error);
      else throw error;
    }
  }

  async update(
    id: string,
    updateClientDto: UpdateClientDto,
  ): Promise<Client> {
    try {
      const client = await this._clientModel.findByIdAndUpdate(
        id,
        updateClientDto,
      );
      return client;
    } catch (error) {
      if (error instanceof mongo.MongoError) mongoExceptionHandler(error);
      else throw error;
    }
  }

  async remove(id: string): Promise<Client> {
    try {
      const client = await this._clientModel.findByIdAndDelete(id);
      return client;
    } catch (error) {
      if (error instanceof mongo.MongoError) mongoExceptionHandler(error);
      else throw error;
    }
  }
}