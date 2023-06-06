import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { ReviewController } from "./review.controller";
import { ReviewService } from "./review.service";
import { Food, FoodSchema } from "src/schemas/food.schema";

@Module({
    imports: [MongooseModule.forFeature(
        [
            { name: Food.name, schema: FoodSchema }
        ]
    )],
    controllers: [ReviewController],
    providers: [ReviewService]
})

export class ReviewModule {};