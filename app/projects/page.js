import Image from "next/image";
import project1 from "@/public/59083320_p0.png";
import project2 from "@/public/83100076_p0.jpg";
import project3 from "@/public/84391681_p0.jpg";
import project4 from "@/public/95039962_p0.jpg";

export default function Projects() {
  return (
    <div className="w-full h-full" id="projects">
      <div className="max-w-screen-lg mx-auto flex flex-col px-8 py-20 mt-20">
        <h3 className="pl-1 mb-8 font-extrabold text-xl">
          Gallery Project Kami:
        </h3>
        <div className="h-[500px] grid grid-cols-4 gap-4 overflow-auto">
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
    </div>
  )
};