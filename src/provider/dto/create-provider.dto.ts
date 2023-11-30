import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsIn, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateProviderDto {

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  fee: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  imageUrl?: string;
}
