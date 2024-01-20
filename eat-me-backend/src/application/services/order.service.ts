import { StatusCode } from 'status-code-enum';

import { validateDto } from '../use-cases/order.use-case';
import { OrderDto } from '../../domain';
import { ResponseDto } from '../../domain/dto/response.dto';

import { ordersRepository } from '../../domain/repositories/order.repository';


class OrderService {

    createOrderAsync = async (data: OrderDto): Promise<ResponseDto<OrderDto>> => {
        const validated = validateDto(data);
        if (validated) {
            const storeRes = await ordersRepository.saveOrderAsync(data);
            return new ResponseDto<OrderDto>(storeRes, StatusCode.SuccessOK, true, []);
        }
        return new ResponseDto<OrderDto>(null, StatusCode.ClientErrorBadRequest, false, ['Check the model again.']);
    }

    updateOrderAsync = async (data: OrderDto): Promise<ResponseDto<OrderDto>> => {
        const validated = validateDto(data);
        if (validated) {
            const storeRes = await ordersRepository.updateOrderAsync(data);
            return new ResponseDto<OrderDto>(storeRes, StatusCode.SuccessOK, true, []);
        }
        return new ResponseDto<OrderDto>(null, StatusCode.ClientErrorBadRequest, false, ['Check the model again.']);
    }

    getOrderByIdAsync = async (id: number): Promise<ResponseDto<OrderDto>> => { 
        const order = await ordersRepository.getOrderByIdAsync(id);
        return new ResponseDto<OrderDto>(order, StatusCode.SuccessOK, true, []);
    }

    deleteOrderAsync = async (order: OrderDto): Promise<ResponseDto<OrderDto>> => {
        const status = await ordersRepository.deleteOrder(order);
        return new ResponseDto<OrderDto>(order, StatusCode.SuccessOK, true, []);
    }
}

export const orderService = new OrderService();
