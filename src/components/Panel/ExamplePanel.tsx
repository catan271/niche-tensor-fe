import React from 'react';

const ExamplePanel = () => {
    return (
        <div className="pt-20">
            <div className="flex gap-20 pb-10">
                <label
                    htmlFor="large-input"
                    className="block underline decoration-3 underline-offset-8 decoration-blue decoration-10 mb-2 text-sm  font-medium text-white dark:text-primary"
                >
                    Explore idea
                </label>{' '}
                <label htmlFor="large-input" className="block  mb-2 text-sm font-medium text-white dark:text-primary">
                    Creations
                </label>{' '}
            </div>
            <div className="grid grid-cols-4 gap-5">
                <div className="relative">
                    <img
                        className="h-auto max-w-full rounded-sm hover:blur-sm"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
                        alt=""
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 hover:bg-rgba-black ">
                        <span className="text-white text-xl z-10">Lorema ipsum</span>
                    </div>
                </div>
                <div className="relative">
                    <img
                        className="h-auto max-w-full rounded-sm hover:blur-sm"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
                        alt=""
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 hover:bg-rgba-black ">
                        <span className="truncate text-white text-xl p-3">Loremaqưeqeqweqweqweq ipsum</span>
                    </div>
                </div>
                <div className="relative">
                    <img
                        className="h-auto max-w-full rounded-sm hover:blur-sm"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
                        alt=""
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 hover:bg-rgba-black ">
                        <span className="text-white text-xl z-10">Lorema ipsum</span>
                    </div>
                </div>
                <div className="relative">
                    <img
                        className="h-auto max-w-full rounded-sm hover:blur-sm"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
                        alt=""
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 hover:bg-rgba-black ">
                        <span className="text-white text-xl z-10">Lorema ipsum</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ExamplePanel;
