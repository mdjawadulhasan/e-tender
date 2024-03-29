import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TendermanagerModule } from './tender-manager/tendermanager.module';

@Module({
  imports: [TendermanagerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
