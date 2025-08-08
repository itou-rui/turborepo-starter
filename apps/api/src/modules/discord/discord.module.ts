import { Module } from '@nestjs/common';
import { DiscordGuildsController } from './controllers';
import { DiscordService, DiscordGuildsService } from './services';

@Module({
  providers: [DiscordService, DiscordGuildsService],
  controllers: [DiscordGuildsController],
  exports: [DiscordService, DiscordGuildsService],
})
export class DiscordModule {}
