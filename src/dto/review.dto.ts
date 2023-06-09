import { IsString } from "class-validator";
import { Validate } from 'class-validator';
import { CustomRateRange } from "src/helpers/validators/CustomRateRange";


export class ReviewDto {
    @IsString()
    id: string
    @IsString()
    username: string
    @IsString()
    description: string
    @IsString()
    updated: string
    @Validate(CustomRateRange)
    rate: number
}