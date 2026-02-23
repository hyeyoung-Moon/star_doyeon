import { ChevronRightIcon, ChevronUpIcon } from "lucide-react";
import { Card, CardContent } from "../../../../components/ui/card";

const infoItems = [
  "· 스타벅스 카드로 결제하면 퍼스널 옵션 추가 금액을 할인 받을 수 있어요.",
  "· 설정한 퍼스널 옵션이 정량을 초과하는 경우 기본 레시피대로 제공해 드려요.",
];

export const QuantityAndOrderSection = (): JSX.Element => {
  return (
    <section className="border-t border-gray-100 py-4 px-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="[font-family:'Noto_Sans_KR',Helvetica] font-bold text-gray-900 text-lg">
          퍼스널 옵션
        </h2>
        <button className="text-gray-400" aria-label="Collapse section">
          <ChevronUpIcon className="w-6 h-6" />
        </button>
      </div>

      <Card className="bg-[#f9f9f9] border-0 rounded-xl mb-4">
        <CardContent className="p-4 space-y-2">
          {infoItems.map((item, index) => (
            <p
              key={index}
              className="[font-family:'Noto_Sans_KR',Helvetica] font-normal text-gray-500 text-xs leading-[19.5px]"
            >
              {item}
            </p>
          ))}
        </CardContent>
      </Card>

      <div className="border-t border-gray-50 pt-4">
        <button className="flex items-center justify-between w-full">
          <span className="[font-family:'Noto_Sans_KR',Helvetica] font-medium text-gray-900 text-base">
            커피
          </span>
          <ChevronRightIcon className="w-6 h-6 text-gray-400" />
        </button>
      </div>
    </section>
  );
};
