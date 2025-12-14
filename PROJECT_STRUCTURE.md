# 프로젝트 구조

## 폴더 구조

```
lems-prototype/
├── src/
│   ├── components/          # 공통 컴포넌트
│   │   ├── admin/          # 관리자 전용 컴포넌트
│   │   │   ├── AdminHeader.tsx
│   │   │   └── AdminSidebar.tsx
│   │   ├── board/          # 게시판 컴포넌트
│   │   │   └── PostList.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   └── ProtectedRoute.tsx
│   ├── data/               # 더미 데이터
│   │   └── dummyData.ts
│   ├── layouts/            # 레이아웃 컴포넌트
│   │   ├── AdminLayout.tsx
│   │   ├── MainLayout.tsx
│   │   └── MyPageLayout.tsx
│   ├── pages/              # 페이지 컴포넌트
│   │   ├── admin/         # 관리자 페이지
│   │   │   ├── AdminBoardManagePage.tsx
│   │   │   ├── AdminCourseCreatePage.tsx
│   │   │   ├── AdminCourseEditPage.tsx
│   │   │   ├── AdminCourseListPage.tsx
│   │   │   ├── AdminDashboardPage.tsx
│   │   │   ├── AdminEnrollmentPage.tsx
│   │   │   ├── AdminInstructorCreatePage.tsx
│   │   │   ├── AdminInstructorListPage.tsx
│   │   │   ├── AdminMemberListPage.tsx
│   │   │   └── AdminPaymentPage.tsx
│   │   ├── auth/          # 인증 페이지
│   │   │   ├── LoginPage.tsx
│   │   │   └── RegisterPage.tsx
│   │   ├── board/         # 게시판 페이지
│   │   │   ├── ArchiveDetailPage.tsx
│   │   │   ├── ArchiveListPage.tsx
│   │   │   ├── FAQPage.tsx
│   │   │   ├── InquiryCreatePage.tsx
│   │   │   ├── InquiryDetailPage.tsx
│   │   │   ├── InquiryListPage.tsx
│   │   │   ├── MaterialDetailPage.tsx
│   │   │   ├── MaterialListPage.tsx
│   │   │   ├── NewsDetailPage.tsx
│   │   │   ├── NewsListPage.tsx
│   │   │   ├── NoticeDetailPage.tsx
│   │   │   ├── NoticeListPage.tsx
│   │   │   ├── ParkingPage.tsx
│   │   │   ├── PressDetailPage.tsx
│   │   │   ├── PressListPage.tsx
│   │   │   ├── QualificationDetailPage.tsx
│   │   │   ├── QualificationListPage.tsx
│   │   │   ├── ReviewDetailPage.tsx
│   │   │   ├── ReviewListPage.tsx
│   │   │   ├── StudentBoardDetailPage.tsx
│   │   │   └── StudentBoardListPage.tsx
│   │   ├── mypage/        # 마이페이지
│   │   │   ├── MyEnrollmentPage.tsx
│   │   │   ├── MyInfoPage.tsx
│   │   │   └── MyProofPage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── CourseDetailPage.tsx
│   │   ├── CourseEnrollCompletePage.tsx
│   │   ├── CourseEnrollPage.tsx
│   │   ├── CourseListPage.tsx
│   │   └── HomePage.tsx
│   ├── types/              # TypeScript 타입 정의
│   │   └── index.ts
│   ├── utils/              # 유틸리티 함수
│   │   └── storage.ts
│   ├── App.tsx             # 메인 앱 컴포넌트
│   ├── main.tsx            # 진입점
│   └── index.css           # 전역 스타일
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

## 라우팅 구조

### Public Routes (MainLayout)

- `/` - 메인 페이지
- `/about` - 교육원 소개
- `/courses` - 강좌 목록
- `/courses/:id` - 강좌 상세
- `/courses/:id/enroll` - 수강 신청
- `/courses/:id/enroll/complete` - 수강 신청 완료
- `/board/*` - 게시판 관련 (11개 게시판)

### Auth Routes

- `/login` - 로그인
- `/register` - 회원가입

### MyPage Routes (MyPageLayout, Protected)

- `/mypage/info` - 내 정보
- `/mypage/enrollment` - 수강 내역
- `/mypage/proof` - 증빙 내역

### Admin Routes (AdminLayout, Admin Only)

- `/admin` - 대시보드
- `/admin/courses` - 강좌 관리
- `/admin/courses/create` - 강좌 등록
- `/admin/courses/:id/edit` - 강좌 수정
- `/admin/enrollments` - 수강 신청 관리
- `/admin/members` - 회원 관리
- `/admin/instructors` - 강사 관리
- `/admin/instructors/create` - 강사 등록
- `/admin/payments` - 결제/환불 관리
- `/admin/boards` - 게시판 관리

## 게시판 목록

1. **공지사항** - `/board/notice`
2. **교육원 소식** - `/board/news`
3. **언론 보도자료** - `/board/press`
4. **민간자격정보** - `/board/qualification`
5. **주차 안내** - `/board/parking` (정적 페이지)
6. **상담실** - `/board/inquiry` (문의 등록 가능)
7. **학습자 게시판** - `/board/student`
8. **수강 후기 및 사진** - `/board/review`
9. **학습자료 게시판** - `/board/material`
10. **자료실** - `/board/archive`
11. **FAQ** - `/board/faq`

## 테스트 계정

### 관리자

- ID: `admin`
- PW: `admin123`

### 일반 수강생

- ID: `student1`
- PW: `student123`

### 재학생/교직원

- ID: `staff1`
- PW: `staff123`

### 강사

- ID: `instructor1`
- PW: `instructor123`

## 데이터 저장

모든 데이터는 `localStorage`에 저장됩니다:

- `users` - 사용자 목록
- `courses` - 강좌 목록
- `instructors` - 강사 목록
- `posts` - 게시글 목록
- `enrollments` - 수강 신청 목록
- `currentUser` - 현재 로그인한 사용자

## 주요 기능

### 수강생 기능

- 회원가입/로그인
- 강좌 조회 및 검색
- 수강 신청 (할인 선택 포함)
- 결제 방법 선택 (계좌이체, 카드결제, 바우처)
- 마이페이지에서 수강 내역 및 증빙 확인

### 관리자 기능

- 대시보드 (통계 요약)
- 강좌 관리 (등록, 수정)
- 수강 신청 관리
- 회원 관리
- 강사 관리
- 결제/환불 관리
- 게시판 관리
