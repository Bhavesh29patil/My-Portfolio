"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { educationData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { useInView } from "react-intersection-observer";

export default function Education() {
  // const { ref } = useSectionInView("Education");
  const { theme } = useTheme();
  const { ref, inView } = useInView({ threshold: 0 });
  return (
    <section id="education" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Edcucational Journey</SectionHeading>
      <VerticalTimeline lineColor="">
        {educationData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={inView}
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: theme === "light" ? "white" : "white",
                fontSize: "1.5rem",
                color: "black",
              }}
            >
              <h3 className="dark:text-white text-[23px] font-semibold">
                {item.title}
              </h3>
              <p className="font-normal mt-4">{item.body}</p>
              <p className="text-gray-700 dark:text-white/75">
                {item.description}
              </p>
              <ul className="list-disc ml-4 space-y-2">
                {item.points.map((point, index) => (
                  <li
                    key={`education-point ${index}`}
                    className="text-white-100 text-[16px] pl-1 tracking-wider"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
