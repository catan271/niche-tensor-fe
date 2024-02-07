import React, { useEffect } from 'react';
import SvgIcon from '@/svg/SvgIcon';

const ShowImagePanel = () => {
    const [isLoading, setIsLoading] = React.useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 5000);
    }, []);

    return (
        <div className="w-full h-full mx-auto">
            {isLoading ? (
                <div className="flex animate-pulse flex-row pt-20 h-full justify-center space-x-5">
                    <div className="w-500 bg-placeholder h-500 rounded-md "></div>
                </div>
            ) : (
                <div className="flex flex-col p-20 rounded-md justify-center bg-input space-x-5">
                    <img
                        className="h-auto max-w-full object-contain rounded-sm"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
                        alt=""
                    />
                    <div className="flex flex-row justify-center pt-20">
                        <SvgIcon type={'Download'} />
                    </div>
                </div>
            )}
        </div>
    );
};
export default ShowImagePanel;
