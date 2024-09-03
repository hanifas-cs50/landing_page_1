import Image from "next/image";
import bg_image from "@/public/59083320_p0.png";
import Link from "next/link";

export default function About() {
  return (
    <div className="w-full h-full" id="about">
      <div className="max-w-screen-md mx-auto flex flex-col px-8 py-20 mt-20">
        <h3 className="px-4 pt-2 pb-3 font-extrabold text-xl border-l-4 border-yellow-500">
          About Us
        </h3>
        <p className="my-4 text-justify">
          PT. MULTI INDO SEJATI (MIS) merupakan perusahaan Perdagangan Umum, Furniture Laboratorium, Equipment Lab, Chemical, Kontraktor Mekanikal Elektrikal dan Pelayanan Teknis. Berkomitmen untuk memberikan prioritas pada klien, bekerja secara profesional, berintegritas, efektif, efisien, serta menerapkan standar K3 dan lingkungan kerja.
          Dengan perkembangan industri dan pembangunan infrastruktur saat ini, baik skala nasional maupun daerah telah mengalami percepatan yang sangat signifikan. Hal tersebut itulah kian memacu kami hadir untuk memberikan terobosan- terobosan terbaru.
          Dengan berbekal pengalaman di bidang pengadaan barang dan jasa secara
          elektronik selama 10 tahun, kami yakin dapat selalu memenuhi ekspetasi
          klien atas setiap karya maupun produk yang kami berikan.
        </p>
        <div className="mt-4 grid grid-cols-2 gap-16">
          <div>
            <h3 className="px-4 pt-2 pb-3 font-extrabold text-xl border-l-4 border-yellow-500">
              Visi
            </h3>
            <p className="my-4 text-justify">
              Menjadi perusahaan penyedia barang dan jasa yang terdepan, handal dan pilihan utama pelanggan.
            </p>
          </div>
          <div>
            <h3 className="px-4 pt-2 pb-3 font-extrabold text-xl border-l-4 border-yellow-500">
              Misi
            </h3>
            <ol className="ml-3 my-4 text-justify list-decimal">
              <li>Memberikan Pelayanan Prima dan Kualitas Terbaik Kepada Pelanggan</li>
              <li>Menyediakan Barang dan Jasa Tepat Waktu Dan Bermutu</li>
              <li>Mampu Bersinergi Dengan Beragam Solusi</li>
              <li>Membangun Jaringan Kerja Yang Luas</li>
              <li>Mengutamakan Keselamatan Dan Kesehatan Kerja (K3)</li>
            </ol>
          </div>
        </div>
      </div>
      <div className="relative h-96 overflow-hidden">
        <Image
          className="w-full h-full absolute inset-0 object-cover -z-10"
          alt="bg_image"
          src={bg_image}
          height={400}
          width={600}
          placeholder="blur"
          quality={70}
        />
        <div className="z-10 h-full grid place-items-center bg-blue-950/50">
          <div className="max-w-screen-lg flex flex-col items-center mx-auto px-8 text-white">
            <h3 className="mb-1 font-bold text-4xl">PT. MULTI INDO SEJATI</h3>
            <p className="mb-4 text-lg text-center">Untuk informasi jasa, produk dan penawaran bisa langsung menghubungi kami HP/WA: 081935007190.</p>
            <Link href="/projects" className="flex items-center bg-gradient-to-r from-slate-800 from-50% to-yellow-500 to-50% bg-[length:200%_100%] bg-right px-4 py-2 font-semibold text-slate-800 transition-all duration-300 ease-in-out hover:bg-left hover:text-white">
              Go to Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
};