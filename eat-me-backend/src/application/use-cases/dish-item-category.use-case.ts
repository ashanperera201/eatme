import Ajv from 'ajv';
import { DishItemCategoryDto } from '../../domain';
import dishItemCategorySchema from '../schemas/dish-tem-category.schema.json'

const ajv = new Ajv();

const validateDishItem = ajv.compile(dishItemCategorySchema);

export const validateDishItemCategory = (store: DishItemCategoryDto) => {
    const isValid = validateDishItem(store);
    if (!isValid) {
        console.error(validateDishItem.errors);
    }
    return isValid;
};