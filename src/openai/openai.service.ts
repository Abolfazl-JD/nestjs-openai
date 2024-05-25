import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { ChatCompletionMessageParam } from 'openai/resources';
import { ChatCompletionMessage } from './dto/create-chat-completion.dto';

@Injectable()
export class OpenaiService {
    constructor(
        private readonly openaiProvider: OpenAI
    ) { }

    async createChatCompletion(messages: ChatCompletionMessage[]) {
        const openaiResponse = await this.openaiProvider.chat.completions.create({
            messages: messages as ChatCompletionMessageParam[],
            model: 'gpt-3.5-turbo'
        })
        console.log("**********************************************")
        console.log('Response from chatGPT')
        console.log(openaiResponse)
        return openaiResponse
    }
}
