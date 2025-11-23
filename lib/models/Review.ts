import mongoose from "mongoose";
const ReviewSchema = new mongoose.Schema({
  stationId: String,
  userId: String,
  rating: Number,
  comment: String,
}, { timestamps: true });

export default mongoose.models.Review || mongoose.model("Review", ReviewSchema);
