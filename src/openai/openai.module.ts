import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import OpenAI from 'openai';
import { OpenaiController } from './openai.controller';
import { OpenaiService } from './openai.service';

@Module({
  imports: [ConfigModule],
  controllers: [OpenaiController],
  providers: [
    OpenaiService,
    {
      provide: OpenAI,
      useFactory: (configservice: ConfigService) =>
        new OpenAI({ apiKey: configservice.getOrThrow('OPENAI_API_KEY') }),
      inject: [ConfigService]
    }
  ]
})
export class OpenaiModule { }
