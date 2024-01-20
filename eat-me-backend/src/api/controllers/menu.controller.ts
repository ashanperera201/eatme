import { Request, Response } from 'express';

import { dishItemCategoryService } from '../../application/services/dish-item-category.service';
import { dishItemService } from '../../application/services/dish-item.service'
import { DishItemCategoryDto } from '../../domain';
import StatusCode from 'status-code-enum';

export const createDishItemCategoryAsync = async (req: Request, res: Response) => {
    const payload: DishItemCategoryDto = req.body;
    const response = await dishItemCategoryService.createDishItemCategoryAsync(payload);
    res.status(response.status).json(response);
}

export const updateDishItemCategoryAsync = async (req: Request, res: Response) => {
    const payload: DishItemCategoryDto = req.body;
    const response = await dishItemCategoryService.updateDishItemCategoryAsync(payload);
    res.status(response.status).json(response);
}

export const getAllDishItemCategoriesAsync = async (req: Request, res: Response) => {
    const params: any = req.query;
    if (params && params.page && params.pageSize) {
        const response = await dishItemCategoryService.getDishItemCategoriesAsync(+params.page, +params.pageSize);
        res.status(response.status).json(response);
    } else {
        res.status(StatusCode.ClientErrorBadRequest);
    }
}

export const getDishItemCategoryAsync = async (req: Request, res: Response) => {
    const itemCatId: string = req.params.id;
    if (itemCatId) {
        const response = await dishItemCategoryService.getDishItemCategoryByIdAsync(+itemCatId);
        res.status(response.status).json(response);
    }

    res.status(StatusCode.ClientErrorBadRequest);
}

export const deleteDishItemCategoryAsync = async (req: Request, res: Response) => {
    const item = req.body;
    if (item) {
        const response = await dishItemCategoryService.deleteDishItemCategoryAsync(item);
        res.status(response.status).json(response);
    }
    res.status(StatusCode.ClientErrorBadRequest);
}


export const createDishItemAsync = async (req: Request, res: Response) => {
    const item = req.body;
    if (item) {
        const response = await dishItemService.createDishItemAsync(item);
        res.status(response.status).json(response);
    }
    res.status(StatusCode.ClientErrorBadRequest);
}

export const updateDishItemAsync = async (req: Request, res: Response) => {
    const item = req.body;
    if (item) {
        const response = await dishItemService.updateDishItemAsync(item);
        res.status(response.status).json(response);
    }
    res.status(StatusCode.ClientErrorBadRequest);
}

export const getDishItemByIdAsync = async (req: Request, res: Response) => {
    const item = req.params.id;
    if (item) {
        const response = await dishItemService.getDishItemAsync(+item);
        res.status(response.status).json(response);
    }
    res.status(StatusCode.ClientErrorBadRequest);
}

export const getDishItemsAsync = async (req: Request, res: Response) => {
    const params: any = req.query;
    if (params && params.page && params.pageSize) {
        const response = await dishItemService.getDishItemsAsync(+params.page, +params.pageSize);
        res.status(response.status).json(response);
    }
    res.status(StatusCode.ClientErrorBadRequest);
}

export const deleteDishItemAsync = async (req: Request, res: Response) => {
    const item: any = req.body;
    if (item) {
        const response = await dishItemService.deleteDishItemAsync(item);
        res.status(response.status).json(response);
    }
    res.status(StatusCode.ClientErrorBadRequest);
}
