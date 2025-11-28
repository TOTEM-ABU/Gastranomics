import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString, IsOptional } from 'class-validator';

import { RoleType } from '../../generated/prisma/enums';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  phone: string;

  @ApiProperty()
  @IsString()
  password: string;

  @ApiProperty({ enum: RoleType })
  @IsEnum(RoleType)
  role: RoleType;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  restaurantId?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  regionId?: string;
}
