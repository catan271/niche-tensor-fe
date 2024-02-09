import { GenerateDto } from '../../dto/GenerateDto';
import { GenerateResponse } from '../../types/GenerateResponse';
import { api } from '../utils/api';

export const generateImage = async (body: GenerateDto) => {
    const { data } = await api.post<GenerateResponse>('/image/generate', body);
    return data;
};
