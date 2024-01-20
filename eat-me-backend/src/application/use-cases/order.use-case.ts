import Ajv from 'ajv';
import { OrderDto } from '../../domain';
import orderSchema from '../schemas/order.schema.json'

const ajv = new Ajv();

const validateOrderItem = ajv.compile(orderSchema);

export const validateDto = (dishItem: OrderDto) => {
    const isValid = validateOrderItem(dishItem);
    if (!isValid) {
        console.error(validateOrderItem.errors);
    }
    return isValid;
};