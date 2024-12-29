import Booking from '../models/Booking.js';
import Tour from '../models/Tour.js';
import { catchAsync } from '../utils/catchAsync.js';
import { AppError } from '../utils/appError.js';

export const createBooking = catchAsync(async (req, res) => {
  const { tourId, travelDate, numberOfTravelers } = req.body;
  
  const tour = await Tour.findById(tourId);
  if (!tour) {
    throw new AppError('Tour not found', 404);
  }
  
  // Calculate total price
  const totalPrice = tour.price * numberOfTravelers;
  
  const booking = await Booking.create({
    user: req.user.userId,
    tour: tourId,
    travelDate,
    numberOfTravelers,
    totalPrice,
    status: 'pending'
  });
  
  await booking.populate('tour');
  res.status(201).json(booking);
});

export const getUserBookings = catchAsync(async (req, res) => {
  const bookings = await Booking.find({ user: req.user.userId })
    .populate('tour')
    .sort('-createdAt');
  res.json(bookings);
});

export const cancelBooking = catchAsync(async (req, res) => {
  const booking = await Booking.findOne({
    _id: req.params.id,
    user: req.user.userId
  });

  if (!booking) {
    throw new AppError('Booking not found', 404);
  }

  if (booking.status === 'cancelled') {
    throw new AppError('Booking is already cancelled', 400);
  }

  booking.status = 'cancelled';
  await booking.save();
  res.json(booking);
});