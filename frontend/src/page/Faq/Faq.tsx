import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../Components/ui/accordion";

import Footer from "../../Components/Footer";

export function AccordionDemo() {
  return (
    <div className="px-[176px] my-[46px]">
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
      >
        <h1 className="font-bold text-[32px] leading-[40px]">
          Frequently Asked Questions
        </h1>

        <div className="mt-[30px]">
          <div className="border px-[15px] rounded-[10px]">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                What types of vintage cars do you offer?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  Our flagship product combines cutting-edge technology with
                  sleek design. Built with premium materials, it offers
                  unparalleled performance and reliability.
                </p>
                <p>
                  Key features include advanced processing capabilities, and an
                  intuitive user interface designed for both beginners and
                  experts.
                </p>
              </AccordionContent>
            </AccordionItem>
          </div>

          <div className="border px-[15px] rounded-[10px] my-[20px]">
            <AccordionItem value="item-2">
              <AccordionTrigger>
                How does the rental process work?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  We offer worldwide shipping through trusted courier partners.
                  Standard delivery takes 3-5 business days, while express
                  shipping ensures delivery within 1-2 business days.
                </p>
                <p>
                  All orders are carefully packaged and fully insured. Track
                  your shipment in real-time through our dedicated tracking
                  portal.
                </p>
              </AccordionContent>
            </AccordionItem>
          </div>

          <div className="border px-[15px] rounded-[10px] my-[20px]">
            <AccordionItem value="item-3">
              <AccordionTrigger>
                What is included in the rental price?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  We stand behind our products with a comprehensive 30-day
                  return policy. If you&apos;re not completely satisfied, simply
                  return the item in its original condition.
                </p>
                <p>
                  Our hassle-free return process includes free return shipping
                  and full refunds processed within 48 hours of receiving the
                  returned item.
                </p>
              </AccordionContent>
            </AccordionItem>
          </div>

          <div className="border px-[15px] rounded-[10px] my-[20px]">
            <AccordionItem value="item-3">
              <AccordionTrigger>
                What are the insurance options?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  We stand behind our products with a comprehensive 30-day
                  return policy. If you&apos;re not completely satisfied, simply
                  return the item in its original condition.
                </p>
                <p>
                  Our hassle-free return process includes free return shipping
                  and full refunds processed within 48 hours of receiving the
                  returned item.
                </p>
              </AccordionContent>
            </AccordionItem>
          </div>

          <div className="border px-[15px] rounded-[10px] my-[20px]">
            <AccordionItem value="item-3">
              <AccordionTrigger>
                What happens if the car breaks down?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  We stand behind our products with a comprehensive 30-day
                  return policy. If you&apos;re not completely satisfied, simply
                  return the item in its original condition.
                </p>
                <p>
                  Our hassle-free return process includes free return shipping
                  and full refunds processed within 48 hours of receiving the
                  returned item.
                </p>
              </AccordionContent>
            </AccordionItem>
          </div>
        </div>
      </Accordion>

      <Footer />
    </div>
  );
}
