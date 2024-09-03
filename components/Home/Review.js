import Image from "next/image";
import client1 from "@/public/LOGO-PT-MIS.png";
import client2 from "@/public/LOGO-PT-MIS.png";
import client3 from "@/public/LOGO-PT-MIS.png";
import client4 from "@/public/LOGO-PT-MIS.png";
import client5 from "@/public/LOGO-PT-MIS.png";
import client6 from "@/public/LOGO-PT-MIS.png";

export default function Review() {
  return (
    <section className="w-full h-full" id="review">
      <div className="max-w-screen-xl grid mx-auto px-8 py-12">
        
        <div>
          <div className="px-6 py-3 mb-6 border-l-4 border-yellow-500">
            <h3 className="font-bold text-xl">Clients</h3>
            <p className="font-medium text-slate-700">Perusahaan yang pernah bekerja sama dengan kami</p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="w-full aspect-[5/3] p-2 grid place-items-center rounded border-[3px] border-gray-300 transition-colors hover:border-blue-950">
              <Image
                className="w-full object-cover"
                alt="client 1"
                src={client1}
                placeholder="blur"
                priority="high"
                width={300}
                height={150}
                quality={50}
              />
            </div>
            <div className="w-full aspect-[5/3] p-2 grid place-items-center rounded border-[3px] border-gray-300 transition-colors hover:border-blue-950">
              <Image
                className="w-full object-cover"
                alt="client 2"
                src={client2}
                placeholder="blur"
                priority="high"
                width={300}
                height={150}
                quality={50}
              />
            </div>
            <div className="w-full aspect-[5/3] p-2 grid place-items-center rounded border-[3px] border-gray-300 transition-colors hover:border-blue-950">
              <Image
                className="w-full object-cover"
                alt="client 3"
                src={client3}
                placeholder="blur"
                priority="high"
                width={300}
                height={150}
                quality={50}
              />
            </div>
            <div className="w-full aspect-[5/3] p-2 grid place-items-center rounded border-[3px] border-gray-300 transition-colors hover:border-blue-950">
              <Image
                className="w-full object-cover"
                alt="client 4"
                src={client4}
                placeholder="blur"
                priority="high"
                width={300}
                height={150}
                quality={50}
              />
            </div>
            <div className="w-full aspect-[5/3] p-2 grid place-items-center rounded border-[3px] border-gray-300 transition-colors hover:border-blue-950">
              <Image
                className="w-full object-cover"
                alt="client 5"
                src={client5}
                placeholder="blur"
                priority="high"
                width={300}
                height={150}
                quality={50}
              />
            </div>
            <div className="w-full aspect-[5/3] p-2 grid place-items-center rounded border-[3px] border-gray-300 transition-colors hover:border-blue-950">
              <Image
                className="w-full object-cover"
                alt="client 6"
                src={client6}
                placeholder="blur"
                priority="high"
                width={300}
                height={150}
                quality={50}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
};