import Image from "next/image";
import project1 from "@/public/59083320_p0.png";
import project2 from "@/public/83100076_p0.jpg";
import project3 from "@/public/84391681_p0.jpg";
import project4 from "@/public/95039962_p0.jpg";
import Link from "next/link";

export default function HomeProjects() {
  return (
    <section className="w-full h-full" id="HomeProjects">
      <div className="max-w-screen-xl mx-auto px-8 py-12">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="p-4 font-bold text-xl border-l-4 border-yellow-500">Our Projects</h3>
          <Link href="projects" className="p-4 flex items-center font-semibold text-yellow-500 border-l-8 border-yellow-500 bg-blue-950 transition-colors hover:bg-yellow-500 hover:text-slate-900 hover:border-blue-950">
            See All Projects
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="size-4 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <Image
            className="w-full aspect-square object-cover rounded"
            src={project1}
            alt="project 1"
            width={100}
            height={100}
            quality={70}
            decoding="async"
            priority="low"
            placeholder="blur"
          />
          <Image
            className="w-full aspect-square object-cover rounded"
            src={project2}
            alt="project 2"
            width={100}
            height={100}
            quality={70}
            decoding="async"
            priority="low"
            placeholder="blur"
          />
          <Image
            className="w-full aspect-square object-cover rounded"
            src={project3}
            alt="project 3"
            width={100}
            height={100}
            quality={70}
            decoding="async"
            priority="low"
            placeholder="blur"
          />
          <Image
            className="w-full aspect-square object-cover rounded"
            src={project4}
            alt="project 4"
            width={100}
            height={100}
            quality={70}
            decoding="async"
            priority="low"
            placeholder="blur"
          />
        </div>
      </div>
    </section>
  )
};