import { IsString, IsUrl, IsNumber } from "class-validator"
import { ReviewDto } from "./review.dto"

export class FoodDto {
    @IsString()
    title: string
    @IsString()
    description: string
    @IsUrl()
    img: string
    @IsNumber()
    price: number
    reviews: ReviewDto[]
}