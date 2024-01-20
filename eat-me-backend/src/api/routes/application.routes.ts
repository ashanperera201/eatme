
import express from 'express';
import { getApiVersion, greetings } from '../controllers/applications.controller'

const expressRef = express;
const router = expressRef.Router()

router.get('/greetings', greetings);
router.get('/version', getApiVersion);

export default router;