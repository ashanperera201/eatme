
import express from 'express';
import {
    getAllDishItemCategoriesAsync,
    createDishItemCategoryAsync,
    updateDishItemCategoryAsync,
    deleteDishItemCategoryAsync,
    getDishItemCategoryAsync,
    createDishItemAsync,
    getDishItemByIdAsync,
    getDishItemsAsync,
    updateDishItemAsync,
    deleteDishItemAsync
} from '../controllers/menu.controller'

const expressRef = express;
const router = expressRef.Router()

// item categories
router.post('/dish/item-category', createDishItemCategoryAsync);
router.put('/dish/item-category', updateDishItemCategoryAsync);
router.get('/dish/item-category', getAllDishItemCategoriesAsync);
router.get('/dish/item-category', getAllDishItemCategoriesAsync);
router.get('/dish/item-category/:id', getDishItemCategoryAsync);
router.post('/dish/item-category/delete', deleteDishItemCategoryAsync);

// items
router.post('/dish/item', createDishItemAsync);
router.put('/dish/item', updateDishItemAsync);
router.get('/dish/item', getDishItemsAsync);
router.get('/dish/item/:id', getDishItemByIdAsync);
router.post('/dish/item/delete', deleteDishItemAsync);

export default router;