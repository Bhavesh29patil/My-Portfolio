"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      I&apos;m eager to embark on my journey in the Tech Industry. As a Fresher, I
        bring a fresh perspective and a hunger for learning new technologies to
        every project I undertake.
      </p>

      <p>
        <span className="font-medium">Problem-Solving</span> is what drives me
        forward each day. Whether it&apos;s tackling coding challenges, debugging
        complex issues, or finding innovative solutions to problems, I regularly
        practice on platforms like
        <span className="font-semibold">
          {" "}
          Leetcode, GeeksforGeeks, Codechef
        </span>{" "}
        , and others to sharpen my algorithmic thinking.
      </p>
    </motion.section>
  );
}
