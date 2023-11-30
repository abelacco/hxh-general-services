import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { initialData } from './data';
import { Appointment } from 'src/appointment/entities/appointment.entity';
import { Store } from 'src/store/entities/store.entity';
import { Affiliate } from 'src/affiliate/entities/affiliate.entity';
import { Provider } from 'src/provider/entities/provider.entity';
import { Client } from 'src/client/entities/client.entity';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Provider.name)
    private providerModel: Model<Provider>,
    @InjectModel(Appointment.name)
    private _appointmentModel: Model<Appointment>,
    @InjectModel(Client.name)
    private clientModel: Model<Client>,
    @InjectModel(Store.name)
    private readonly storeModel: Model<Store>,
    @InjectModel(Affiliate.name)
    private readonly affiliateModel: Model<Affiliate>,
  ) {}

  async excuteSeed() {
    // await this._appointmentModel.deleteMany({});
    await this.providerModel.deleteMany();
    // await this.patientModel.deleteMany();
    // await this.affiliateModel.deleteMany();
    // await this.storeModel.deleteMany();
    const data = initialData;
    // Insertar doctores y pacientes y guardar los registros creados
    const createdProviders = await this.providerModel.insertMany(
      initialData.doctor,
    );
    // const createdPatients = await this.patientModel.insertMany(
    //   initialData.patient,
    // );

    // // Insertar stores y afiliados
    // const affiliates = await this.affiliateModel.insertMany(
    //   initialData.affiliate,
    // );

    // const storesModified = initialData.store.map((st) => ({
    //   ...st,
    //   affiliateId: this.getRandomItem(affiliates)._id,
    // }));

    // await this.storeModel.insertMany(storesModified);

    // // Crear citas con doctores y pacientes asignados de manera aleatoria
    // const appointments = initialData.appointment.map((app) => ({
    //   ...app,
    //   doctorId: this.getRandomItem(createdDoctors)._id,
    //   patientId: this.getRandomItem(createdPatients)._id,
    // }));

    // // Insertar las citas en la base de datos
    // await this._appointmentModel.insertMany(appointments);

    return 'Seed executed';
  }

  // Función para obtener un elemento al azar de un array
  private getRandomItem(arr: any[]): any {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
  }
}
