import { ReviewDto } from "./review.dto"

export class FoodDto {
    title: string
    description: string
    img: string
    price: number
    reviews: ReviewDto[]
}