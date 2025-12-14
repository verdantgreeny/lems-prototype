export type UserRole = 'student' | 'staff' | 'instructor' | 'admin';

export interface User {
  id: string;
  username: string;
  password: string;
  name: string;
  role: UserRole;
  email?: string;
  phone?: string;
  studentId?: string; // 재학생/교직원 구분용
  isStaff?: boolean; // 교직원 여부
  isStudent?: boolean; // 재학생 여부
}

export interface Course {
  id: string;
  name: string;
  category: string;
  instructor: string;
  instructorId?: string;
  schedule: {
    days: string[];
    time: string;
  };
  location: string;
  fee: number;
  discountedFee?: number;
  maxStudents: number;
  currentStudents: number;
  status: 'recruiting' | 'closed' | 'ongoing';
  description?: string;
  month: string; // YYYY-MM 형식
}

export interface Enrollment {
  id: string;
  userId: string;
  courseId: string;
  courseName: string;
  month: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  paymentMethod?: 'account' | 'card' | 'voucher';
  paymentStatus: 'unpaid' | 'paid' | 'refunded';
  fee: number;
  discountedFee?: number;
  discountType?: string;
  enrollmentDate: string;
  paymentDate?: string;
}

export interface Instructor {
  id: string;
  name: string;
  phone: string;
  email: string;
  address?: string;
  accountNumber?: string;
  contractType: 'faculty' | 'staff' | 'external';
  vehicleNumber?: string;
  contractDate?: string;
  photo?: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
  authorId?: string;
  category: string;
  createdAt: string;
  updatedAt?: string;
  views: number;
  attachments?: string[];
  isNotice?: boolean;
}

export interface Payment {
  id: string;
  enrollmentId: string;
  userId: string;
  amount: number;
  method: 'account' | 'card' | 'voucher';
  status: 'pending' | 'completed' | 'refunded';
  date: string;
  cardApprovalNumber?: string;
  cardFee?: number;
  cashReceiptNumber?: string;
  cashReceiptType?: 'phone' | 'business';
}
