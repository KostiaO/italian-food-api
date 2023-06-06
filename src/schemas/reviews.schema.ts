import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ReviewDocument = HydratedDocument<Review>;

@Schema()
export class Review {
    @Prop()
    username: string

    @Prop()
    description: string

    @Prop()
    updated: string

    @Prop()
    rate: number
}

export const ReviewSchema = SchemaFactory.createForClass(Review);
