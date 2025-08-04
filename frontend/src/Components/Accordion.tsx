// File: components/AccordionFaq.tsx (suggested name)

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../Components/ui/accordion"; // ✅ lowercased and accurate

export default function AccordionFaq() {
  return (
    <div className="px-[176px] py-[36px]">
      <h1 className="font-bold text-[32px] leading-[40px] mb-4">
        Frequently Asked Questions
      </h1>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
