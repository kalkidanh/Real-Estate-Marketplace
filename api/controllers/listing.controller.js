import Listing from '../models/listing.model.js';

export const createListing = async (req, res) => {
    try {
        const listing = await Listing.create(req.body);
    } catch (error) {
        next(error);
    }
};