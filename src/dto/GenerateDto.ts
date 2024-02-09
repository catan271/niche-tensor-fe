import { IsEnum, IsOptional, IsString } from 'class-validator';
import { ModelName } from '@/types/ModelName';
import { AspectRatio } from '@/types/AspectRatio';
import { Style } from '@/types/Style';

export class GenerateDto {
    @IsString()
    @IsOptional()
    prompt?: string;

    @IsEnum(ModelName)
    modelName: ModelName;

    @IsEnum(Style)
    @IsOptional()
    style?: Style;

    @IsEnum(AspectRatio)
    aspectRatio: AspectRatio;
}
