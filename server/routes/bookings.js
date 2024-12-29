import express from 'express';
import { createBooking, getUserBookings, cancelBooking } from '../controllers/bookingController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.use(auth); // Protect all booking routes

router.post('/', createBooking);
router.get('/my', getUserBookings);
router.patch('/:id/cancel', cancelBooking);

export default router;