export interface Notice {
  _id: string;
  title: string;
  content: string;
  priority: number;
  isEmergency: boolean;
  isPopup: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface NoticeFormData {
  title: string;
  content: string;
  priority?: number;
  isEmergency?: boolean;
  isPopup?: boolean;
}
