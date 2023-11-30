import { Module, forwardRef } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Payment, PaymentSchema } from './entities/payment.entity';
import { AppointmentModule } from 'src/appointment/appointment.module';
import { MongoDbService } from './db/mongodb.service';
import { ProviderModule } from 'src/provider/provider.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Payment.name, schema: PaymentSchema }]),
    ProviderModule,
    forwardRef(() => AppointmentModule),
  ],
  controllers: [PaymentController],
  providers: [PaymentService, MongoDbService],
  exports: [PaymentService, MongooseModule],
})
export class PaymentModule {}
