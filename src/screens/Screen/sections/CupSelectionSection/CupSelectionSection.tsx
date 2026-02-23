import { CarIcon, LeafIcon } from "lucide-react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Label } from "../../../../components/ui/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "../../../../components/ui/radio-group";

export const CupSelectionSection = (): JSX.Element => {
  const cupOptions = [
    {
      id: "personal-cup",
      label: "개인컵 사용하기",
      icon: <LeafIcon className="w-5 h-5 text-[#006241]" />,
      description: null,
      details: null,
    },
    {
      id: "larger-cup",
      label: "한 사이즈 큰 컵에 음료 받기",
      icon: <CarIcon className="w-6 h-6 text-[#006241]" />,
      description:
        "차량 픽업 시 한 사이즈 큰 컵에 음료를 준비해드릴 수 있습니다.",
      details: [
        "• 음료 양은 정량으로 제공되며, 컵만 한 사이즈 업그레이드 됩니다.",
        "• Venti 사이즈는 업그레이드가 불가합니다.",
      ],
    },
  ];

  return (
    <section className="flex flex-col gap-3 px-5">
      <header>
        <h2 className="[font-family:'Noto_Sans_KR',Helvetica] font-bold text-gray-800 text-sm tracking-[0] leading-5">
          환경을 위해 친환경 캠페인에 동참해 보세요.
        </h2>
      </header>

      <RadioGroup defaultValue="larger-cup" className="flex flex-col gap-3">
        {cupOptions.map((option) => (
          <Card
            key={option.id}
            className="bg-[#e8f5f0] border-none rounded-xl shadow-none"
          >
            <CardContent className="p-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3 flex-1">
                  <RadioGroupItem
                    value={option.id}
                    id={option.id}
                    className="mt-0.5 w-5 h-5 bg-white border-gray-300 data-[state=checked]:bg-[#006241] data-[state=checked]:border-[#006241]"
                  />
                  <div className="flex-1">
                    <Label
                      htmlFor={option.id}
                      className="[font-family:'Noto_Sans_KR',Helvetica] font-bold text-gray-800 text-sm tracking-[0] leading-5 cursor-pointer"
                    >
                      {option.label}
                    </Label>
                    {option.description && (
                      <div className="mt-3 flex flex-col gap-2">
                        <p className="[font-family:'Noto_Sans_KR',Helvetica] font-bold text-gray-800 text-[13px] tracking-[0] leading-[16.2px]">
                          {option.description}
                        </p>
                        {option.details && (
                          <div className="[font-family:'Noto_Sans_KR',Helvetica] font-normal text-gray-500 text-[11px] tracking-[0] leading-[16.5px]">
                            {option.details.map((detail, index) => (
                              <p key={index}>{detail}</p>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-[0px_1px_2px_#0000000d] flex-shrink-0">
                  {option.icon}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </RadioGroup>

      <footer className="bg-gray-100 rounded-lg p-2">
        <p className="[font-family:'Noto_Sans_KR',Helvetica] font-normal text-gray-500 text-[11px] text-center leading-[16.5px] tracking-[0]">
          · 주문하신 메뉴는 일회용컵에 제공됩니다.
        </p>
      </footer>
    </section>
  );
};
