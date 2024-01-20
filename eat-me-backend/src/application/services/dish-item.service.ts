import { StatusCode } from 'status-code-enum';

import { validateDto } from '../use-cases/dish-item.use-case';
import { DishItemDto } from '../../domain';
import { ResponseDto } from '../../domain/dto/response.dto';

import { dishItemRepository } from '../../domain/repositories/dish-item.repository';


class DishItemService {

    createDishItemAsync = async (data: DishItemDto): Promise<ResponseDto<DishItemDto>> => {
        const validated = validateDto(data);
        if (validated) {
            const res = await dishItemRepository.saveDishItemAsync(data);
            return new ResponseDto<DishItemDto>(res, StatusCode.SuccessOK, true, []);
        }
        return new ResponseDto<DishItemDto>(null, StatusCode.ClientErrorBadRequest, false, ['Check the model again.']);
    }

    updateDishItemAsync = async (data: DishItemDto): Promise<ResponseDto<DishItemDto>> => {
        const validated = validateDto(data);
        if (validated) {
            const res = await dishItemRepository.updateDishItemAsync(data);
            return new ResponseDto<DishItemDto>(res, StatusCode.SuccessOK, true, []);
        }
        return new ResponseDto<DishItemDto>(null, StatusCode.ClientErrorBadRequest, false, ['Check the model again.']);
    }

    getDishItemAsync = async (id: number): Promise<ResponseDto<DishItemDto>> => {
        if (id) {
            const res = await dishItemRepository.getDishItemByIdAsync(id);
            return new ResponseDto<DishItemDto>(res, StatusCode.SuccessOK, true, []);
        } else {
            return new ResponseDto<DishItemDto>(null, StatusCode.ClientErrorBadRequest, false, []);
        }
    }

    getDishItemsAsync = async (page: number, pageSize: number): Promise<ResponseDto<DishItemDto[]>> => {
        const res = await dishItemRepository.getDishItemsAsync(page, pageSize);
        if (res) {
            return new ResponseDto<DishItemDto[]>(res, StatusCode.SuccessOK, false, []);
        } else {
            return new ResponseDto<DishItemDto[]>(null, StatusCode.SuccessNoContent, false, []);
        }
    }

    deleteDishItemAsync = async (item: DishItemDto): Promise<ResponseDto<boolean>> => {
        const res = await dishItemRepository.deleteDishItem(item);
        return new ResponseDto<boolean>(res, StatusCode.SuccessOK, false, []);
    }
}

export const dishItemService = new DishItemService();
