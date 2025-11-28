import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { CategoryModule } from './category/category.module';
import { DebtModule } from './debt/debt.module';
import { OrderModule } from './order/order.module';
import { ProductModule } from './product/product.module';
import { RegionModule } from './region/region.module';
import { RestarauntModule } from './restaraunt/restaraunt.module';
import { UserModule } from './user/user.module';
import { WithdrawModule } from './withdraw/withdraw.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    PrismaModule,
    JwtModule.register({
      global: true,
      secret: 'accessSecret',
      signOptions: { expiresIn: '24h' },
    }),
    CategoryModule,
    DebtModule,
    OrderModule,
    ProductModule,
    RegionModule,
    RestarauntModule,
    UserModule,
    WithdrawModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
