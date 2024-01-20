
import express from 'express';
import { createStoreAsync, deleteStoreAsync, getStoreByIdAsync, updateStoreAsync } from '../controllers/store.controller';

const expressRef = express;
const router = expressRef.Router()

router.post('', createStoreAsync);
router.put('', updateStoreAsync);
router.get('/:store', getStoreByIdAsync);
router.post('/delete', deleteStoreAsync);

export default router;