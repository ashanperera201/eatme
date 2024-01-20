import { StatusCode } from 'status-code-enum';

import { validateDishItemCategory } from '../use-cases/dish-item-category.use-case';
import { DishItemCategoryDto } from '../../domain';
import { ResponseDto } from '../../domain/dto/response.dto';

import { dishItemCategoryRepository } from '../../domain/repositories/dish-item-category.repository';


class DishItemCategoryService {

    createDishItemCategoryAsync = async (data: DishItemCategoryDto): Promise<ResponseDto<DishItemCategoryDto>> => {
        const validated = validateDishItemCategory(data);
        if (validated) {
            const response = await dishItemCategoryRepository.saveDishItemCategoryAsync(data);
            return new ResponseDto<DishItemCategoryDto>(response, StatusCode.SuccessOK, true, []);
        }
        return new ResponseDto<DishItemCategoryDto>(null, StatusCode.ClientErrorBadRequest, false, ['Check the model again.']);
    }

    updateDishItemCategoryAsync = async (data: DishItemCategoryDto): Promise<ResponseDto<DishItemCategoryDto>> => {
        const validated = validateDishItemCategory(data);
        if (validated) {
            const response = await dishItemCategoryRepository.updateDishItemCategoryAsync(data);
            return new ResponseDto<DishItemCategoryDto>(response, StatusCode.SuccessOK, true, []);
        }
        return new ResponseDto<DishItemCategoryDto>(null, StatusCode.ClientErrorBadRequest, false, ['Check the model again.']);
    }

    getDishItemCategoryByIdAsync = async (id: number): Promise<ResponseDto<DishItemCategoryDto>> => {
        const response = await dishItemCategoryRepository.getDishItemCategoryByIdAsync(id);
        return new ResponseDto<DishItemCategoryDto>(response, StatusCode.SuccessOK, true, []);
    }

    getDishItemCategoriesAsync = async (page: number, pageSize: number): Promise<ResponseDto<DishItemCategoryDto[]>> => {
        const response = await dishItemCategoryRepository.getDishItemCategoriesAsync(page, pageSize);
        return new ResponseDto<DishItemCategoryDto[]>(response, StatusCode.SuccessOK, true);
    }

    deleteDishItemCategoryAsync = async (data: DishItemCategoryDto): Promise<ResponseDto<boolean>> => { 
        const response = await dishItemCategoryRepository.deleteDishItemCategoryAsync(data);
        return new ResponseDto<boolean>(true,StatusCode.SuccessOK, true, []);
    }
}

export const dishItemCategoryService = new DishItemCategoryService();
