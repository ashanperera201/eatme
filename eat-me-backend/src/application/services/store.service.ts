import { StatusCode } from 'status-code-enum';

import { validateStoreData } from '../use-cases/store.use-case';
import { StoreDto } from '../../domain';
import { ResponseDto } from '../../domain/dto/response.dto';
import { storeRepository } from '../../domain/repositories/store.repository';

class StoreService {

    createStoreAsync = async (store: StoreDto): Promise<ResponseDto<StoreDto>> => {
        const validated = validateStoreData(store);
        if (validated) {
            const storeRes = await storeRepository.saveStoreAsync(store);
            return new ResponseDto<StoreDto>(storeRes, StatusCode.SuccessOK, true, []);
        }
        return new ResponseDto<StoreDto>(null, StatusCode.ClientErrorBadRequest, false, ['Check the store model again.']);
    }

    updateStoreAsync = async (store: StoreDto): Promise<ResponseDto<StoreDto>> => {
        const validated = validateStoreData(store);
        if (validated) {
            const storeRes = await storeRepository.updateStoreAsync(store);
            return new ResponseDto<StoreDto>(storeRes, StatusCode.SuccessOK, true, []);
        }
        return new ResponseDto<StoreDto>(null, StatusCode.ClientErrorBadRequest, false, ['Check the store model again.']);
    }

    getStoreAsync = async (store: string): Promise<ResponseDto<StoreDto>> => {
        const storeRes = await storeRepository.getStoreByIdAsync(store);
        return new ResponseDto<StoreDto>(storeRes, storeRes ? StatusCode.SuccessOK : StatusCode.SuccessNoContent, true, []);
    }

    deleteStoreAsync = async (store: StoreDto): Promise<ResponseDto<boolean>> => {
        const storeRes = await storeRepository.deleteStoreAsync(store);
        return new ResponseDto<boolean>(storeRes, StatusCode.SuccessOK, true, []);
    }
}

export const storeService = new StoreService();
