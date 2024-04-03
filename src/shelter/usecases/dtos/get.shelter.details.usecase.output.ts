export default class GetShelterDetailsUseCaseOutPut {
    shelterName: string
    shelterWhatsApp: string
    shelterEmail: string
    shelterPhone: string
    createdAt: Date
    updatedAt: Date

    constructor(data: Partial<GetShelterDetailsUseCaseOutPut>){
        Object.assign(this, data)
    }
}