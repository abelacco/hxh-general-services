import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class findCreateClientDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  phone: string;

}
