

import { Request, Response } from 'express';

import { orderService } from '../../application/services/order.service';
import StatusCode from 'status-code-enum';

export const createOrderAsync = async (req: Request, res: Response) => {
    const payload = req.body;
    if (payload) {
        const savedRes = await orderService.createOrderAsync(payload);
        res.status(savedRes.status).json(savedRes);
    } else {
        res.status(StatusCode.ClientErrorBadRequest);
    }
}

export const updateOrderAsync = async (req: Request, res: Response) => {
    const payload = req.body;
    if (payload) {
        const savedRes = await orderService.updateOrderAsync(payload);
        res.status(savedRes.status).json(savedRes);
    } else {
        res.status(StatusCode.ClientErrorBadRequest);
    }
}

export const getOrderByIdAsync = async (req: Request, res: Response) => {
    const id = req.params.id;
    if (id) {
        const savedRes = await orderService.getOrderByIdAsync(+id);
        res.status(savedRes.status).json(savedRes);
    } else {
        res.status(StatusCode.ClientErrorBadRequest);
    }
}

export const deleteOrderAsync = async (req: Request, res: Response) => {
    const item: any = req.body;
    if (item) {
        const response = await orderService.deleteOrderAsync(item);
        res.status(response.status).json(response);
    }
    res.status(StatusCode.ClientErrorBadRequest);
}

