"use client";

import { useState } from "react";
import { ProjectCard } from "@/components";
import { projectsContents } from "@/constants";

export function Projects() {
  const [active, setActive] = useState("2");
  return (
    <div id="_projects" className="bg-[#cfdee9]">
      <div
        className={`mx-auto flex flex-col max-w-4xl pt-16 px-4 sm:pt-16 sm:px-6 lg:max-w-7xl lg:px-8 `}
      >
        <h2 className="text-5xl font-bold">Projects</h2>
        <hr className={`h-[2px] my-8 bg-white border-0 dark:bg-white`} />
        <div className>
          {/* <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"> */}
          <div
            className={`grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 `}
          >
            {projectsContents.map((project) => (
              <ProjectCard
                key={project.id}
                tag={project.toolLanguages}
                {...project}
              />
            ))}
          </div>
        </div>
        <hr className={`h-[2px] my-8 bg-white border-0 dark:bg-white`} />
      </div>
    </div>
  );
}
