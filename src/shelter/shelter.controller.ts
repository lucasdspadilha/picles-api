import { Body, Controller, Get, Inject, Patch, Post } from '@nestjs/common';
import GetShelterDetailsUseCaseOutPut from './usecases/dtos/get.shelter.details.usecase.output';
import { IUseCase } from 'src/domain/iusecase.interface';
import ShelterTokens from './shelter.tokens';
import UpdateShelterControllerInput from './dtos/update.shelter.controller.input';

@Controller('shelter')
export class ShelterController {
    @Inject(ShelterTokens.getShelterDetailsUseCase)
    private readonly getShelterDetailsUseCase: IUseCase<null, GetShelterDetailsUseCaseOutPut>

    @Get()
    async getShelterDetails(): Promise<GetShelterDetailsUseCaseOutPut> {
        return await this.getShelterDetailsUseCase.run(null)
    }

    @Patch()
    async updateShelterDetails(@Body() input: UpdateShelterControllerInput){
        console.log({input})
    }
}
