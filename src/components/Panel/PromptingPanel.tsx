import React from 'react';
import DashedButton from '@/components/Elements/DashedButton';
import Slider from '@/components/Elements/Slider';
import SquareAspect from '@/components/Panel/Dropdown/SquareAspect';
import SvgIcon from '@/svg/SvgIcon';
import Style from '@/components/Panel/Dropdown/Style';
import axios from 'axios';
import { GenerateDto } from '@/dto/GenerateDto';
import { AspectRatio } from '@/types/AspectRatio';

interface Props {
    setImage: any;
    loading: any;
    setLoading: any;
}
const PromptingPanel: React.FC<Props> = ({ setImage, loading, setLoading }) => {
    const [isSquareAspect, setSquareAspect] = React.useState(false);
    const [isStyle, setIsStyle] = React.useState(false);
    const [aspect, setAspect] = React.useState<any>(AspectRatio.Square);
    const [style, setStyle] = React.useState<any>(null);
    const [prompt, setPrompt] = React.useState('');
    const generateImage = async () => {
        const requestBody: Partial<GenerateDto> = {
            prompt: prompt,
            aspectRatio: aspect,
            style: style,
        };

        try {
            setLoading(true);
            const response = await axios.post('api/image/generate', requestBody);
            console.log(response?.data.data);
            setImage(response.data.data);
            setLoading(false);
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    return (
        <div className="container border pt-10">
            <div className="container border-2 border-solid border-inputBorder p-30 bg-input rounded-lg">
                <label
                    htmlFor="large-input"
                    className="block mb-2 text-sm text-placeholder font-medium text-gray-900 dark:text-primary"
                >
                    Description prompt
                </label>
                <input
                    type="text"
                    id="large-input"
                    className="block w-full pt-4 border-1 border-solid border-input text-text focus:ring-0 bg-input sm:text-md focus:outline-none focus:border-input "
                    placeholder="What do you want to see?"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                />
                <div className="pt-20 flex flex-row gap-15">
                    <div className="relative">
                        <DashedButton
                            onMouseLeave={() => setSquareAspect(false)}
                            onClick={() => setSquareAspect(!isSquareAspect)}
                            icon={<SvgIcon type={`${aspect}Bg`} />}
                            title={`${aspect} Aspect`}
                        />
                        {isSquareAspect && (
                            <SquareAspect setItem={(e: any) => setAspect(e)} onclose={() => setSquareAspect(false)} />
                        )}
                    </div>
                    <div className="relative">
                        <DashedButton onClick={() => setIsStyle(!isStyle)} title={`${style} Style`} />
                        {isStyle && <Style setItem={(e: any) => setStyle(e)} onclose={() => setIsStyle(false)} />}
                    </div>
                    <DashedButton title={'No Color'} />
                    <DashedButton title={'No Lightning'} />
                    <DashedButton title={'No Composition'} />
                </div>
            </div>
            <div className="flex justify-between">
                <div className="pt-20 flex flex-row items-center gap-20">
                    <Slider title={'Negative prompt'} />
                    <Slider title={'Make private'} />
                </div>

                <div className="pt-20 flex flex-row items-center gap-15">
                    <button className="rounded-lg align-items border-2 items-center border-none bg-input">
                        <div className="flex flex-row items-center gap-5 p-5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="#FFF"
                                className="w-15 h-15"
                            >
                                <path d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875Z" />
                                <path d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 0 0 1.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 0 0 1.897 1.384C6.809 12.164 9.315 12.75 12 12.75Z" />
                                <path d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 15.914 9.315 16.5 12 16.5Z" />
                                <path d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 19.664 9.315 20.25 12 20.25Z" />
                            </svg>
                            {'   '}
                            <span className="text-text">16 remaining</span>
                        </div>
                    </button>
                    <button className="rounded-lg px-15 py-10 cursor-pointer border-2 border-solid border-text bg-input">
                        <span className="text-text">Clear</span>
                    </button>
                    <button className="rounded-lg border-2 border-solid border-blue w-100 px-15 py-10 cursor-pointer bg-blue flex align-center justify-center">
                        {loading ? (
                            <svg
                                aria-hidden="true"
                                className="w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                viewBox="0 0 100 100"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="#fff"
                                />
                                <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="#808080"
                                />
                            </svg>
                        ) : (
                            <span className="text-white" onClick={generateImage}>
                                Generate
                            </span>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};
export default PromptingPanel;
