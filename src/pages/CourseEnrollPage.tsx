import { useState } from 'react';
import { useParams, useNavigate, Link, Navigate } from 'react-router-dom';
import { storage, getCurrentUser } from '../utils/storage';
import type { Course, Enrollment } from '../types';

export default function CourseEnrollPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const user = getCurrentUser();
  const courses = storage.get<Course[]>('courses', []);
  const course = courses.find((c) => c.id === id);

  const [formData, setFormData] = useState({
    name: user?.name || '',
    courseOption: '',
    isFirstTime: '',
    gender: '',
    paymentMethod: 'account' as 'account' | 'card' | 'voucher',
    discountType: '일반인',
    tuitionFee: '',
    phone: user?.phone || '',
    vehicleNumber: '',
    residentNumber: '',
    age: '',
    cashReceiptNumber: '',
    cashReceiptType: 'phone' as 'phone' | 'business',
    privacyAgree: false,
    riseAgree: false,
  });

  if (!course || !user) {
    return <Navigate to="/courses" replace />;
  }

  // 강좌 옵션 생성
  const getCourseOptions = () => {
    if (course.category === '수영 및 수중운동') {
      return [
        `수영초급1(화,목) 오전 10시-${course.instructor}`,
        `수영초급2(화,목) 저녁 7시-${course.instructor}`,
        `수영중급(수,금) 저녁 7시-${course.instructor}`,
        `수영고급(화,목) 저녁 7시-${course.instructor}`,
      ];
    }
    return [course.name];
  };

  // 할인 금액 계산
  const calculateDiscount = (discountType: string) => {
    const baseFee = course.fee;
    if (course.category === '수영 및 수중운동') {
      switch (discountType) {
        case '00대 재학생':
        case '교직원':
        case '재단관계자':
          return 75000;
        case '00대 재학생 가족':
        case '교직원 가족':
        case '00대 졸업생 본인(학부,대학원)':
        case '괴산, 음성, 진천 군민':
          return 110000;
        case '괴산사이버군민':
        case '학생군사학교':
          return 130000;
        case '취약계층(만65세이상, 1960년생 부터)':
        case '취약계층(기초생활수급대상자, 다문화가정, 장애인)':
          return 70000;
        default:
          return baseFee;
      }
    } else {
      // 기타 교육과정
      if (discountType.includes('재학생') || discountType.includes('교직원')) {
        return Math.floor(baseFee * 0.5);
      }
      if (discountType.includes('졸업생') || discountType.includes('학생군사학교')) {
        return Math.floor(baseFee * 0.8);
      }
      return baseFee;
    }
  };

  const handleDiscountChange = (discountType: string) => {
    const discounted = calculateDiscount(discountType);
    setFormData({
      ...formData,
      discountType,
      tuitionFee: discounted.toString(),
    });
  };

  const discountOptions =
    course.category === '수영 및 수중운동'
      ? [
          '일반인 - 150,000원',
          '괴산사이버군민 - 130,000원',
          '학생군사학교 - 130,000원',
          '00대 재학생 가족, 교직원 가족 - 110,000원',
          '00대 졸업생 본인(학부,대학원) - 110,000원',
          '괴산, 음성, 진천 군민 - 110,000원',
          '00대 재학생 - 75,000원',
          '재단관계자 - 75,000원',
          '교직원 - 75,000원',
          '취약계층(만65세이상, 1960년생 부터) - 70,000원',
          '취약계층(기초생활수급대상자, 다문화가정, 장애인) - 70,000원',
        ]
      : [
          '일반인',
          '00대 재학생/교직원 본인 (50% 할인)',
          '00대 재학생/교직원 가족 (50% 할인)',
          '00대 졸업생 본인 (20% 할인)',
          '학생군사학교 직원 본인 (20% 할인)',
        ];

  const tuitionFeeOptions =
    course.category === '수영 및 수중운동'
      ? ['150,000원', '130,000원', '110,000원', '75,000원', '70,000원']
      : ['150,000원', '120,000원', '100,000원', '75,000원'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const enrollments = storage.get<Enrollment[]>('enrollments', []);
    const finalFee = parseInt(formData.tuitionFee.replace(/,/g, '').replace('원', ''));

    const newEnrollment: Enrollment = {
      id: `enroll${Date.now()}`,
      userId: user.id,
      courseId: course.id,
      courseName: course.name,
      month: course.month,
      status: 'pending',
      paymentMethod: formData.paymentMethod,
      paymentStatus: 'unpaid',
      fee: course.fee,
      discountedFee: finalFee,
      discountType: formData.discountType,
      enrollmentDate: new Date().toISOString().split('T')[0],
    };

    enrollments.push(newEnrollment);
    storage.set('enrollments', enrollments);

    const updatedCourses = courses.map((c) =>
      c.id === course.id ? { ...c, currentStudents: c.currentStudents + 1 } : c
    );
    storage.set('courses', updatedCourses);

    navigate(`/courses/${course.id}/enroll/complete`);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
        <p className="text-sm text-yellow-800">
          <strong>
            2025년 00대학교 평생교육원 "{course.month} {course.name}" 수강 신청서입니다.
          </strong>
        </p>
        {course.category === '수영 및 수중운동' && (
          <p className="text-sm text-yellow-800 mt-2">
            10월부터 수영 강좌 금액이 1만원 인상이 되었습니다. 정확한 금액 확인 후 입금 부탁드립니다.
          </p>
        )}
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
        <div className="space-y-6">
          {/* 성명 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              성명 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* 신청과정 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              신청과정 <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.courseOption}
              onChange={(e) => setFormData({ ...formData, courseOption: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">선택하세요</option>
              {getCourseOptions().map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* 이번 달에 처음 수강 하시나요? */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              이번 달에 처음 수강 하시나요? <span className="text-red-500">*</span>
            </label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="isFirstTime"
                  value="yes"
                  checked={formData.isFirstTime === 'yes'}
                  onChange={(e) => setFormData({ ...formData, isFirstTime: e.target.value })}
                  className="mr-2"
                  required
                />
                <span>네(이번 달에 처음 신청합니다)</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="isFirstTime"
                  value="no"
                  checked={formData.isFirstTime === 'no'}
                  onChange={(e) => setFormData({ ...formData, isFirstTime: e.target.value })}
                  className="mr-2"
                />
                <span>아니요(계속 다니고 있습니다)</span>
              </label>
            </div>
          </div>

          {/* 성별 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              성별 <span className="text-red-500">*</span>
            </label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === 'male'}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                  className="mr-2"
                  required
                />
                <span>남</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === 'female'}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                  className="mr-2"
                />
                <span>여</span>
              </label>
            </div>
          </div>

          {/* 결제방법 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              결제방법 <span className="text-red-500">*</span>
            </label>
            <div className="bg-gray-50 p-3 rounded-lg mb-3 text-sm text-gray-600">
              <p>• 계좌송금: 신한은행 100-036-941482 00대학교(신청인 2명이면 2명 이름 모두 기재요망)</p>
              <p>• 카드결제: 평생교육원 사무실</p>
            </div>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="account"
                  checked={formData.paymentMethod === 'account'}
                  onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value as any })}
                  className="mr-2"
                  required
                />
                <span>계좌이체</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  checked={formData.paymentMethod === 'card'}
                  onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value as any })}
                  className="mr-2"
                />
                <span>카드결제</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="voucher"
                  checked={formData.paymentMethod === 'voucher'}
                  onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value as any })}
                  className="mr-2"
                />
                <span>평생교육이용권(바우처카드)</span>
              </label>
            </div>
          </div>

          {/* 수강료 할인 내용 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              수강료 할인 내용 <span className="text-red-500">*</span>
            </label>
            <p className="text-xs text-gray-500 mb-2">(각 할인 요건에 대한 증빙자료 제출 필수)</p>
            <select
              value={formData.discountType}
              onChange={(e) => handleDiscountChange(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            >
              {discountOptions.map((option) => (
                <option key={option} value={option.split(' - ')[0]}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* 수강료 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              수강료 <span className="text-red-500">*</span>
            </label>
            <p className="text-xs text-gray-500 mb-2">(1개월 기준, 수강료 할인내용 확인 후 선택)</p>
            <select
              value={formData.tuitionFee}
              onChange={(e) => setFormData({ ...formData, tuitionFee: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">선택하세요</option>
              {tuitionFeeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* 연락처 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              연락처 (예: 010-xxxx-xxxx) <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="010-1234-5678"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* 차량번호 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">차량번호</label>
            <p className="text-xs text-gray-500 mb-2">
              - 띄어쓰기 없이 전체 번호 기재
              <br />- 주차요금 할인용
            </p>
            <input
              type="text"
              value={formData.vehicleNumber}
              onChange={(e) => setFormData({ ...formData, vehicleNumber: e.target.value })}
              placeholder="12가3456"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* 주민번호 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              주민번호(예:801010-1) <span className="text-red-500">*</span>
            </label>
            <p className="text-xs text-gray-500 mb-2">
              주민번호와 주민등록등본 확인을 위해서 필요합니다. 이외의 목적으로는 사용하지 않습니다.
            </p>
            <input
              type="text"
              value={formData.residentNumber}
              onChange={(e) => setFormData({ ...formData, residentNumber: e.target.value })}
              placeholder="801010-1"
              pattern="[0-9]{6}-[0-9]{1}"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* 연령 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              연령 <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">선택하세요</option>
              <option value="20대">20대</option>
              <option value="30대">30대</option>
              <option value="40대">40대</option>
              <option value="50대">50대</option>
              <option value="60대">60대</option>
              <option value="70대">70대</option>
              <option value="80대">80대</option>
              <option value="90대">90대</option>
              <option value="기타">기타</option>
            </select>
          </div>

          {/* 현금영수증 신청 번호 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              현금영수증 신청 번호(휴대폰 또는 사업자 번호)
            </label>
            <div className="flex gap-4">
              <select
                value={formData.cashReceiptType}
                onChange={(e) => setFormData({ ...formData, cashReceiptType: e.target.value as any })}
                className="px-4 py-2 border border-gray-300 rounded-lg"
              >
                <option value="phone">휴대폰 번호</option>
                <option value="business">사업자 번호</option>
              </select>
              <input
                type="text"
                value={formData.cashReceiptNumber}
                onChange={(e) => setFormData({ ...formData, cashReceiptNumber: e.target.value })}
                placeholder={formData.cashReceiptType === 'phone' ? '010-1234-5678' : '123-45-67890'}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* 개인정보 수집 및 이용 동의 */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <label className="flex items-start">
              <input
                type="checkbox"
                checked={formData.privacyAgree}
                onChange={(e) => setFormData({ ...formData, privacyAgree: e.target.checked })}
                className="mt-1 mr-3"
                required
              />
              <div className="flex-1">
                <span className="font-medium">
                  본 신청서를 위한 개인정보의 수집 및 이용에 동의합니다. <span className="text-red-500">*</span>
                </span>
                <p className="text-sm text-gray-600 mt-1">
                  - 평생교육원 교육 및 기타 안내 사항 전달 목적으로만 활용합니다.
                  <br />- 개인정보 수집 및 이용에 동의하지 않을 권리가 있으며, 동의를 거부할 경우에는 평생교육원 수강
                  신청이 불가능합니다.
                </p>
              </div>
            </label>
          </div>

          {/* RISE 프로그램 동의 */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <label className="flex items-start">
              <input
                type="checkbox"
                checked={formData.riseAgree}
                onChange={(e) => setFormData({ ...formData, riseAgree: e.target.checked })}
                className="mt-1 mr-3"
                required
              />
              <div className="flex-1">
                <span className="font-medium">
                  00대학교 평생교육원에서 진행되는 프로그램은 충청북도 지역혁신중심대학체계 [RISE 3-2-1] 평생학습대학
                  "오세유"프로그램과 함께합니다. 참여에 동의합니다. <span className="text-red-500">*</span>
                </span>
                <p className="text-sm text-gray-600 mt-1">
                  - 평생교육원 RISE사업 목적으로만 활용합니다.
                  <br />- 개인정보 수집 및 이용에 동의하지 않을 권리가 있으며, 동의를 거부할 경우에는 평생교육원 수강
                  신청이 불가능합니다.
                </p>
              </div>
            </label>
          </div>

          {/* 안내사항 */}
          {course.category === '수영 및 수중운동' && (
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">증빙자료 안내</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 만65세이상(괴산주민) - 주민등록등본</li>
                <li>• 괴산,음성,진천 군민 - 주민등록증 or 주민등록등본</li>
                <li>• 괴산사이버군민 - 괴산군민증</li>
                <li>• 기초생활수급대상자 - 기초수급대상 확인서</li>
                <li>• 다문화가정 - 가족관계증명서 or 주민등록등본</li>
                <li>• 장애인 - 복지카드 or 장애인증명서</li>
              </ul>
            </div>
          )}

          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">안내사항</h3>
            <ul className="text-sm text-yellow-800 space-y-1">
              <li>1. 강좌일: 주2회(월8회)</li>
              <li>2. 강의장소: {course.location}</li>
              <li>3. 정기휴장: 매주 월요일(실내수영장, 샤워장, 스포츠센터, 실외골프실습장)</li>
              <li>4. 카드결제: 평생교육원 사무실</li>
              <li>5. 입금계좌: 신한은행 100-036-941482 00대학교</li>
            </ul>
            <p className="text-sm text-yellow-800 mt-2">문의: 평생교육원 사무실 043-830-8232, 8233, 8235</p>
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
            >
              신청하기
            </button>
            <Link
              to={`/courses/${course.id}`}
              className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300"
            >
              취소
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
