"use client";
export default function Custom404() {
  return (
    <section className="ezy__comingsoon10 light bg-white dark:bg-[#0b1727] dark:text-white flex items-center py-14 md:py-24 overflow-hidden relative z-[1]">
      <svg
        className="absolute top-0 left-0 h-[88%] -z-[1]"
        viewBox="0 0 436 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="45" cy="121" r="391" fill="#E5F4F6" />
        <circle cx="44.6737" cy="121.327" r="332.578" fill="#C7E7EB" />
        <circle cx="45.0002" cy="121" r="265.671" fill="#B5E0E6" />
        <circle cx="44.6736" cy="121.326" r="213.777" fill="#A6D6DC" />
      </svg>

      <div className="container px-16 md:px-8 lg:px-28">
        <div className="bg-white dark:bg-[#162231] shadow-lg">
          <div className="">
            <div className="grid grid-cols-12">
              <div className="col-span-12 md:col-span-8 flex items-center">
                <div className="py-12 px-4 md:p-16">
                  <h2 className="font-bold text-[32px] md:text-[45px] leading-none mb-2">
                    Coming Soon
                  </h2>
                  <p className="text-lg opacity-75 my-6">
                    Page under.
                  </p>
                  <div className="grid grid-cols-12">
                    <div className="col-span-12 md:col-span-10 lg:col-span-8 xl:col-span-6">
                      <form className="mt-6">
                        <div className="relative flex items-stretch w-full shadow-2xl rounded">
                          <input
                            name="email"
                            className="grow py-4 px-5 placeholder:text-lg"
                            type="email"
                            placeholder="Enter email"
                            required
                          />
                          <button className="bg-blue-600 hover:bg-opacity-90 text-white text-lg border border-blue-600 py-3 px-6 rounded-r rounded-b font-semibold transition">
                            Send
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 sm:col-span-4">
                <div
                  className="bg-cover bg-no-repeat bg-center -z-[1] w-full md:w-[50vw] float-left h-full"
                  // style="background-image: url(https://cdn.easyfrontend.com/pictures/comingsoon/six.jpg)"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
