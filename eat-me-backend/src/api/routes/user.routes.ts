
import express from 'express';
import { createUserAsync } from '../controllers/user.controller'

const expressRef = express;
const router = expressRef.Router()

router.post('', createUserAsync);

export default router;