import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { AppointmentModule } from 'src/appointment/appointment.module';
import { StoreModule } from 'src/store/store.module';
import { AffiliateModule } from 'src/affiliate/affiliate.module';
import { ClientModule } from 'src/client/client.module';
import { ProviderModule } from 'src/provider/provider.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [
    ProviderModule,
    ClientModule,
    AppointmentModule,
    StoreModule,
    AffiliateModule,
  ],
})
export class SeedModule {}
