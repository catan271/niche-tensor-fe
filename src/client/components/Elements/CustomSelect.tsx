import { useMemo, useRef, useState } from 'react';

export interface Option<ValueType> {
    value: ValueType;
    label: React.ReactNode;
    icon?: React.ReactNode;
}

export interface CustomSelectProps<ValueType = any> {
    value?: ValueType;
    onChange?: (value: ValueType) => void;
    placeholder?: string;
    options?: Option<ValueType>[];
}

export function CustomSelect<ValueType>({ value, onChange, placeholder, options = [] }: CustomSelectProps<ValueType>) {
    const [open, setOpen] = useState(false);

    const dropdownRef = useRef<HTMLDivElement>(null);

    const selectedOption = useMemo(() => {
        const selectedOption = options.find((option) => option.value === value);
        return selectedOption;
    }, [value, options]);

    const handleOpen = () => {
        if (!open) {
            setOpen(true);
            setTimeout(() => {
                const body = document.querySelector('body')!;
                const close = () => {
                    handleClose();
                    body.removeEventListener('click', close);
                };
                body.addEventListener('click', close);
            }, 1);
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSelect = (value: ValueType) => {
        handleClose();
        onChange?.(value);
    };

    return (
        <div className="relative">
            <div
                onClick={handleOpen}
                className="h-40 cursor-pointer rounded-full px-16 flex items-center whitespace-nowrap
                border-none outline-2 outline-offset-3 outline-inputBorder bg-background2 
                outline-dashed focus:outline-white focus:outline"
            >
                {selectedOption ? (
                    <div className="h-fit flex items-center space-x-8">
                        {selectedOption.icon}
                        <div>{selectedOption.label}</div>
                    </div>
                ) : (
                    placeholder
                )}
            </div>

            <div
                style={{ display: open ? 'block' : 'none' }}
                tabIndex={0}
                ref={dropdownRef}
                onBlur={handleClose}
                className="top-[calc(100%+6px)] bg-options absolute z-50 w-fit mt-2 origin-top-right rounded-md shadow-lg border-none focus:outline-none"
            >
                <div className="flex flex-col gap-3 p-10">
                    {options.map((option) => {
                        return (
                            <a
                                key={option.value as any}
                                className="flex items-center whitespace-nowrap gap-5 text-textColor px-4 py-2 rounded-lg p-5"
                                onClick={() => handleSelect(option.value)}
                            >
                                {option.icon}
                                {option.label}
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
