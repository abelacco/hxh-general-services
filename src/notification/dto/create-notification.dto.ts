import { IsEnum, IsIn, IsString } from "class-validator";
import { Status } from "src/common/constants";

export class CreateNotificationDto {

    @IsString()
    @IsIn([Status.CONFIRMED, Status.CANCELED])
    status: string;

    @IsString()
    id: string;

}
