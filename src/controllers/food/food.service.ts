import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
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

    async updateDish(dishId: string, dish: FoodDto) {
        const editedDish = await this.foodModel.findByIdAndUpdate(dishId, dish, {
            new: true,
        });

        if (!editedDish) {
            throw new NotFoundException(`Dish #${dishId} not found`);
        }

        return editedDish;
    }

    async deleteDish(dishId: string) {
        const deleteDish = await this.foodModel.findByIdAndDelete(dishId);

        return deleteDish;
    }
}
