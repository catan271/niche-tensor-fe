import PromptingPanel from '@/components/Panel/PromptingPanel';
import ExamplePanel from '@/components/Panel/ExamplePanel';
import ShowImagePanel from '@/components/Panel/ShowImagePanel';
import React from 'react';

export default function Home() {
    const [image, setImage] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [prompt, setPrompt] = React.useState('');

    return (
        <>
            <div className="grid grid-cols-5 gap-4">
                <div className="col-span-3">
                    <div className="grid grid-rows-2 gap-4">
                        <div className="row-span-1">
                            <PromptingPanel
                                prompt={prompt}
                                setPrompt={prompt}
                                loading={loading}
                                setLoading={setLoading}
                                setImage={setImage}
                            />
                        </div>
                        <div className="row-span-1">
                            <ExamplePanel setPrompt={setPrompt} />
                        </div>
                    </div>
                </div>
                <div className="col-span-2">
                    <ShowImagePanel loading={loading} image={image} />
                </div>
            </div>
        </>
    );
}
