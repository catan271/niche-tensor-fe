import React from 'react';

interface SvgIconInterface {
    type: any;
}
const SvgIcon: React.FC<SvgIconInterface> = ({ type }) => {
    switch (type) {
        case 'TallBg':
            return (
                <svg
                    width="25px"
                    height="25px"
                    viewBox="-2.4 -2.4 28.80 28.80"
                    fill="#3a3c40"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#000000"
                >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0">
                        <rect
                            x="-2.4"
                            y="-2.4"
                            width="28.80"
                            height="28.80"
                            rx="14.4"
                            fill="#3a3c40"
                            strokeWidth="0"
                        ></rect>
                    </g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        {' '}
                        <rect
                            x="3"
                            y="5"
                            width="18"
                            height="14"
                            rx="2"
                            stroke="#b7b8ba"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></rect>{' '}
                    </g>
                </svg>
            );
        case 'WideBg':
            return (
                <svg
                    width="25px"
                    height="25px"
                    viewBox="-2.4 -2.4 28.80 28.80"
                    fill="#3a3c40"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0">
                        <rect
                            x="-2.4"
                            y="-2.4"
                            width="28.80"
                            height="28.80"
                            rx="14.4"
                            fill="#3a3c40"
                            strokeWidth="0"
                        ></rect>
                    </g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        {' '}
                        <path
                            d="M5 6.2C5 5.07989 5 4.51984 5.21799 4.09202C5.40973 3.71569 5.71569 3.40973 6.09202 3.21799C6.51984 3 7.0799 3 8.2 3H15.8C16.9201 3 17.4802 3 17.908 3.21799C18.2843 3.40973 18.5903 3.71569 18.782 4.09202C19 4.51984 19 5.0799 19 6.2V17.8C19 18.9201 19 19.4802 18.782 19.908C18.5903 20.2843 18.2843 20.5903 17.908 20.782C17.4802 21 16.9201 21 15.8 21H8.2C7.07989 21 6.51984 21 6.09202 20.782C5.71569 20.5903 5.40973 20.2843 5.21799 19.908C5 19.4802 5 18.9201 5 17.8V6.2Z"
                            stroke="#b7b8ba"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>{' '}
                    </g>
                </svg>
            );
        case 'SquareBg':
            return (
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
            );
        case 'Square':
            return (
                <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
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
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></rect>{' '}
                    </g>
                </svg>
            );
        case 'Wide':
            return (
                <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        {' '}
                        <rect
                            x="3"
                            y="5"
                            width="18"
                            height="14"
                            rx="2"
                            stroke="#b7b8ba"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></rect>{' '}
                    </g>
                </svg>
            );
        case 'Tall':
            return (
                <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        {' '}
                        <path
                            d="M5 6.2C5 5.07989 5 4.51984 5.21799 4.09202C5.40973 3.71569 5.71569 3.40973 6.09202 3.21799C6.51984 3 7.0799 3 8.2 3H15.8C16.9201 3 17.4802 3 17.908 3.21799C18.2843 3.40973 18.5903 3.71569 18.782 4.09202C19 4.51984 19 5.0799 19 6.2V17.8C19 18.9201 19 19.4802 18.782 19.908C18.5903 20.2843 18.2843 20.5903 17.908 20.782C17.4802 21 16.9201 21 15.8 21H8.2C7.07989 21 6.51984 21 6.09202 20.782C5.71569 20.5903 5.40973 20.2843 5.21799 19.908C5 19.4802 5 18.9201 5 17.8V6.2Z"
                            stroke="#b7b8ba"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>{' '}
                    </g>
                </svg>
            );
    }
};

export default SvgIcon;
