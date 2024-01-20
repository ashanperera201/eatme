
import express from 'express';
import {
    createOrderAsync, deleteOrderAsync, getOrderByIdAsync, updateOrderAsync
} from '../controllers/order.controller'

const expressRef = express;
const router = expressRef.Router()

router.post('', createOrderAsync);
router.put('', updateOrderAsync);
router.get('/:id', getOrderByIdAsync);
router.post('/delete', deleteOrderAsync);

export default router;