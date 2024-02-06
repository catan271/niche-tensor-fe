import React from 'react';

interface ButtonProps {
    title?: any;
    onClick?: any;
    icon?: any;
}

const DashedButton: React.FC<ButtonProps> = ({ onClick, title, icon }) => {
    return (
        <button
            onClick={onClick}
            className="cursor-pointer outline-dashed rounded-full border-none outline-2 outline-offset-3 p-10 outline-inputBorder bg-btnBg "
        >
            <div className="flex flex-row align-center">
                {icon}
                <span className="text-text pl-5 pr-5">{title}</span>
            </div>
        </button>
    );
};
export default DashedButton;
