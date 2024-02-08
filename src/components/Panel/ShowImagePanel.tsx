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
        <div className="relative w-full h-full pt-10 pl-30 mx-auto">
            <div className=" group flex h-500 flex-col p-20 rounded-md justify-center bg-input space-x-5">
                {loading ? (
                    <div className="h-full w-full flex animate-pulse flex-row justify-center space-x-5">
                        <div className="h-full w-full bg-placeholder rounded-sm "></div>
                    </div>
                ) : (
                    <>
                        <img
                            className="h-full max-w-full object-fit rounded-sm"
                            src={`data:image/png;base64,${image}`}
                            alt=""
                        />
                        {image && (
                            <div
                                onClick={handleDownloadClick}
                                className="z-10 absolute top-20 right-40  flex-row justify-center pt-20 hidden group-hover:block"
                            >
                                <SvgIcon type={'Download'} />
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};
export default ShowImagePanel;
