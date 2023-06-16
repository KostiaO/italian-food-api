import { IsString, IsUrl, IsNumber, IsUUID, IsNotEmpty } from "class-validator"
import { ReviewDto } from "./review.dto"

export class FoodDto {
    _id: string
    @IsString()
    @IsNotEmpty()
    title: string
    @IsString()
    @IsNotEmpty()
    description: string
    @IsUrl()
    img: string
    @IsNumber()
    @IsNotEmpty()
    price: number
    reviews: ReviewDto[]
}