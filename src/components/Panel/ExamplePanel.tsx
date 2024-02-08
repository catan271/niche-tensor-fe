import React from 'react';

interface ExampleProps {
    setPrompt: any;
}
const ExamplePanel: React.FC<ExampleProps> = ({ setPrompt }) => {
    const exampleList = [
        {
            image: 'https://img.freepik.com/free-photo/close-up-cute-fluffy-kitten-staring-generative-ai_188544-9120.jpg',
            value: 'Long orange fur cat',
        },
        {
            image: 'https://robo4hire.com/wp-content/uploads/2017/06/3D-rendering-of-female-robot-head-that-shatters.-664246660_685x514.jpeg',
            value: 'Future robot',
        },
        {
            image: 'https://img.freepik.com/free-photo/nature-sunset-tranquil-meadow-rural-scene-beauty-generative-ai_188544-15462.jpg',
            value: 'Nature grass land with large tree',
        },
        {
            image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg',
            value: 'Commercial advertisement picture ',
        },
    ];

    return (
        <div className="pt-30">
            <div className="flex gap-20 pb-10">
                <label
                    htmlFor="large-input"
                    className="block underline decoration-3 underline-offset-8 decoration-blue decoration-10 mb-2 text-sm  font-medium text-white dark:text-primary"
                >
                    Explore idea
                </label>{' '}
            </div>
            <div className="grid grid-cols-4 gap-5">
                {exampleList.map((item, key) => {
                    return (
                        <div key={key} className="relative cursor-pointer">
                            <img
                                className="h-full max-w-full object-cover rounded-sm hover:blur-sm"
                                src={item.image}
                                alt=""
                            />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200 ease-in hover:bg-rgba-black bg-opacity-20">
                                <span
                                    onClick={() => setPrompt(item.value)}
                                    className="text-white text-xl z-10 px-4 text-center overflow-hidden"
                                >
                                    <span className="line-clamp-3">{item.value}</span>
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default ExamplePanel;
