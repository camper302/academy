import { Notice } from '../types/notice';
import dbConnect from '../lib/mongodb';
import NoticeModel from '../models/Notice';
import { Document } from 'mongoose';

interface NoticeDocument extends Document {
  _id: any;
  title: string;
  content: string;
  priority: number;
  createdAt: Date;
  updatedAt: Date;
}

export async function getNotices(): Promise<Notice[]> {
  await dbConnect();
  const notices = await NoticeModel.find({})
    .sort({ createdAt: -1 })
    .lean<NoticeDocument[]>();

  return notices.map(notice => ({
    id: notice._id.toString(),
    title: notice.title,
    content: notice.content,
    priority: notice.priority,
    createdAt: notice.createdAt.toISOString(),
    updatedAt: notice.updatedAt.toISOString()
  }));
}