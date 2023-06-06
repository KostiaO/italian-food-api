import { Body, Controller, Post, Get } from '@nestjs/common';
import { FoodService } from './food.service';
import { FoodDto } from 'src/dto/food.dto';
import { Food } from 'src/schemas/food.schema';

@Controller('food')
export class FoodController {
    constructor(
        private readonly foodService: FoodService
    ) {}

    @Get()
    async allDish(): Promise<Food[]> {
        return this.foodService.allDishes();
    }
    

    @Post()
    async createDish(@Body() dish: FoodDto) {
        await this.foodService.createDish(dish);
    }
}
