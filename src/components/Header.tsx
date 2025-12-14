import { Link, useNavigate } from 'react-router-dom';
import { getCurrentUser, setCurrentUser } from '../utils/storage';
import { useState } from 'react';

export default function Header() {
  const navigate = useNavigate();
  const user = getCurrentUser();
  const [showMenu, setShowMenu] = useState<string | null>(null);

  const handleLogout = () => {
    setCurrentUser(null);
    navigate('/');
  };

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            중원대학교 평생교육원
          </Link>
          <nav className="flex items-center gap-6">
            {/* 교육원소개 */}
            <div 
              className="relative" 
              onMouseEnter={() => setShowMenu('about')} 
              onMouseLeave={() => setShowMenu(null)}
            >
              <Link to="/about" className="hover:text-blue-600">
                교육원소개
              </Link>
              {showMenu === 'about' && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50"
                  onMouseEnter={() => setShowMenu('about')}
                  onMouseLeave={() => setShowMenu(null)}
                >
                  <Link to="/about/greeting" className="block px-4 py-2 hover:bg-gray-100">
                    인사말
                  </Link>
                  <Link to="/about/purpose" className="block px-4 py-2 hover:bg-gray-100">
                    설립목적
                  </Link>
                  <Link to="/about/organization" className="block px-4 py-2 hover:bg-gray-100">
                    조직도
                  </Link>
                  <Link to="/about/history" className="block px-4 py-2 hover:bg-gray-100">
                    연혁
                  </Link>
                  <Link to="/about/facilities" className="block px-4 py-2 hover:bg-gray-100">
                    시설안내
                  </Link>
                  <Link to="/about/location" className="block px-4 py-2 hover:bg-gray-100">
                    찾아오시는길
                  </Link>
                </div>
              )}
            </div>

            {/* 수강안내 */}
            <div 
              className="relative" 
              onMouseEnter={() => setShowMenu('enroll')} 
              onMouseLeave={() => setShowMenu(null)}
            >
              <Link to="/courses" className="hover:text-blue-600">
                수강안내
              </Link>
              {showMenu === 'enroll' && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50"
                  onMouseEnter={() => setShowMenu('enroll')}
                  onMouseLeave={() => setShowMenu(null)}
                >
                  <Link to="/courses" className="block px-4 py-2 hover:bg-gray-100">
                    수강신청
                  </Link>
                  <Link to="/enroll/discount" className="block px-4 py-2 hover:bg-gray-100">
                    학습비감면혜택
                  </Link>
                  <Link to="/enroll/regulations" className="block px-4 py-2 hover:bg-gray-100">
                    운영규정
                  </Link>
                </div>
              )}
            </div>

            {/* 교육과정안내 */}
            <div 
              className="relative" 
              onMouseEnter={() => setShowMenu('course')} 
              onMouseLeave={() => setShowMenu(null)}
            >
              <Link to="/courses" className="hover:text-blue-600">
                교육과정안내
              </Link>
              {showMenu === 'course' && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50"
                  onMouseEnter={() => setShowMenu('course')}
                  onMouseLeave={() => setShowMenu(null)}
                >
                  <Link to="/courses" className="block px-4 py-2 hover:bg-gray-100">
                    교육과정안내
                  </Link>
                  <Link to="/courses?category=일반교양" className="block px-4 py-2 hover:bg-gray-100">
                    일반교양과정
                  </Link>
                  <Link to="/courses?category=자격" className="block px-4 py-2 hover:bg-gray-100">
                    자격취득과정
                  </Link>
                </div>
              )}
            </div>

            {/* 알림마당 */}
            <div 
              className="relative" 
              onMouseEnter={() => setShowMenu('notice')} 
              onMouseLeave={() => setShowMenu(null)}
            >
              <span className="hover:text-blue-600 cursor-pointer">알림마당</span>
              {showMenu === 'notice' && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50"
                  onMouseEnter={() => setShowMenu('notice')}
                  onMouseLeave={() => setShowMenu(null)}
                >
                  <Link to="/board/notice" className="block px-4 py-2 hover:bg-gray-100">
                    공지사항
                  </Link>
                  <Link to="/board/news" className="block px-4 py-2 hover:bg-gray-100">
                    교육원소식
                  </Link>
                  <Link to="/board/press" className="block px-4 py-2 hover:bg-gray-100">
                    언론보도자료
                  </Link>
                  <Link to="/board/qualification" className="block px-4 py-2 hover:bg-gray-100">
                    민간자격정보
                  </Link>
                  <Link to="/board/parking" className="block px-4 py-2 hover:bg-gray-100">
                    주차안내
                  </Link>
                </div>
              )}
            </div>

            {/* 열린마당 */}
            <div 
              className="relative" 
              onMouseEnter={() => setShowMenu('open')} 
              onMouseLeave={() => setShowMenu(null)}
            >
              <span className="hover:text-blue-600 cursor-pointer">열린마당</span>
              {showMenu === 'open' && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50"
                  onMouseEnter={() => setShowMenu('open')}
                  onMouseLeave={() => setShowMenu(null)}
                >
                  <Link to="/board/inquiry" className="block px-4 py-2 hover:bg-gray-100">
                    상담실
                  </Link>
                  <Link to="/board/student" className="block px-4 py-2 hover:bg-gray-100">
                    학습자게시판
                  </Link>
                  <Link to="/board/review" className="block px-4 py-2 hover:bg-gray-100">
                    수강후기 및 사진
                  </Link>
                  <Link to="/board/material" className="block px-4 py-2 hover:bg-gray-100">
                    학습자료게시판
                  </Link>
                  <Link to="/board/archive" className="block px-4 py-2 hover:bg-gray-100">
                    자료실
                  </Link>
                  <Link to="/board/club" className="block px-4 py-2 hover:bg-gray-100">
                    동아리
                  </Link>
                  <Link to="/board/facility-rental" className="block px-4 py-2 hover:bg-gray-100">
                    공간 및 시설 대여
                  </Link>
                  <Link to="/board/faq" className="block px-4 py-2 hover:bg-gray-100">
                    자주묻는질문
                  </Link>
                </div>
              )}
            </div>

            {user ? (
              <>
                {user.role === 'admin' && (
                  <Link to="/admin" className="text-red-600 hover:text-red-700 font-semibold">
                    관리자
                  </Link>
                )}
                {user.role === 'instructor' && (
                  <Link to="/instructor" className="text-green-600 hover:text-green-700 font-semibold">
                    강사
                  </Link>
                )}
                <Link to="/mypage" className="hover:text-blue-600">
                  마이페이지
                </Link>
                <span className="text-gray-600">{user.name}님</span>
                <button onClick={handleLogout} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
                  로그아웃
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="hover:text-blue-600">
                  로그인
                </Link>
                <Link to="/register" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                  회원가입
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
