import logo from "@/public/LOGO-PT-MIS.png";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="w-full h-full text-white bg-blue-950" id="footer_first">
      <div className="max-w-screen-xl grid grid-cols-2 gap-8 mx-auto px-10 py-12">
        <div className="max-w-md mx-auto flex flex-col items-center">
          <Image
            className="w-36 h-16 -ml-2 mb-6"
            src={logo}
            alt="logo"
            width={400}
            height={200}
            quality={50}
            priority="low"
            placeholder="blur"
          />
          <p className="mb-5 text-justify">
            PT. MULTI INDO SEJATI (MIS) merupakan perusahaan Perdagangan Umum, Furniture Laboratorium, Equipment Lab, Chemical, Kontraktor Mekanikal Elektrikal dan Pelayanan Teknis. Berkomitmen untuk memberikan prioritas pada klien, bekerja secara profesional, berintegritas, efektif, efisien, serta menerapkan standar K3 dan lingkungan kerja.
          </p>
          <div className="flex gap-8">
            <button type="button" className="flex items-center bg-gradient-to-r from-slate-800 from-50% to-yellow-500 to-50% bg-[length:200%_100%] bg-right px-4 py-2 font-semibold text-slate-800 transition-all duration-300 ease-in-out hover:bg-left hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-6 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
              Website
            </button>
            <button type="button" className="flex items-center bg-gradient-to-r from-slate-800 from-50% to-yellow-500 to-50% bg-[length:200%_100%] bg-right px-4 py-2 font-semibold text-slate-800 transition-all duration-300 ease-in-out hover:bg-left hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-6 mr-2">
                <path fillRule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z" clipRule="evenodd" />
              </svg>
              Youtube
            </button>
          </div>
        </div>

        <div>
          <h3 className="h-16 flex items-center px-6 mb-6 font-bold text-xl text-slate-800 border-l-4 border-yellow-500 bg-white">
            Contact Us
          </h3>
          <h5 className="font-bold text-2xl">
            PT. MULTI INDO SEJATI
          </h5>
          <p className="mb-3 font-medium">
            (General Supplier, Contractor And Services)
          </p>
          <div className="space-y-2">
            <Link target="_blank" href="https://goo.gl/maps/vnAKeEW5b9Gif7hZ6" className="flex text-white/80 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 mr-2">
                <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
              </svg>
              <span className="text-left">
                <span className="block">
                  Lokasi: Google Maps
                </span>
                Taman Surya Kencana, Merkurius Residence Blok B-11, Tulangan, Sidoarjo, Jawa Timur, Indonesia
              </span>
            </Link>
            <Link target="_blank" href="https://api.whatsapp.com/send?phone=6281935007190&text=(multiindosejati.co.id)%20halo%20PT.%20Multi%20Indo%20Sejati...??" className="flex text-white/80 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 mr-2">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
              </svg>
              HP/WA: 081935007190
            </Link>
            <Link target="_blank" href="mailto:info@xtraconstru.com" className="flex text-white/80 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 mr-2">
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
              Email: multiindosejati@gmail.com
            </Link>
            <button type="button" className="flex text-white/80 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-6 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
              Website: www.multiindosejati.co.id
            </button>
          </div>
        </div>
      </div>
    </section>
  )
};