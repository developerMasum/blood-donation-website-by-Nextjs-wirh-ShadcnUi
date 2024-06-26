import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HeartPulse } from "lucide-react";
import assets from "@/assets";
import Image from "next/image";
const AccordionQues = () => {
  return (
    <main>
      <p className="text-3xl text-red-700 font-bold text-center  uppercase mt-12 mb-4">
        #Commonly Asked Questions
      </p>
      <p  className="text-slate-600 text-start px-5 md:lg:px-0 md:lg:text-center font-semibold">
        Frequently asked questions by blood donors and blood requesters
        encompass inquiries regarding eligibility criteria, procedural <br />
        aspects, safety measures, and pertinent information crucial for both
        donating and receiving blood transfusions, facilitating <br /> informed
        decision-making and ensuring optimal healthcare outcomes.
      </p>
      <div className="flex flex-wrap gap-24 justify-center items-center content-center w-full mt-16 px-5 md:lg:px-0">
        <div>
          <Image
            src={assets.images.donorImg}
            alt="donor"
            width={500}
            height={500}
          />
        </div>
        <div className=" w-full md:lg:w-1/2">
          <div className="mb-5">
            <Accordion type="single" collapsible className="w-full">
              <div className="flex  justify-start items-center gap-5">
                <div className="bg-red-600 p-2 rounded-full">
                  <HeartPulse color="white" size={40} />
                </div>
                <div>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Who can donate blood?</AccordionTrigger>
                    <AccordionContent>
                      Generally, anyone in good health, at least 17 years old
                      (or 16 with parental consent in some areas), and weighing
                      at least 110 pounds (50 kg) can donate. Specific
                      eligibility criteria can vary by location and blood bank.
                    </AccordionContent>
                  </AccordionItem>
                </div>
              </div>
            </Accordion>
          </div>
          <div className="mb-5">
            <Accordion type="single" collapsible className="w-full">
              <div className="flex  justify-start items-center gap-5">
                <div className="bg-red-600 p-2 rounded-full">
                  <HeartPulse color="white" size={40} />
                </div>
                <div>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      Are there any medical conditions that prevent someone from
                      donating blood?
                    </AccordionTrigger>
                    <AccordionContent>
                      Yes, conditions like HIV, hepatitis, certain heart
                      diseases, and others may prevent someone from donating.
                      Recent tattoos or piercings, certain medications, and
                      travel to certain countries can also be temporary
                      barriers.
                    </AccordionContent>
                  </AccordionItem>
                </div>
              </div>
            </Accordion>
          </div>
          <div className="mb-5">
            <Accordion type="single" collapsible className="w-full">
              <div className="flex  justify-start items-center gap-5">
                <div className="bg-red-600 p-2 rounded-full">
                  <HeartPulse color="white" size={40} />
                </div>
                <div>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      How long does the blood donation process take? Does it
                      hurt?
                    </AccordionTrigger>
                    <AccordionContent>
                      The entire process, including registration, medical
                      history review, donation, and refreshments, usually takes
                      about an hour. The actual blood donation takes about 10
                      minutes.You might feel a brief sting when the needle is
                      inserted, but most donors feel fine during and after the
                      donation.
                    </AccordionContent>
                  </AccordionItem>
                </div>
              </div>
            </Accordion>
          </div>
          <div className="mb-5">
            <Accordion type="single" collapsible className="w-full">
              <div className="flex  justify-start items-center gap-5">
                <div className="bg-red-600 p-2 rounded-full">
                  <HeartPulse color="white" size={40} />
                </div>
                <div>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      How much blood is taken during a donation?
                    </AccordionTrigger>
                    <AccordionContent>
                      Typically, about one pint (450 ml) of blood is taken
                      during a donation.
                    </AccordionContent>
                  </AccordionItem>
                </div>
              </div>
            </Accordion>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AccordionQues;
