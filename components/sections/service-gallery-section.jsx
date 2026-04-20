"use client";

import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Pipe Repair Commercial",
    src: "/images/1zYVz9QJc5BOeqL5dB0N8o8SDoc.png",
    className: "md:col-span-4 md:row-span-2",
  },
  {
    id: 2,
    title: "Pipe Repair Commercial",
    src: "/images/Kj6Jy6kSwel2ONNzgeIEtYtHxk.png",
    className: "md:col-span-5 md:row-span-1",
  },
  {
    id: 3,
    title: "Pipe Repair Commercial",
    src: "/images/0uxFc4M6TuuW1docugfKFJfHK0.png",
    className: "md:col-span-3 md:row-span-1",
  },
  {
    id: 4,
    title: "Pipe Repair Commercial",
    src: "/images/qc4QPjkmjedX6S8OZe0g3xmBc.png",
    className: "md:col-span-3 md:row-span-1",
  },
  {
    id: 5,
    title: "Pipe Repair Commercial",
    src: "/images/ELqUVtmLoVs21G0mJIEepivQq8M.png",
    className: "md:col-span-5 md:row-span-1",
  },
];

export function ServiceGallerySection() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-[0.85rem] font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Recent Projects
          </p>
          <h2 className="mt-4 text-[2.5rem] font-extrabold leading-[1.1] tracking-tight text-[#18344f] lg:text-[3.25rem]">
            Quality Workmanship in Every Installation
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 lg:gap-6 md:grid-cols-12 md:grid-rows-[22rem_20rem]">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`relative overflow-hidden rounded-2xl group min-h-[20rem] md:min-h-0 shadow-[0_8px_30px_rgba(0,0,0,0.06)] ${project.className}`}
            >
              <Image
                src={project.src}
                alt={project.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#18344f]/90 via-[#18344f]/20 to-transparent opacity-80" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 pointer-events-none">
                <h3 className="text-lg lg:text-xl font-semibold text-white tracking-tight break-words pr-2">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
