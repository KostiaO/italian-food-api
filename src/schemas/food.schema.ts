import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Review } from './reviews.schema';

export type FoodDocument = HydratedDocument<Food>;

@Schema()
export class Food {
  @Prop()
  title: string;

  @Prop()
  description: string

  @Prop()
  img: string

  @Prop()
  price: number

  @Prop([{ type: { type: mongoose.Schema.Types.ObjectId, ref: 'Review' } }])
  reviews: Review[]
}

export const FoodSchema = SchemaFactory.createForClass(Food);
