import { Module } from '@nestjs/common';
import { AbilityTagController } from './ability_tag.controller';
import { AbiltiyTagService } from './ability_tag.service';

@Module({
  imports: [],
  providers: [AbiltiyTagService],
  controllers: [AbilityTagController],
  exports: [AbiltiyTagService],
})
export class AbilityTagModule {}
