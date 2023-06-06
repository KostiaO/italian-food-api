import { Module } from '@nestjs/common';
import { FoodController } from './food.controller';
import { FoodService } from './food.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Food, FoodSchema } from 'src/schemas/food.schema';
import { Review, ReviewSchema } from 'src/schemas/reviews.schema';

@Module({
    imports: [MongooseModule.forFeature(
            [
                { name: Food.name, schema: FoodSchema }
            ]
        )
    ],
    controllers: [FoodController],
    providers: [FoodService]
})
export class FoodModule {}
