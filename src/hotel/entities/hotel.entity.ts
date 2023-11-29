import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

@Schema()
export class Hotel extends Document {
  @ApiProperty()
  @Prop({
    type: String,
  })
  name: string;

  @ApiProperty()
  @Prop({
    unique: true,
    type: String,
  })
  phone: string;

  // @ApiProperty()
  // @Prop({
  //   type: String,
  // })
  // speciality: string;

  @ApiProperty()
  @Prop({
    type: Number,
  })
  fee: number;

  @ApiProperty({ type: 'string'})
  @Prop({
    type: String,
  })
  imageUrl: string; // Tipo 'any' para manejar el archivo de imagen

  @ApiProperty()
  @Prop({
    type: String,
  })
  address: string;

  // @ApiProperty()
  // @Prop({
  //   type: [Number],
  // })
  // modality: number[];;

  // @ApiProperty()
  // @Prop({
  //   type: String,
  //   ref: 'Hunter',
  // })
  // hunter: string; ;
}

export const HotelSchema = SchemaFactory.createForClass(Hotel);
