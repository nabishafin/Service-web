"use client";

import Image from "next/image";
import { blogPosts } from "@/lib/blog-data";

export function BlogSection() {
  return (
    <section id="blog" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-[#ff6017]">
              UPDATES NEWS
            </p>
            <h2 className="mt-4 text-[2.5rem] font-bold leading-[1.1] tracking-tight text-[#18344f] lg:text-[3.2rem]">
              Smart Plumbing Solutions for Every Home
            </h2>
          </div>
          
          <a
            href="#blog"
            className="inline-flex h-12 items-center justify-center rounded-full bg-[#ff6017] px-8 text-base font-bold text-white shadow-[0_12px_24px_rgba(255,96,23,0.3)] transition hover:bg-[#e85614] md:h-14"
          >
            View All News
          </a>
        </div>

        {/* Blog Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col overflow-hidden rounded-[2rem] bg-[#eef2f7] p-2 transition-all hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.8rem]">
                <Image
                  src={post.image.src}
                  alt={post.image.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col p-6 pb-8">
                <p className="text-sm font-medium text-[#66737d]">
                  {post.date}
                </p>
                <h3 className="mt-4 text-xl font-bold leading-snug text-[#18344f] transition group-hover:text-[#ff6017] sm:text-2xl">
                  {post.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
