import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Document, Types } from "mongoose";
import { Status } from "src/common/constants";
import { IsOptional } from 'class-validator';



@Schema({ timestamps: true })
export class Appointment extends Document {
  @ApiProperty()
  @Prop({
    type: Types.ObjectId,
    ref: 'Provider', // Ref provider
  })
  providerId: string;

  @ApiProperty()
  @Prop({
    type: Types.ObjectId,
    ref: 'Client', // Ref client
  })
  clientId: string;


  @ApiProperty()
  @Prop({
    type: Date,
  })
  date: Date;

  @ApiProperty()
  @Prop({
    type: Number,
  })
  fee: number;

  @ApiProperty()
  @Prop({
    type: String,
    enum: Status,
    default: Status.PENDING,
  })
  status: number;

  @ApiProperty()
  @Prop({
    type: String,
  })
  code: string;

  @ApiProperty()
  @Prop({
    type: String,
  })
  voucher: string;

  @IsOptional()
  @Prop({
    type: Date,
  })
  createdAt: Date;
}

export const AppointmentSchema = SchemaFactory.createForClass(Appointment);
