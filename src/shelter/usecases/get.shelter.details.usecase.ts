import { IUseCase } from "src/domain/iusecase.interface";
import GetShelterDetailsUseCaseOutPut from "./dtos/get.shelter.details.usecase.output";

export default class GetShelterDetailsUseCase implements IUseCase<null, GetShelterDetailsUseCaseOutPut> {
    run(input: null): Promise<GetShelterDetailsUseCaseOutPut> {
        // throw new Error("Method not implemented.");
        return Promise.resolve(new GetShelterDetailsUseCaseOutPut({
            shelterName: 'teste',
            shelterWhatsApp: 'teste',
            shelterEmail: 'teste',
            shelterPhone: 'teste',
            createdAt: new Date(),
            updatedAt: new Date(),
        }))
    }
}

