export interface PanelProps {
    className?: string;
    children?: React.ReactNode;
}

export const Panel: React.FC<PanelProps> = ({ className = '', children }) => {
    return (
        <div className={'container border-2 border-solid border-inputBorder rounded-8 p-12 ' + className}>
            {children}
        </div>
    );
};
