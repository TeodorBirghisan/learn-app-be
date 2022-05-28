import { AbilityTagModule } from './modules/ability_tag/ability_tag.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './modules/database/database.module';
import { AuthModule } from './modules/auth/auth.module';
import { CandidateModule } from './modules/candidate/candidate.module';
import { ConsulationModule } from './modules/consultation/consultation.module';
import { LocationModule } from './modules/location/location.module';
import { UserModule } from './modules/user/user.module';
import { ExaminationTypeModule } from './modules/examination_type/examinatino_type.module';

@Module({
  imports: [
    CandidateModule,
    LocationModule,
    UserModule,
    ConsulationModule,
    ExaminationTypeModule,
    AbilityTagModule,
    DatabaseModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
