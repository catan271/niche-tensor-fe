import React from 'react';
import DashedButton from '@/components/Elements/DashedButton';
import Slider from '@/components/Elements/Slider';

const PromptingPanel = () => {
    return (
        <div className="container border p-25">
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
                />
                <div className="pt-20 flex flex-row gap-15">
                    <DashedButton
                        icon={
                            <svg
                                width="25px"
                                height="25px"
                                viewBox="-6.48 -6.48 36.96 36.96"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                stroke="#b7b8ba"
                            >
                                <g id="SVGRepo_bgCarrier" strokeWidth="0">
                                    <rect
                                        x="-6.48"
                                        y="-6.48"
                                        width="36.96"
                                        height="36.96"
                                        rx="18.48"
                                        fill="#3a3c40"
                                        strokeWidth="0"
                                    ></rect>
                                </g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    {' '}
                                    <rect
                                        x="4"
                                        y="4"
                                        width="16"
                                        height="16"
                                        rx="2"
                                        stroke="#b7b8ba"
                                        strokeWidth="2.4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></rect>{' '}
                                </g>
                            </svg>
                        }
                        title={'Square Aspect'}
                    />
                    <DashedButton title={'No Style'} />
                    <DashedButton title={'No Color'} />
                    <DashedButton title={'No Lightning'} />
                    <DashedButton title={'No Composition'} />
                </div>
            </div>
            <div className="flex justify-between pt-2">
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
                    <button className="rounded-lg px-15 py-10 border-none cursor-pointer border-2 bg-blue">
                        <span className="text-white">Generate (4c)</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
export default PromptingPanel;
