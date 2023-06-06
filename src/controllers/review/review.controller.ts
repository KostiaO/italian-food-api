import { Body, Controller, Post, Get } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ReviewDto } from 'src/dto/review.dto';
import { Review } from 'src/schemas/reviews.schema';

@Controller('review')
export class ReviewController {
    constructor (readonly reviewService: ReviewService) 
    {}

    @Post()
    async createReview(@Body() review: ReviewDto) {
        await this.reviewService.createReviewForDish(review);
    }
}