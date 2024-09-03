import Link from "next/link";

export default function Contact() {
  return (
    <div className="w-full h-full" id="projects">
      <div className="max-w-screen-lg mx-auto flex flex-col gap-8 px-2 py-20 mt-20">
        <div>
          <iframe
            className="w-full h-[600px] p-12 bg-yellow-500"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.0509601270232!2d112.65441678885497!3d-7.459614800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e133105583a1%3A0x5a60deeff21e0b41!2sTaman%20surya%20kencana%20cluster%20merkurius%20residence!5e0!3m2!1sid!2sid!4v1679291576165!5m2!1sid!2sid"
          />
          <Link href="tel:+6281935007190" className="w-full flex justify-center items-center p-8 font-bold text-xl text-white bg-blue-950 transition hover:bg-blue-950/90">
            <div className="p-2 mr-2 rounded-full bg-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-blue-950">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
              </svg>
            </div>
            Call Us +6281935007190
          </Link>
        </div>
        <div className="grid grid-cols-3 font-sans">
          <div className="group/maps col-span-2 mr-4 flex items-start cursor-pointer">
            <div className="p-4 mr-2 rounded text-white bg-blue-950 transition-colors group-hover/maps:bg-yellow-500">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
                <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-2xl text-slate-800">
                Address
              </h3>
              <p className="font-medium text-zinc-500">
                Taman Surya Kencana, Merkurius Residence Blok B-11, Tulangan, Sidoarjo, Jawa Timur, Indonesia
              </p>
            </div>
          </div>
          <Link href="mailto:info@xtraconstru.com" className="group/email mr-4 flex items-start">
            <div className="p-4 mr-2 rounded text-white bg-blue-950 transition-colors group-hover/email:bg-yellow-500">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-2xl text-slate-800">
                Email
              </h3>
              <p className="font-medium text-zinc-500">
                multiindosejati@gmail.com
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
};