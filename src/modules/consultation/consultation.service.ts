import { CreateConsultationDto } from './consultaton.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Consultation } from './consultation.entity';
import { Repository } from 'typeorm';
import { Candidate } from '../candidate/candidate.entity';
import { User } from '../user/user.entity';
import { CandidateService } from '../candidate/candidate.service';
import { UserService } from '../user/user.service';
import { ExaminationType } from '../examination_type/examination_type.entity';
import { ExaminationTypeService } from '../examination_type/examination_type.service';

@Injectable()
export class ConsultationService {
  constructor(
    @InjectRepository(Consultation)
    private consultationRepository: Repository<Consultation>,
    private userService: UserService,
    private candidateService: CandidateService,
    private examinationTypeService: ExaminationTypeService,
  ) {}

  async sanityCheck(): Promise<string> {
    return 'Hello Consultation';
  }

  async findOneById(id: number): Promise<Consultation> {
    return await this.consultationRepository.findOne({
      where: {
        id,
      },
    });
  }

  async getAllActive(): Promise<Consultation[]> {
    return this.consultationRepository.find({
      where: {
        isDeleted: false,
      },
      relations: ['organizer', 'consultedCandidate', 'examinationType'],
    });
  }

  async updateIsDeleted(consultationId: number): Promise<number> {
    const consultationToUpdate: Consultation = await this.findOneById(
      consultationId,
    );

    if (!consultationId) {
      throw new HttpException(
        'Consultation does not exist!',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (consultationToUpdate.isDeleted === true) {
      throw new HttpException(
        'Consultation already deleted!',
        HttpStatus.BAD_REQUEST,
      );
    }

    consultationToUpdate.isDeleted = true;

    const consultationUpdated: Consultation =
      await this.consultationRepository.save(consultationToUpdate);

    return consultationUpdated.id;
  }

  async saveOne(
    consultationCreateDto: CreateConsultationDto,
    candidateId: number,
    organizerId: number,
    examinationTypeId: number,
  ): Promise<Consultation> {
    if (!consultationCreateDto || !candidateId || !organizerId) {
      throw new HttpException(
        'Cannot create consultation',
        HttpStatus.BAD_REQUEST,
      );
    }

    const organizer: User = await this.userService.findOneById(organizerId);

    if (!organizer) {
      throw new HttpException(
        'Organizer does not exist',
        HttpStatus.BAD_REQUEST,
      );
    }

    const candidate: Candidate = await this.candidateService.findOneById(
      candidateId,
    );

    if (!candidate) {
      throw new HttpException(
        'Candidate does not exist',
        HttpStatus.BAD_REQUEST,
      );
    }

    const examinationType: ExaminationType =
      await this.examinationTypeService.findOneById(examinationTypeId);

    if (!examinationType) {
      throw new HttpException(
        'Examination does not exist',
        HttpStatus.BAD_REQUEST,
      );
    }

    const newConsultation: Consultation = this.consultationRepository.create({
      duration: consultationCreateDto.duration,
      startDate: consultationCreateDto.startDate,
      isDeleted: false,
      organizer: organizer,
      consultedCandidate: candidate,
      examinationType: examinationType,
    });

    return await this.consultationRepository.save(newConsultation);
  }
}
