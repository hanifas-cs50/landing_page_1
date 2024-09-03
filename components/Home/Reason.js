export default function Reason() {
  return (
    <section className="w-full h-full" id="reason">
    <div className="max-w-screen-xl mx-auto px-6 py-12 text-center">
      <h2 className="mb-10 font-semibold text-4xl">Why <span className="font-extrabold text-blue-950">Choose</span> Us?</h2>
      <div className="grid gap-6 auto-cols-auto place-items-center sm:grid-cols-2 text-white">

        <div className="w-full h-[240px] flex flex-col justify-center p-6 rounded-lg bg-blue-950 transition hover:shadow-md">
          <h3 className="mb-1 font-extrabold text-2xl">GARANSI</h3>
          <p className="font-medium text-lg leading-tight">Memberikan garansi Produk hingga 2 tahun.</p>
        </div>
        <div className="w-full h-[240px] flex flex-col justify-center p-6 rounded-lg bg-blue-950 transition hover:shadow-md">
          <h3 className="mb-1 font-extrabold text-2xl">SATISFACTION</h3>
          <p className="font-medium text-lg leading-tight">Optimal dalam memberikan kepuasan bagi semua stakeholder.</p>
        </div>
        <div className="w-full h-[240px] flex flex-col justify-center p-6 rounded-lg bg-blue-950 transition hover:shadow-md">
          <h3 className="mb-1 font-extrabold text-2xl">PRECISE</h3>
          <p className="font-medium text-lg leading-tight">Menghasilkan Output dengan kesesuaian dan ketelitian.</p>
        </div>
        <div className="w-full h-[240px] flex flex-col justify-center p-6 rounded-lg bg-blue-950 transition hover:shadow-md">
          <h3 className="mb-1 font-extrabold text-2xl">EFEKTIF & EFISIENSI</h3>
          <p className="font-medium text-lg leading-tight">
            Menggunakan tata nilai perusahaan yang efektif dan menggunakan prinsip efisiensi serta tepat sasaran.
          </p>
        </div>

      </div>
    </div>
    </section>
  )
};