import React from 'react';

export enum Icon {
    Download,
    Square,
    Tall,
    Wide,
    Rectangle,
    SquareBg,
    TallBg,
    WideBg,
}

interface SvgIconInterface {
    icon: Icon;
}
const SvgIcon: React.FC<SvgIconInterface> = ({ icon }) => {
    switch (icon) {
        case Icon.Download:
            return (
                <svg
                    width="40px"
                    height="40px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#00a1d7"
                    className="cursor-pointer"
                >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        {' '}
                        <path
                            d="M12 7L12 14M12 14L15 11M12 14L9 11"
                            stroke="#00a1d7"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>{' '}
                        <path d="M16 17H12H8" stroke="#00a1d7" strokeWidth="1.5" strokeLinecap="round"></path>{' '}
                        <path
                            opacity="0.5"
                            d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
                            stroke="#00a1d7"
                            strokeWidth="1.5"
                        ></path>{' '}
                    </g>
                </svg>
            );
        case Icon.Rectangle:
            return (
                <svg
                    fill="#ff0000"
                    width="64px"
                    height="64px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#36383d"
                >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path d="M21,21H3L12,3Z"></path>
                    </g>
                </svg>
            );
        case Icon.WideBg:
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
        case Icon.TallBg:
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
        case Icon.SquareBg:
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
        case Icon.Square:
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
        case Icon.Wide:
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
        case Icon.Tall:
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
