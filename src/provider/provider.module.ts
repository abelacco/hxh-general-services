import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProviderService } from './provider.service';
import { ProviderController } from './provider.controller';
import { Provider, ProviderSchema } from './entities/provider.entity';
import { MongoDbService } from './db/mongodb.service';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';

@Module({
  controllers: [ProviderController],
  providers: [ProviderService, MongoDbService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Provider.name,
        schema: ProviderSchema,
      },
    ]),
    CloudinaryModule,
  ],
  exports: [MongooseModule, ProviderService],
})
export class ProviderModule {}
