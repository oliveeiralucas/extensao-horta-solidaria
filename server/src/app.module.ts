import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { DonationModule } from './donation/donation.module';
import { ItemsModule } from './items/items.module';
import { CentersModule } from './centers/centers.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, PrismaModule, DonationModule, ItemsModule, CentersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
