const ContactPage = () => {
   return (
      <main className="px-6 py-10 mx-auto max-w-6xl">
         <section className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-blue-600 font-semibold mb-3">
               Contact Us
            </p>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
               Ghibli Magic Shop
            </h1>
            <p className="max-w-2xl mx-auto text-gray-600 leading-7">
               Bring enchanting Studio Ghibli-inspired products into your home.
               Visit our shop, explore our curated collections, or reach out for
               support anytime.
            </p>
         </section>

         <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-8">
               <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                     Shop Information
                  </h2>
                  <p className="text-gray-700 leading-7">
                     Ghibli Magic Shop is your destination for magical home
                     decor, collectibles, and lifestyle pieces inspired by the
                     world of Studio Ghibli.
                  </p>
                  <div className="mt-8 space-y-4 text-gray-700">
                     <div>
                        <p className="font-semibold text-slate-900">Address</p>
                        <p>123 Magic Street, Hoàn Kiếm, Hà Nội, Việt Nam</p>
                     </div>
                     <div>
                        <p className="font-semibold text-slate-900">Phone</p>
                        <p>+84 912 345 678</p>
                     </div>
                     <div>
                        <p className="font-semibold text-slate-900">Email</p>
                        <p>support@ghiblimagic.com</p>
                     </div>
                     <div>
                        <p className="font-semibold text-slate-900">Hours</p>
                        <p>Mon – Sat: 10:00 AM – 8:00 PM</p>
                     </div>
                  </div>
               </div>

               <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                     Visit Us
                  </h2>
                  <p className="text-gray-700 leading-7">
                     Our storefront is located in the heart of Hanoi, surrounded
                     by cozy cafes and charming streets. Drop by to see our
                     latest curated Ghibli collections.
                  </p>
               </div>
            </div>

            <div className="rounded-3xl border border-slate-200 overflow-hidden bg-white shadow-sm">
               <div className="p-8">
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                     Shop Location
                  </h2>
                  <p className="text-gray-700 leading-7 mb-6">
                     Use the map below to find us easily and plan your visit.
                  </p>
               </div>
               <iframe
                  title="Ghibli Magic Shop Location"
                  src="https://maps.google.com/maps?q=123%20Magic%20Street%20Hanoi&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-[360px] border-0"
                  loading="lazy"
               />
            </div>
         </div>
      </main>
   );
};

export default ContactPage;
