import Ajv from 'ajv';
import { DishItemDto } from '../../domain';
import dishItemSchema from '../schemas/dish-item.schema.json'

const ajv = new Ajv();

const validateDishItem = ajv.compile(dishItemSchema);

export const validateDto = (dishItem: DishItemDto) => {
    const isValid = validateDishItem(dishItem);
    if (!isValid) {
        console.error(validateDishItem.errors);
    }
    return isValid;
};