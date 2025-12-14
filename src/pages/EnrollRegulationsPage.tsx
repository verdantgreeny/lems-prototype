export default function EnrollRegulationsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">운영규정</h1>
      <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">수강 신청</h2>
          <ul className="space-y-2 text-gray-700">
            <li>• 수강 신청은 온라인으로 진행됩니다.</li>
            <li>• 수강 신청 기간 내에 신청 및 결제를 완료해야 합니다.</li>
            <li>• 신청자 이름으로 입금해야 하며, 불일치 시 확인이 불가능합니다.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">결제 방법</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">1. 계좌입금</h3>
              <p className="text-gray-700">신한은행 100-036-941482 중원대학교</p>
              <ul className="mt-2 space-y-1 text-sm text-gray-600">
                <li>• 신청자 이름으로 입금하기 (불일치시 확인불가)</li>
                <li>• 수강 신청 기간 내 입금 바랍니다</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">2. 카드결제</h3>
              <p className="text-gray-700">평생교육원 사무실 방문 (중원대학교(구)스포츠센터 내)</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">3. 평생교육이용권(바우처카드)</h3>
              <p className="text-gray-700">해당 바우처카드를 소지한 경우 이용 가능</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">할인 혜택</h2>
          <ul className="space-y-2 text-gray-700">
            <li>• 할인 대상자는 관련 증빙자료를 제출해야 합니다.</li>
            <li>• 할인 혜택은 중복 적용되지 않습니다.</li>
            <li>• 여러 과정 수강 시 할인 금액이 높은 1개 과목만 할인됩니다.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">수강 취소 및 환불</h2>
          <ul className="space-y-2 text-gray-700">
            <li>• 수강 취소는 개강 전까지 가능합니다.</li>
            <li>• 환불은 평생교육원 사무실로 문의해주세요.</li>
            <li>• 환불 기준은 평생교육원 운영규정에 따릅니다.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">기타 안내</h2>
          <ul className="space-y-2 text-gray-700">
            <li>• 정기휴장: 매주 월요일 (실내수영장, 샤워장, 스포츠센터, 실외골프실습장)</li>
            <li>• 강좌 일정은 주 2회(월 8회) 기준입니다.</li>
            <li>• 문의: 평생교육원 사무실 043-830-8232, 8233, 8235</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
