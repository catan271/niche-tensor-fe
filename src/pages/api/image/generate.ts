import { Post, Body, Res, createHandler, Catch } from 'next-api-decorators';
import { AspectRatioValue } from '@/types/AspectRatio';
import { api } from '@/server/utils/api';
import { GenerateDto } from '@/dto/GenerateDto';
import type { NextApiResponse } from 'next';
import { exceptionHandler } from '@/server/utils/exceptionHandler';
import { GenerateResponse } from '@/types/GenerateResponse';

@Catch(exceptionHandler)
class GenerateHandler {
    @Post()
    async generate(@Body() body: GenerateDto, @Res() res: NextApiResponse<GenerateResponse>) {
        const { prompt, modelName, aspectRatio } = body;
        const { width, height } = AspectRatioValue[aspectRatio];

        const { data } = await api.post('/generate', {
            key: process.env.API_KEY,
            prompt,
            seed: -1,
            miner_uid: -1,
            model_name: modelName,
            pipeline_params: {
                num_inference_steps: 30,
                guidance_scale: 7.0,
                width,
                height,
            },
        });
        res.status(200).send({
            data,
        });
    }
}

export default createHandler(GenerateHandler);
