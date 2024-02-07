import SvgIcon from '@/svg/SvgIcon';
import React from 'react';

interface SquareAspectProps {
    onclose: any;
    setItem: any;
}
const SquareAspect: React.FC<SquareAspectProps> = ({ onclose, setItem }) => {
    const aspectList = [{ name: 'Square' }, { name: 'Wide' }, { name: 'Tall' }];

    return (
        <>
            <div
                className="top-50 bg-slider absolute right-0 z-10 mt-2 w-150 origin-top-right rounded-md shadow-lg border-none  focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex={-1}
            >
                <div className="flex flex-col gap-3 p-10" role="none" onMouseLeave={onclose}>
                    {aspectList.map((item) => {
                        return (
                            <a
                                className="flex align-center gap-5 text-text px-4 py-2 hover:bg-blue rounded-lg p-5"
                                role="menuitem"
                                tabIndex={-1}
                                id="menu-item-0"
                                onClick={() => setItem(item.name)}
                            >
                                <SvgIcon type={item.name} />
                                <span>{item.name}</span>
                            </a>
                        );
                    })}
                </div>
            </div>
        </>
    );
};
export default SquareAspect;
