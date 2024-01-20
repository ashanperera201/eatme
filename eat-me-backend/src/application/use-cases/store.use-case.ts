import Ajv from 'ajv';
import { StoreDto } from '../../domain';
import storeSchema from '../schemas/store.schema.json'

const ajv = new Ajv();

const validateStore = ajv.compile(storeSchema);

export const validateStoreData = (store: StoreDto) => {
    const isValid = validateStore(store);
    if (!isValid) {
        console.error(validateStore.errors);
    }
    return isValid;
};