export default function HomeServices() {
  return (
    <section className="w-full h-full" id="services">
      <div className="max-w-screen-xl mx-auto px-6 py-12 text-center">
        <h2 className="mb-1 font-bold text-4xl">Our Services</h2>
        <p className="mb-10 font-semibold text-lg">(General Supplier, Contractor, And Services)</p>
        <div className="grid gap-6 auto-cols-auto sm:grid-cols-2 md:grid-cols-3">

          <div className="w-full flex flex-col items-center p-6 border-b-8 border-slate-800 bg-yellow-500 transition-transform hover:-translate-y-6">
            <div className="h-20 px-4 mb-6 flex items-center rounded text-yellow-500 bg-slate-800">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
                <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clipRule="evenodd" />
                <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
              </svg>
            </div>
            <h3 className="mb-1 font-extrabold text-2xl">GENERAL SUPPLIER</h3>
            <p className="font-medium text-lg leading-tight">Menyediakan kebutuhan-kebutuhan untuk Industri dan Kantor.</p>
          </div>

          <div className="w-full flex flex-col items-center p-6 border-b-8 border-slate-800 bg-yellow-500 transition-transform hover:-translate-y-6">
            <div className="h-20 px-4 mb-6 flex items-center rounded text-yellow-500 bg-slate-800">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
                <path d="M12 .75a8.25 8.25 0 0 0-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 0 0 .577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 0 1-.937-.171.75.75 0 1 1 .374-1.453 5.261 5.261 0 0 0 2.626 0 .75.75 0 1 1 .374 1.452 6.712 6.712 0 0 1-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 0 0 .577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0 0 12 .75Z" />
                <path fillRule="evenodd" d="M9.013 19.9a.75.75 0 0 1 .877-.597 11.319 11.319 0 0 0 4.22 0 .75.75 0 1 1 .28 1.473 12.819 12.819 0 0 1-4.78 0 .75.75 0 0 1-.597-.876ZM9.754 22.344a.75.75 0 0 1 .824-.668 13.682 13.682 0 0 0 2.844 0 .75.75 0 1 1 .156 1.492 15.156 15.156 0 0 1-3.156 0 .75.75 0 0 1-.668-.824Z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="mb-1 font-extrabold text-2xl">KELISTRIKAN</h3>
            <p className="font-medium text-lg leading-tight">Menerima Jasa Instalasi dan Perbaikan Jaringan Listrik.</p>
          </div>

          <div className="w-full flex flex-col items-center p-6 border-b-8 border-slate-800 bg-yellow-500 transition-transform hover:-translate-y-6">
            <div className="h-20 px-4 mb-6 flex items-center rounded text-yellow-500 bg-slate-800">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
                <path d="M16.5 7.5h-9v9h9v-9Z" />
                <path fillRule="evenodd" d="M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 0 1 1.5 0v.75H15V3a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 0 1 21 9h-.75v2.25H21a.75.75 0 0 1 0 1.5h-.75V15H21a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 0 1-1.5 0v-.75h-2.25V21a.75.75 0 0 1-1.5 0v-.75H9V21a.75.75 0 0 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3A.75.75 0 0 1 3 15h.75v-2.25H3a.75.75 0 0 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75v-.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V6.75Z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="mb-1 font-extrabold text-2xl">TEKNOLOGI</h3>
            <p className="font-medium text-lg leading-tight">Menerima Jasa Instalasi Jaringan Komputer dan Perbaikan Komputer dari Software dan Hardware.</p>
          </div>

          <div className="w-full flex flex-col items-center p-6 border-b-8 border-slate-800 bg-yellow-500 transition-transform hover:-translate-y-6">
            <div className="h-20 px-4 mb-6 flex items-center rounded text-yellow-500 bg-slate-800">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
                <path fillRule="evenodd" d="M10.5 3.798v5.02a3 3 0 0 1-.879 2.121l-2.377 2.377a9.845 9.845 0 0 1 5.091 1.013 8.315 8.315 0 0 0 5.713.636l.285-.071-3.954-3.955a3 3 0 0 1-.879-2.121v-5.02a23.614 23.614 0 0 0-3 0Zm4.5.138a.75.75 0 0 0 .093-1.495A24.837 24.837 0 0 0 12 2.25a25.048 25.048 0 0 0-3.093.191A.75.75 0 0 0 9 3.936v4.882a1.5 1.5 0 0 1-.44 1.06l-6.293 6.294c-1.62 1.621-.903 4.475 1.471 4.88 2.686.46 5.447.698 8.262.698 2.816 0 5.576-.239 8.262-.697 2.373-.406 3.092-3.26 1.47-4.881L15.44 9.879A1.5 1.5 0 0 1 15 8.818V3.936Z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="mb-1 font-extrabold text-2xl">LABORATORY</h3>
            <p className="font-medium text-lg leading-tight">Menerima pembelian barang kebutuhan Laboratorium.</p>
          </div>

          <div className="w-full flex flex-col items-center p-6 border-b-8 border-slate-800 bg-yellow-500 transition-transform hover:-translate-y-6">
            <div className="h-20 px-4 mb-6 flex items-center rounded text-yellow-500 bg-slate-800">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
              </svg>
            </div>
            <h3 className="mb-1 font-extrabold text-2xl">ARSITEKTUR</h3>
            <p className="font-medium text-lg leading-tight">Menerima Jasa Design Denah dan Interior Gedung, Rumah, dan Industri.</p>
          </div>

          <div className="w-full flex flex-col items-center p-6 border-b-8 border-slate-800 bg-yellow-500 transition-transform hover:-translate-y-6">
            <div className="h-20 px-4 mb-6 flex items-center rounded text-yellow-500 bg-slate-800">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" className="size-8">
                <path d="M160-80q-33 0-56.5-23.5T80-160v-480q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v480q0 33-23.5 56.5T800-80H160Zm240-640h160v-80H400v80Zm40 360v120h80v-120h120v-80H520v-120h-80v120H320v80h120Z" />
              </svg>
            </div>
            <h3 className="mb-1 font-extrabold text-2xl">SAFETY</h3>
            <p className="font-medium text-lg leading-tight">Melayani pembelian Alat-Alat Safety, Peralatan K3 (Alat Pelindung Diri).</p>
          </div>

        </div>
      </div>
    </section>
  )
};