import { Body, Controller, Post } from '@nestjs/common';
import { CreateChatCompletionDto } from './dto/create-chat-completion.dto';
import { OpenaiService } from './openai.service';

@Controller('openai')
export class OpenaiController {

    constructor(
        private readonly openaiService: OpenaiService
    ) { }

    @Post('chatCompletion')
    async createChatCompletion(
        @Body() body: CreateChatCompletionDto
    ) {
        return this.openaiService.createChatCompletion(body.messages)
    }
}
