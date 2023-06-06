import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Food
import { FoodService } from './controllers/food/food.service';
import { FoodModule } from './controllers/food/food.module';

//Mongoose
import { MongooseModule } from '@nestjs/mongoose';
import { ReviewModule } from './controllers/review/review.module';

@Module({
  imports: 
  [
    MongooseModule.forRoot('mongodb://localhost:27017'), 
    FoodModule,
    ReviewModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
