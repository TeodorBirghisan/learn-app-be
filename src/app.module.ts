import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CandidateModule } from './modules/candidate/candidate.module';
import { ConsulationModule } from './modules/consultation/consultation.module';
import { LocationModule } from './modules/location/location.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [CandidateModule, LocationModule, UserModule, ConsulationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
