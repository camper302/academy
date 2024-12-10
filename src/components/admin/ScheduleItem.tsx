import Link from 'next/link';
import type { Schedule } from '@/types/schedule';

interface ScheduleItemProps {
  schedule: Schedule & { _id?: string };
  onDelete: (id: string) => void;
}

export default function ScheduleItem({ schedule, onDelete }: ScheduleItemProps) {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-lg font-medium">
            {schedule.className}
            <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              {schedule.grade}
            </span>
          </h3>
          <p className="text-sm text-gray-500">
            {schedule.dayOfWeek} | {schedule.startTime} - {schedule.endTime} | 담당: {schedule.teacher}
          </p>
        </div>
        <div className="flex space-x-2">
          <Link
            href={`/admin/schedules/${schedule._id}`}
            className="text-sm text-blue-600 hover:text-blue-800"
          >
            수정
          </Link>
          <button
            onClick={() => schedule._id && onDelete(schedule._id)}
            className="text-sm text-red-600 hover:text-red-800"
          >
            삭제
          </button>
        </div>
      </div>
    </div>
  );
}
