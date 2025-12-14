import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { storage } from './utils/storage';
import { dummyUsers, dummyCourses, dummyInstructors, dummyPosts, dummyEnrollments } from './data/dummyData';

// Layouts
import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';

// Public Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CourseListPage from './pages/CourseListPage';
import CourseDetailPage from './pages/CourseDetailPage';
import CourseEnrollPage from './pages/CourseEnrollPage';
import CourseEnrollCompletePage from './pages/CourseEnrollCompletePage';
import EnrollDiscountPage from './pages/EnrollDiscountPage';
import EnrollRegulationsPage from './pages/EnrollRegulationsPage';

// About Pages
import GreetingPage from './pages/about/GreetingPage';
import PurposePage from './pages/about/PurposePage';
import OrganizationPage from './pages/about/OrganizationPage';
import HistoryPage from './pages/about/HistoryPage';
import FacilitiesPage from './pages/about/FacilitiesPage';
import LocationPage from './pages/about/LocationPage';

// Board Additional Pages
import ClubListPage from './pages/board/ClubListPage';
import ClubDetailPage from './pages/board/ClubDetailPage';
import ClubCreatePage from './pages/board/ClubCreatePage';
import FacilityRentalPage from './pages/board/FacilityRentalPage';

// Instructor Pages
import InstructorLayout from './layouts/InstructorLayout';
import AttendancePage from './pages/instructor/AttendancePage';

// Board Pages
import NoticeListPage from './pages/board/NoticeListPage';
import NoticeDetailPage from './pages/board/NoticeDetailPage';
import NewsListPage from './pages/board/NewsListPage';
import NewsDetailPage from './pages/board/NewsDetailPage';
import PressListPage from './pages/board/PressListPage';
import PressDetailPage from './pages/board/PressDetailPage';
import QualificationListPage from './pages/board/QualificationListPage';
import QualificationDetailPage from './pages/board/QualificationDetailPage';
import ParkingPage from './pages/board/ParkingPage';
import InquiryListPage from './pages/board/InquiryListPage';
import InquiryDetailPage from './pages/board/InquiryDetailPage';
import InquiryCreatePage from './pages/board/InquiryCreatePage';
import StudentBoardListPage from './pages/board/StudentBoardListPage';
import StudentBoardDetailPage from './pages/board/StudentBoardDetailPage';
import ReviewListPage from './pages/board/ReviewListPage';
import ReviewDetailPage from './pages/board/ReviewDetailPage';
import MaterialListPage from './pages/board/MaterialListPage';
import MaterialDetailPage from './pages/board/MaterialDetailPage';
import ArchiveListPage from './pages/board/ArchiveListPage';
import ArchiveDetailPage from './pages/board/ArchiveDetailPage';
import FAQPage from './pages/board/FAQPage';

// Auth Pages
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';

// MyPage
import MyPageLayout from './layouts/MyPageLayout';
import MyInfoPage from './pages/mypage/MyInfoPage';
import MyEnrollmentPage from './pages/mypage/MyEnrollmentPage';
import MyProofPage from './pages/mypage/MyProofPage';

// Admin Pages
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import AdminCourseListPage from './pages/admin/AdminCourseListPage';
import AdminCourseCreatePage from './pages/admin/AdminCourseCreatePage';
import AdminCourseEditPage from './pages/admin/AdminCourseEditPage';
import AdminEnrollmentPage from './pages/admin/AdminEnrollmentPage';
import AdminMemberListPage from './pages/admin/AdminMemberListPage';
import AdminInstructorListPage from './pages/admin/AdminInstructorListPage';
import AdminInstructorCreatePage from './pages/admin/AdminInstructorCreatePage';
import AdminBoardManagePage from './pages/admin/AdminBoardManagePage';
import AdminPaymentPage from './pages/admin/AdminPaymentPage';

