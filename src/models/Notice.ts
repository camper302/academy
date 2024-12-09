import mongoose from 'mongoose';

const NoticeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  priority: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Notice || mongoose.model('Notice', NoticeSchema);

export interface Notice {
  _id: string;
  title: string;
  content: string;
  priority: number;
  createdAt: Date;
  updatedAt: Date;
}