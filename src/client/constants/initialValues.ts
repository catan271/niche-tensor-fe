import { GenerateDto } from '../../dto/GenerateDto';
import { AspectRatio } from '../../types/AspectRatio';
import { ModelName } from '../../types/ModelName';

export const initialValues: GenerateDto = {
    modelName: ModelName.AnimeV3,
    aspectRatio: AspectRatio.Square,
    style: undefined,
};
