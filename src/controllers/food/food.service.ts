import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FoodDto } from 'src/dto/food.dto';
import { Food } from 'src/schemas/food.schema';


@Injectable()
export class FoodService {
    constructor(
        @InjectModel(Food.name) private foodModel: Model<Food>
    ) 
    {}

    async createDish(dish: FoodDto): Promise<Food> {
        const createdDish = await this.foodModel.create(dish);

        return createdDish;
    }

    async allDishes(): Promise<Food[]> {
        const dishes = await this.foodModel.find();

        return dishes;
    }
}
