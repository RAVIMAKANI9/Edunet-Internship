import Tour from '../models/Tour.js';
import { catchAsync } from '../utils/catchAsync.js';

export const getAllTours = catchAsync(async (req, res) => {
  const { search, minPrice, maxPrice, duration } = req.query;
  
  let query = {};
  
  if (search) {
    query.title = { $regex: search, $options: 'i' };
  }
  
  if (minPrice || maxPrice) {
    query.price = {};
    if (minPrice) query.price.$gte = Number(minPrice);
    if (maxPrice) query.price.$lte = Number(maxPrice);
  }
  
  if (duration) {
    query.duration = duration;
  }
  
  const tours = await Tour.find(query).sort('-createdAt');
  res.json(tours);
});

export const getTourById = catchAsync(async (req, res) => {
  const tour = await Tour.findById(req.params.id);
  if (!tour) {
    return res.status(404).json({ error: 'Tour not found' });
  }
  res.json(tour);
});