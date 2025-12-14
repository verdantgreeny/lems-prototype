import { useState } from 'react';

const faqs = [
  {
    question: '수강 신청은 어떻게 하나요?',
    answer: '강좌 상세 페이지에서 "수강 신청하기" 버튼을 클릭하여 신청할 수 있습니다. 로그인이 필요합니다.',
  },
  {
    question: '결제 방법은 무엇인가요?',
    answer: '계좌이체, 카드결제(사무실 방문), 평생교육이용권(바우처카드) 중 선택할 수 있습니다.',
  },
  {
    question: '할인 혜택을 받으려면 어떻게 해야 하나요?',
    answer:
      '할인 대상에 해당하는 증빙자료를 제출하시면 할인 혜택을 받으실 수 있습니다. 수강 신청 시 할인 유형을 선택하세요.',
  },
  {
    question: '수강 취소 및 환불은 어떻게 하나요?',
    answer: '수강 취소 및 환불은 평생교육원 사무실로 문의해주세요. 환불 기준에 따라 처리됩니다.',
  },
  {
    question: '강좌 일정은 어디서 확인할 수 있나요?',
    answer: '강좌 상세 페이지에서 강의 일정을 확인할 수 있습니다. 각 강좌마다 요일과 시간이 명시되어 있습니다.',
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">자주 묻는 질문 (FAQ)</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50"
            >
              <span className="font-semibold">{faq.question}</span>
              <span className="text-gray-400">{openIndex === index ? '▲' : '▼'}</span>
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 border-t bg-gray-50">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
