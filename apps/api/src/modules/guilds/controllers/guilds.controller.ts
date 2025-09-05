import { Body, Controller, Get, Param, Post, UseFilters, UseInterceptors } from '@nestjs/common';
import { type APIGuild } from '@workspace/types/api';
import { GuildNotFoundException } from '../../../exceptions';
import { HttpExceptionFilter } from '../../../filters';
import { HttpResponseInterceptor } from '../../../interceptors';
import { CreateGuildDto } from '../dtos';
import { GuildsService } from '../services';

@UseFilters(HttpExceptionFilter)
@UseInterceptors(HttpResponseInterceptor)
@Controller('guilds')
export class GuildsController {
  constructor(private readonly guildsService: GuildsService) {}

  @Get()
  async findAll(): Promise<APIGuild[]> {
    const guilds = await this.guildsService.findAll();
    return guilds.map((guild) => this.guildsService.toAPIGuild(guild));
  }

  @Get(':guildId')
  async findOne(@Param('guildId') uid: string): Promise<APIGuild> {
    const guild = await this.guildsService.findOne({ uid });
    if (!guild) throw new GuildNotFoundException(uid);
    return this.guildsService.toAPIGuild(guild);
  }

  @Post()
  async create(@Body() data: CreateGuildDto): Promise<APIGuild> {
    const guild = await this.guildsService.create([data]);
    return this.guildsService.toAPIGuild(guild[0]);
  }
}
