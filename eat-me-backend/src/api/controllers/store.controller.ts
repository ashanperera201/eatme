import { Request, Response } from 'express';

import { storeService } from '../../application/services/store.service';
import { StoreDto } from '../../domain';


export const createStoreAsync = async (req: Request, res: Response) => {
    const payload: StoreDto = req.body;
    const savedRes = await storeService.createStoreAsync(payload);
    res.status(savedRes.status).json(savedRes);
}

export const updateStoreAsync = async (req: Request, res: Response) => {
    const payload: StoreDto = req.body;
    const savedRes = await storeService.updateStoreAsync(payload);
    res.status(savedRes.status).json(savedRes);
}

export const getStoreByIdAsync = async (req: Request, res: Response) => {
    const store = req.params.store;
    const savedRes = await storeService.getStoreAsync(store);
    res.status(savedRes.status).json(savedRes);
 }

export const deleteStoreAsync = async (req: Request, res: Response) => { 
    const payload: StoreDto = req.body;
    const response = await storeService.deleteStoreAsync(payload);
    res.status(response.status).json(response);
}