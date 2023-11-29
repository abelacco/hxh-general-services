import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HotelService } from './hotel.service';
import { HotelController } from './hotel.controller';
import { Hotel, HotelSchema } from './entities/hotel.entity';
import { MongoDbService } from './db/mongodb.service';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';

@Module({
  controllers: [HotelController],
  providers: [HotelService, MongoDbService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Hotel.name,
        schema: HotelSchema,
      },
    ]),
    CloudinaryModule,
  ],
  exports: [MongooseModule, HotelService],
})
export class DoctorModule {}
