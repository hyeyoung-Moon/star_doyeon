import { CoffeeSummarySection } from "./sections/CoffeeSummarySection";
import { CupSelectionSection } from "./sections/CupSelectionSection";
import { EnvironmentalCampaignSection } from "./sections/EnvironmentalCampaignSection";
import { PersonalOptionsSection } from "./sections/PersonalOptionsSection/PersonalOptionsSection";
import { QuantityAndOrderSection } from "./sections/QuantityAndOrderSection";

export const Screen = (): JSX.Element => {
  return (
    <div className="bg-white overflow-x-hidden w-full min-w-[390px] flex flex-col">
      <EnvironmentalCampaignSection />
      <PersonalOptionsSection />
      <CupSelectionSection />
      <QuantityAndOrderSection />
      <CoffeeSummarySection />
    </div>
  );
};
