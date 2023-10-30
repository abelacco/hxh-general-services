import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { CreateNotificationDto } from './dto';

@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post()
  confirmPayment(@Body() createNotificationDto: CreateNotificationDto) {
    return this.notificationService.confirmPayment(createNotificationDto);
  }

 
}