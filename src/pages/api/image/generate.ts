import { Post, Body, Res, createHandler, Catch } from 'next-api-decorators';
import { AspectRatioValue } from '../../../types/AspectRatio';
import { api } from '../../../server/utils/api';
import { GenerateDto } from '../../../dto/GenerateDto';
import type { NextApiResponse } from 'next';
import { exceptionHandler } from '../../../server/utils/exceptionHandler';
import { GenerateResponse } from '../../../types/GenerateResponse';

@Catch(exceptionHandler)
class GenerateHandler {
    @Post()
    async generate(@Body() body: GenerateDto, @Res() res: NextApiResponse<GenerateResponse>) {
        const { prompt, modelName, aspectRatio } = body;
        const width = 1024;
        const seed = -1;
        const minerUid = -1;
        const numInferenceSteps = 30;
        const guidanceScale = 7.0;
        const genData: any = {
            key: process.env.API_KEY,
            prompt,
            seed,
            miner_uid: minerUid,
            model_name: modelName,
            pipeline_params: {
                num_inference_steps: numInferenceSteps,
                guidance_scale: guidanceScale,
            },
        };
        if (aspectRatio) {
            const { w, h } = AspectRatioValue[aspectRatio];
            genData.pipeline_params = {
                ...genData.pipeline_params,
                width,
                height: (width * h) / w,
            };
        }

        const genRes = await api.post('/generate', genData);
        res.status(200).send({
            data: genRes.data,
        });
    }
}

export default createHandler(GenerateHandler);
