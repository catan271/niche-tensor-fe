export enum AspectRatio {
    Square = 'Square',
    Wide = 'Wide',
    Tall = 'Tall',
}

export type RatioPair = {
    w: number;
    h: number;
};

export const AspectRatioValue: Record<AspectRatio, RatioPair> = {
    Square: {
        w: 1,
        h: 1,
    },
    Wide: {
        w: 3,
        h: 2,
    },
    Tall: {
        w: 2,
        h: 3,
    },
};
