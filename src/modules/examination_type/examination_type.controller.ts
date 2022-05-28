import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ExaminationType } from './examination_type.entity';
import { ExaminationTypeService } from './examination_type.service';

@Controller('/examination-type')
export class ExaminationTypeController {
  constructor(private examinationTypeService: ExaminationTypeService) {}

  @Get('/sanity-check')
  sanityCheck() {
    return this.examinationTypeService.sanityCheck();
  }

  @Get()
  getAllExaminationType(): Promise<ExaminationType[]> {
    return this.examinationTypeService.getAllActive();
  }

  @Post()
  createExaminationType(@Body('name') name: string): Promise<ExaminationType> {
    return this.examinationTypeService.saveOne(name);
  }

  @Delete()
  deleteExaminationType(
    @Body(
      'examinationTypeId',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    examinationTypeId: number,
  ): Promise<number> {
    return this.examinationTypeService.updateIsDeleted(examinationTypeId);
  }
}
