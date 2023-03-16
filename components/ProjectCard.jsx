"use client";

import { Tag } from "../components";

export function ProjectCard({
  image,

  id,
  title,
  demoUrl,
  githubUrl,
  description,
  tag,
}) {
  return (
    <div className="project-card bg-stone-50/50 rounded-lg p-2 flex flex-col hover:scale-105">
      <a key={id} href={demoUrl} className="group">
        <div className="h-[200px] w-full overflow-hidden bg-gray-200">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover rounded-sm object-center group-hover:opacity-75"
          />
        </div>
      </a>
      <div className="project-info">
        <div className="flex flex-col justify-between items-baseline">
          <h3 className="py-4 text-lg whitespace-nowrap font-semibold text-gray-800 self-center">
            {title}
          </h3>
          <div className="flex text-sm gap-2 self-end">
            <a
              href={demoUrl}
              className="px-[2px] py-[1px] text-sm bg-[#cfdee9] border border-black rounded-sm hover:-translate-y-1 hover:bg-[#fbdada]"
            >
              <p>{demoUrl == null ? "x" : "DEMO"}</p>
            </a>

            <a
              href={githubUrl}
              className="px-[2px] py-[1px] text-sm bg-[#cfdee9] border border-black rounded-sm hover:-translate-y-1 hover:bg-[#fbdada]"
            >
              <p>GITHUB</p>
            </a>
          </div>
        </div>
        <div className="mt-1 h-[50px] text-sm font-medium px-2 text-gray-600 flex items-center">
          <Tag text={tag} />
        </div>
        <div className="describ-box">
          <p className="text-md text-gray-600 py-3 px-2">
            {description.length > 150
              ? `${description.substring(0, 150)}...`
              : description}
          </p>
        </div>
      </div>
    </div>
  );
}
