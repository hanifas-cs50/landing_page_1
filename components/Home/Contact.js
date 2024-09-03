import Link from "next/link";
import Image from "next/image";
import team from "@/public/84391681_p0.jpg";

export default function HomeContact() {
  return (
    <section className="w-full h-full text-white bg-blue-950" id="HomeContact">
      <div className="max-w-screen-lg h-[780px] mx-auto px-2 py-12 flex items-center justify-between gap-24">
        <div>
          <h1 className="mb-3 font-medium text-4xl">
            We are <span className="font-extrabold text-yellow-500">Professional</span> Team!
          </h1>
          <p className="mb-5 text-lg text-justify">
            Dengan berbekal pengalaman di bidang pengadaan barang dan jasa secara elektronik selama lebih dari 10 tahun, kami yakin dapat selalu memenuhi ekspetasi klien atas setiap karya maupun produk yang kami berikan.
          </p>
          <Link target="_blank" href="https://api.whatsapp.com/send?phone=6281935007190&text=(multiindosejati.co.id)%20halo%20PT.%20Multi%20Indo%20Sejati...??" className="max-w-max flex items-center bg-gradient-to-r from-slate-950 from-50% to-yellow-500 to-50% bg-[length:200%_100%] bg-right px-4 py-3 font-semibold text-slate-800 transition-all duration-300 ease-in-out hover:bg-left hover:text-white">
            <svg className="size-6 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path fill="currentColor" fillRule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clipRule="evenodd" />
              <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z" />
            </svg>
            HP/WA: 081935007190
          </Link>
        </div>
        <Image
          className="size-96 object-cover rounded"
          src={team}
          alt="teamwork pic"
          width={400}
          height={400}
          quality={70}
          decoding="async"
          priority="low"
          placeholder="blur"
        />
      </div>
    </section>
  )
};

// px-4 py-3