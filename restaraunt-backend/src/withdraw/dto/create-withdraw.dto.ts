import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString, IsUUID, Min } from 'class-validator';

import { WithdrawType } from '../../generated/prisma/enums';

export class CreateWithdrawDto {
  @ApiProperty({ enum: WithdrawType, example: 'OUTCOME or INCOME' })
  @IsEnum(WithdrawType)
  type: WithdrawType;

  @ApiProperty()
  @Min(0)
  amount: number;

  @ApiProperty()
  @IsUUID()
  restaurantId: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsUUID()
  orderId?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  description?: string;
}
