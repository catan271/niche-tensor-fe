import React from 'react';

interface StyleProps {
    onclose: any;
    setItem: any;
    typeList: any;
}
const TypeList: React.FC<StyleProps> = ({ typeList, onclose, setItem }) => {
    return (
        <div
            className="top-50 bg-slider absolute left-0 z-10 mt-2 origin-top-right rounded-md shadow-lg border-none  focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex={-1}
        >
            <div className="flex flex-col gap-3 p-10" role="none" onMouseLeave={onclose}>
                {typeList.map((item: any) => {
                    return (
                        <a
                            className="flex align-center gap-5 text-text px-4 py-2 hover:bg-blue rounded-lg p-5"
                            role="menuitem"
                            tabIndex={-1}
                            id="menu-item-0"
                            onClick={() => setItem(item.value)}
                        >
                            {/*<img src={`./styleType/${item.name}.jpg`} alt={`${item.name}`} />*/}
                            <span>{item.name}</span>
                        </a>
                    );
                })}
            </div>
        </div>
    );
};
export default TypeList;