// Protected Route Component
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  useEffect(() => {
    // 초기 데이터를 localStorage에 저장
    if (!storage.get('users', null)) {
      storage.set('users', dummyUsers);
    }
    if (!storage.get('courses', null)) {
      storage.set('courses', dummyCourses);
    }
    if (!storage.get('instructors', null)) {
      storage.set('instructors', dummyInstructors);
    }
    if (!storage.get('posts', null)) {
      storage.set('posts', dummyPosts);
    }
    if (!storage.get('enrollments', null)) {
      storage.set('enrollments', dummyEnrollments);
    }
    if (!storage.get('clubs', null)) {
      storage.set('clubs', []);
    }
    if (!storage.get('attendance', null)) {
      storage.set('attendance', []);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />

          {/* 교육원소개 */}
          <Route path="about" element={<AboutPage />} />
          <Route path="about/greeting" element={<GreetingPage />} />
          <Route path="about/purpose" element={<PurposePage />} />
          <Route path="about/organization" element={<OrganizationPage />} />
          <Route path="about/history" element={<HistoryPage />} />
          <Route path="about/facilities" element={<FacilitiesPage />} />
          <Route path="about/location" element={<LocationPage />} />

          {/* 수강안내 */}
          <Route path="courses" element={<CourseListPage />} />
          <Route path="courses/:id" element={<CourseDetailPage />} />
          <Route path="courses/:id/enroll" element={<CourseEnrollPage />} />
          <Route path="courses/:id/enroll/complete" element={<CourseEnrollCompletePage />} />
          <Route path="enroll/discount" element={<EnrollDiscountPage />} />
          <Route path="enroll/regulations" element={<EnrollRegulationsPage />} />

          {/* Board Routes */}
          <Route path="board/notice" element={<NoticeListPage />} />
          <Route path="board/notice/:id" element={<NoticeDetailPage />} />
          <Route path="board/news" element={<NewsListPage />} />
          <Route path="board/news/:id" element={<NewsDetailPage />} />
          <Route path="board/press" element={<PressListPage />} />
          <Route path="board/press/:id" element={<PressDetailPage />} />
          <Route path="board/qualification" element={<QualificationListPage />} />
          <Route path="board/qualification/:id" element={<QualificationDetailPage />} />
          <Route path="board/parking" element={<ParkingPage />} />
          <Route path="board/inquiry" element={<InquiryListPage />} />
          <Route path="board/inquiry/create" element={<InquiryCreatePage />} />
          <Route path="board/inquiry/:id" element={<InquiryDetailPage />} />
          <Route path="board/student" element={<StudentBoardListPage />} />
          <Route path="board/student/:id" element={<StudentBoardDetailPage />} />
          <Route path="board/review" element={<ReviewListPage />} />
          <Route path="board/review/:id" element={<ReviewDetailPage />} />
          <Route path="board/material" element={<MaterialListPage />} />
          <Route path="board/material/:id" element={<MaterialDetailPage />} />
          <Route path="board/archive" element={<ArchiveListPage />} />
          <Route path="board/archive/:id" element={<ArchiveDetailPage />} />
          <Route path="board/faq" element={<FAQPage />} />
          <Route path="board/club" element={<ClubListPage />} />
          <Route path="board/club/create" element={<ClubCreatePage />} />
          <Route path="board/club/:id" element={<ClubDetailPage />} />
          <Route path="board/facility-rental" element={<FacilityRentalPage />} />
        </Route>

        {/* Auth Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* MyPage Routes */}
        <Route
          path="/mypage"
          element={
            <ProtectedRoute>
              <MyPageLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="/mypage/info" replace />} />
          <Route path="info" element={<MyInfoPage />} />
          <Route path="enrollment" element={<MyEnrollmentPage />} />
          <Route path="proof" element={<MyProofPage />} />
        </Route>

        {/* Instructor Routes */}
        <Route
          path="/instructor"
          element={
            <ProtectedRoute requiredRole="instructor">
              <InstructorLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="/instructor/attendance" replace />} />
          <Route path="attendance" element={<AttendancePage />} />
        </Route>

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminDashboardPage />} />
          <Route path="courses" element={<AdminCourseListPage />} />
          <Route path="courses/create" element={<AdminCourseCreatePage />} />
          <Route path="courses/:id/edit" element={<AdminCourseEditPage />} />
          <Route path="enrollments" element={<AdminEnrollmentPage />} />
          <Route path="members" element={<AdminMemberListPage />} />
          <Route path="instructors" element={<AdminInstructorListPage />} />
          <Route path="instructors/create" element={<AdminInstructorCreatePage />} />
          <Route path="boards" element={<AdminBoardManagePage />} />
          <Route path="payments" element={<AdminPaymentPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
