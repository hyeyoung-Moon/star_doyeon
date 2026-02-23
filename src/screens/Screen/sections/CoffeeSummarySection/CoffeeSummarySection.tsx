import { HeartIcon, MinusIcon, PlusIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";

export const CoffeeSummarySection = (): JSX.Element => {
  return (
    <div className="relative w-full bg-white border-t border-gray-100 shadow-[0px_4px_12px_#0000000d] px-4 py-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3.5">
          <Button
            variant="outline"
            size="icon"
            className="w-8 h-8 rounded-2xl border-gray-300"
          >
            <MinusIcon className="w-[18px] h-[18px] text-gray-400" />
          </Button>

          <span className="[font-family:'Noto_Sans_KR',Helvetica] font-bold text-gray-900 text-lg leading-7">
            1
          </span>

          <Button
            variant="outline"
            size="icon"
            className="w-8 h-8 rounded-2xl border-gray-300"
          >
            <PlusIcon className="w-[18px] h-[18px] text-gray-400" />
          </Button>
        </div>

        <div className="[font-family:'Noto_Sans_KR',Helvetica] font-bold text-gray-900 text-xl leading-7">
          7,300원
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          className="w-6 h-6 p-0 hover:bg-transparent"
        >
          <HeartIcon className="w-6 h-6 text-gray-400" />
        </Button>

        <Button
          variant="outline"
          className="flex-1 h-14 rounded-[28px] border-[#006241] bg-white hover:bg-gray-50 [font-family:'Noto_Sans_KR',Helvetica] font-bold text-[#006241] text-base"
        >
          담기
        </Button>

        <Button className="flex-1 h-14 rounded-[28px] bg-[#006241] hover:bg-[#005236] [font-family:'Noto_Sans_KR',Helvetica] font-bold text-white text-base">
          주문하기
        </Button>
      </div>
    </div>
  );
};
