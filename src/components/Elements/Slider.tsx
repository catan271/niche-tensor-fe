import React from 'react';

interface SliderProps {
    title?: any;
}
const Slider: React.FC<SliderProps> = ({ title }) => {
    return (
        <label
            htmlFor={title}
            className="flex items-center cursor-pointer select-none text-dark dark:text-white gap-10"
        >
            <div className="relative">
                <input type="checkbox" id={title} className="peer sr-only" />
                <div className="block h-20 rounded-full peer-checked:bg-blue dark:bg-dark-2 bg-slider w-38"></div>
                <div className="absolute w-18 h-18 transition bg-white rounded-full dot dark:bg-dark-4 left-1 top-1 peer-checked:translate-x-full peer-checked:bg-primary"></div>
            </div>
            <span className="text-text">{title}</span>
        </label>
    );
};
export default Slider;
