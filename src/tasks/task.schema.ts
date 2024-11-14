import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Task extends Document {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop({ required: true, default: 'pending' })
  status: 'pending' | 'in-progress' | 'completed';
}

export const TaskSchema = SchemaFactory.createForClass(Task);
