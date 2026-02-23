import { CoffeeIcon } from "lucide-react";
import { useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const cupSizes = [
  {
    id: "tall",
    name: "Tall",
    volume: "355ml",
    iconSize: "text-3xl",
  },
  {
    id: "grande",
    name: "Grande",
    volume: "473ml",
    iconSize: "text-3xl",
  },
  {
    id: "venti",
    name: "Venti",
    volume: "591ml",
    iconSize: "text-4xl",
  },
];

export const PersonalOptionsSection = (): JSX.Element => {
  const [selectedSize, setSelectedSize] = useState("grande");

  return (
    <section className="flex flex-col gap-4 px-5 py-5">
      <h2 className="[font-family:'Noto_Sans_KR',Helvetica] font-bold text-gray-900 text-lg leading-7">
        컵 선택
      </h2>

      <div className="flex gap-3">
        {cupSizes.map((cup) => {
          const isSelected = selectedSize === cup.id;
          return (
            <Card
              key={cup.id}
              className={`flex-1 cursor-pointer transition-all ${
                isSelected
                  ? "border-2 border-[#006241] bg-white shadow-[0px_4px_12px_#0000000d]"
                  : "border border-gray-300"
              }`}
              onClick={() => setSelectedSize(cup.id)}
            >
              <CardContent className="flex flex-col items-center justify-center p-4 gap-1">
                <div className="relative h-11 flex items-center justify-center">
                  <CoffeeIcon
                    className={`${cup.iconSize} ${
                      isSelected ? "text-[#006241]" : "text-gray-400"
                    }`}
                  />
                  {isSelected && (
                    <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-[#006241] rounded-full" />
                  )}
                </div>
                <div
                  className={`[font-family:'Noto_Sans_KR',Helvetica] text-sm text-center leading-5 ${
                    isSelected
                      ? "font-bold text-[#006241]"
                      : "font-medium text-gray-900"
                  }`}
                >
                  {cup.name}
                </div>
                <div
                  className={`[font-family:'Noto_Sans_KR',Helvetica] font-normal text-xs text-center leading-4 ${
                    isSelected ? "text-[#006241]" : "text-gray-500"
                  }`}
                >
                  {cup.volume}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
