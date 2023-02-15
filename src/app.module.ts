import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TendermanagerModule } from './tender-manager/tendermanager.module';

@Module({
  imports: [TendermanagerModule,AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
