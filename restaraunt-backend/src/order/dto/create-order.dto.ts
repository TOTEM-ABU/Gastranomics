import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, ValidateNested } from 'class-validator';

import { OrderItemDto } from './order-item.dto';

export class CreateOrderDto {
  @ApiProperty()
  @IsString()
  table: string;

  @ApiProperty()
  @IsString()
  restaurantId: string;

  @ApiProperty({ type: [OrderItemDto] })
  @ValidateNested({ each: true })
  @Type(() => OrderItemDto)
  orderItems: OrderItemDto[];
}
