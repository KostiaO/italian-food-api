import { Body, Controller, Post, Get, Put, Res, Param, HttpStatus, Delete } from '@nestjs/common';
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

    @Put('/:id')
    async updateDish(
        @Res() response, 
        @Param('id') dishId, 
        @Body() dish: FoodDto
    ) {
        await this.foodService.updateDish(dishId, dish);
        response.status(HttpStatus.CREATED).send();
    }

    @Delete('/:id')
    async deleteDish(
        @Res() response,
        @Param('id') dishId
    ) {
        await this.foodService.deleteDish(dishId);
        response.status(HttpStatus.ACCEPTED).send();
    }
}
