import React, { useEffect } from 'react';
import SvgIcon from '@/svg/SvgIcon';

interface Props {
    image: any;
    loading: any;
}
const ShowImagePanel: React.FC<Props> = ({ image, loading }) => {
    const handleDownloadClick = () => {
        const link = document.createElement('a');
        link.href = `data:image/png;base64,${image}`;
        link.download = 'downloadedImage.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="relative w-500 h-500 mx-auto p-10">
            {loading ? (
                <div className="flex animate-pulse flex-row pt-20 h-full justify-center space-x-5">
                    <div className="w-500 bg-placeholder h-500 rounded-md "></div>
                </div>
            ) : (
                <div className=" group flex h-full flex-col p-20 rounded-md justify-center bg-input space-x-5">
                    <img
                        className="h-full max-w-full object-contain rounded-sm"
                        src={`data:image/png;base64,${image}`}
                        alt=""
                    />
                    <div
                        onClick={handleDownloadClick}
                        className="z-10 absolute top-20 right-40  flex-row justify-center pt-20 hidden group-hover:block"
                    >
                        <SvgIcon type={'Download'} />
                    </div>
                </div>
            )}
        </div>
    );
};
export default ShowImagePanel;
