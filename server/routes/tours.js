import express from 'express';
import { getAllTours, getTourById } from '../controllers/tourController.js';

const router = express.Router();

router.get('/', getAllTours);
router.get('/:id', getTourById);

export default router;