import { Notice } from '@/types/notice';

interface NoticeItemProps {
  notice: Notice;
  onEdit: (notice: Notice) => void;
  onDelete: (id: string) => void;
}

export default function NoticeItem({ notice, onEdit, onDelete }: NoticeItemProps) {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-lg font-medium">
            {notice.title}
            {notice.isEmergency && (
              <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                긴급
              </span>
            )}
            {notice.isPopup && (
              <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                팝업
              </span>
            )}
          </h3>
          <p className="text-sm text-gray-500">
            우선순위: {notice.priority} | 작성일: {new Date(notice.createdAt!).toLocaleDateString()}
          </p>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => onEdit(notice)}
            className="text-sm text-blue-600 hover:text-blue-800"
          >
            수정
          </button>
          <button
            onClick={() => onDelete(notice._id!)}
            className="text-sm text-red-600 hover:text-red-800"
          >
            삭제
          </button>
        </div>
      </div>
      <p className="text-gray-700 whitespace-pre-wrap">{notice.content}</p>
    </div>
  );
}
