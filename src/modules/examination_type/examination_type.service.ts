import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExaminationType } from './examination_type.entity';

@Injectable()
export class ExaminationTypeService {
  constructor(
    @InjectRepository(ExaminationType)
    private examinationTypeRepository: Repository<ExaminationType>,
  ) {}
  async sanityCheck(): Promise<string> {
    return 'Hello Examination Type';
  }

  async findOneById(id: number): Promise<ExaminationType> {
    return this.examinationTypeRepository.findOne({
      where: { id },
    });
  }

  async getAllActive(): Promise<ExaminationType[]> {
    return this.examinationTypeRepository.find({
      where: {
        isDeleted: false,
      },
    });
  }

  async saveOne(name: string): Promise<ExaminationType> {
    if (!name) {
      throw new HttpException(
        'Examination type cannot be empty',
        HttpStatus.BAD_REQUEST,
      );
    }

    const newExaminationType: ExaminationType =
      this.examinationTypeRepository.create({
        name: name,
        isDeleted: false,
      });

    return this.examinationTypeRepository.save(newExaminationType);
  }

  async updateIsDeleted(examinationTypeId: number): Promise<number> {
    const examinationTypeToUpdate: ExaminationType = await this.findOneById(
      examinationTypeId,
    );

    if (!examinationTypeToUpdate) {
      throw new HttpException(
        'Examination type does not exist!',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (examinationTypeToUpdate.isDeleted === true) {
      throw new HttpException(
        'Examination type alerady deleted!',
        HttpStatus.BAD_REQUEST,
      );
    }

    examinationTypeToUpdate.isDeleted = true;

    const examinationTypeUpdated: ExaminationType =
      await this.examinationTypeRepository.save(examinationTypeToUpdate);

    return examinationTypeUpdated.id;
  }
}
