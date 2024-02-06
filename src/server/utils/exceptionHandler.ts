import { NextApiRequest, NextApiResponse } from 'next';
import { ApiError } from '../../types/ApiError';

export function exceptionHandler(error: unknown, req: NextApiRequest, res: NextApiResponse<ApiError>) {
    let message = 'Error';
    if (typeof error === 'string') {
        message = error;
    }

    if (error instanceof Error || error instanceof TypeError) {
        message = error.message;
    }

    res.status(500).send({ error: message });
}
