import PromptingPanel from '@/components/Panel/PromptingPanel';
import ExamplePanel from '@/components/Panel/ExamplePanel';
import ShowImagePanel from '@/components/Panel/ShowImagePanel';

export default function Home() {
    return (
        <main>
            <div className="h-screen w-full p-2">
                <div className="grid grid-cols-3 gap-4 h-full">
                    <div className="col-span-1 bg-gray-200 p-2">
                        <ExamplePanel />
                    </div>

                    <div className="col-span-2 bg-gray-300 p-2">
                        <div className="grid grid-rows-3 gap-4 h-full">
                            <div className="row-span-1 bg-gray-400 p-2">
                                <PromptingPanel />
                            </div>
                            <div className="row-span-2 bg-gray-500 p-2">
                                <ShowImagePanel />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
