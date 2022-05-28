import { Controller, Get } from '@nestjs/common';
import { AbiltiyTagService } from './ability_tag.service';

@Controller('/ability-tag')
export class AbilityTagController {
  constructor(private abilityTagService: AbiltiyTagService) {}

  @Get()
  getAll() {
    return this.abilityTagService.sanityCheck();
  }
}
