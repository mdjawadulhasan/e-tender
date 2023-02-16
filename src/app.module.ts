import { Module } from '@nestjs/common';
import { AgencyModule } from './Agency/agency.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TendermanagerModule } from './tender-manager/tendermanager.module';

@Module({
  imports: [TendermanagerModule,AgencyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
