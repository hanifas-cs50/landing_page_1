import Image from "next/image";
import carousel1 from "@/public/59083320_p0.png";
import carousel2 from "@/public/83100076_p0.jpg";
import Link from "next/link";

export function First_Carousel() {
  return (
    <div className="relative w-full h-full">
      <Image
        className="absolute top-0 left-0 -z-10 w-full h-full object-cover animate-zoom brightness-50"
        alt={`Carousel 1`}
        src={carousel1}
        placeholder="blur"
        priority="high"
        width={400}
        height={200}
        quality={50}
      />
      <div className="max-w-screen-xl h-full px-12 mx-auto grid place-items-center text-white">
        <h3 className="p-6 border-8 border-yellow-500 font-bold text-4xl">PT. MULTI INDO SEJATI</h3>
      </div>
    </div>
  )
};

export function Second_Carousel() {
  return (
    <div className="relative w-full h-full">
      <Image
        className="absolute top-0 left-0 -z-10 w-full h-full object-cover animate-zoom brightness-50"
        alt={`Carousel 2`}
        src={carousel2}
        placeholder="blur"
        priority="high"
        width={400}
        height={200}
        quality={50}
      />
      <div className="max-w-screen-xl h-full px-24 mx-auto text-white flex flex-col justify-center items-center md:items-start">
        <h3 className="mb-2 font-bold text-4xl text-yellow-500">PT. MULTI INDO SEJATI 2</h3>
        <p className="max-w-lg mb-4 font-medium text-justify text-lg">
          PT. MULTI INDO SEJATI (MIS) merupakan perusahaan Perdagangan Umum,
          Furniture Laboratorium, Equipment Lab, Chemical, Kontraktor Mekanikal
          Elektrikal dan Pelayanan Teknis. Berkomitmen untuk memberikan prioritas
          pada klien, bekerja secara profesional, berintegritas, efektif, efisien, serta
          menerapkan standar K3 dan lingkungan kerja.
        </p>
        <Link href="/projects" className="max-w-max flex items-center bg-gradient-to-r from-blue-950 from-50% to-yellow-500 to-50% bg-[length:200%_100%] bg-right px-4 py-2 font-semibold text-slate-800 transition-all duration-300 ease-in-out hover:bg-left hover:text-white">
          Go to Projects
        </Link>
      </div>
    </div>
  )
};