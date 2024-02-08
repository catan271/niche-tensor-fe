import React from 'react';

interface ButtonProps {
    title?: any;
    onClick?: any;
    icon?: any;
    onMouseLeave?: any;
}

const DashedButton: React.FC<ButtonProps> = ({ onClick, title, icon }) => {
    return (
        <button
            onClick={onClick}
            className="h-50 cursor-pointer outline-dashed rounded-full border-none outline-2 outline-offset-3 p-10 outline-inputBorder bg-btnBg focus:outline-white focus:outline  "
        >
            <div className="flex flex-row align-center">
                {icon}
                <span className="text-text focus:text-white pl-5 pr-5">{title}</span>
            </div>
        </button>
    );
};
export default DashedButton;
