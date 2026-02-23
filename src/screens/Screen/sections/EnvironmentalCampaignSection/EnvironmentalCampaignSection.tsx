import { XIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";

export const EnvironmentalCampaignSection = (): JSX.Element => {
  return (
    <header className="relative w-full h-[57px] border-b border-gray-100">
      <div className="flex items-center justify-between h-full px-5">
        <Button
          variant="ghost"
          size="icon"
          className="w-6 h-6 p-0 hover:bg-transparent"
          aria-label="Close"
        >
          <XIcon className="w-6 h-6 text-gray-600" />
        </Button>

        <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 [font-family:'Noto_Sans_KR',Helvetica] font-bold text-gray-900 text-lg leading-7 whitespace-nowrap">
          붉은 로즈 초콜릿
        </h1>
      </div>
    </header>
  );
};
