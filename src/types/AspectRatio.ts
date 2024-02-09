export enum AspectRatio {
    Square = 'Square',
    Wide = 'Wide',
    Tall = 'Tall',
}

export type RatioPair = {
    width: number;
    height: number;
};

export const AspectRatioValue: Record<AspectRatio, RatioPair> = {
    Square: {
        width: 1024,
        height: 1024,
    },
    Wide: {
        width: 1024,
        height: 768,
    },
    Tall: {
        width: 768,
        height: 1024,
    },
};
