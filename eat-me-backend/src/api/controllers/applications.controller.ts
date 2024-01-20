import { Request, Response } from 'express';

export const greetings = (req: Request, res: Response) => {
    res.status(200).json(process.env.WELCOME_GREETINGS);
}

export const getApiVersion = (req: Request, res: Response) => { 
    res.status(200).json(process.env.API_VERSION);
}
