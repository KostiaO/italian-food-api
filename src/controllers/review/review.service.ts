import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { ReviewDto } from 'src/dto/review.dto';
import { Food } from 'src/schemas/food.schema';

@Injectable()
export class ReviewService {
    constructor(
        @InjectModel(Food.name) private foodModel: Model<Food>
    )
    {}

    async createReviewForDish(review: ReviewDto) {
        const createdReview = await this.foodModel.collection.updateOne(
            { _id: new mongoose.Types.ObjectId(review.id) },
            { $push: { reviews: { review } }},
        );
    
        return createdReview;
    }
}