import Footer_01 from "@/components/footer/Footer_01";
import Header_01 from "@/components/header/Header_01";
import { AnimatePresence, motion } from "framer-motion";
function About() {
  const services = [
    {
      name: "Search Engine Optimization (SEO)",
      img: "https://cdn3d.iconscout.com/3d/premium/thumb/seo-tag-3d-icon-download-in-png-blend-fbx-gltf-file-formats--label-marketing-website-pack-web-icons-6649168.png?f=webp",
      color: "#512DA8",
    },
    {
      name: "Social Media Marketing (SMM)",
      img: "https://cdn3d.iconscout.com/3d/premium/thumb/social-media-3d-icon-download-in-png-blend-fbx-gltf-file-formats--like-logo-feedback-marketing-advertisement-pack-branding-icons-4863035.png?f=webp",
      color: "black",
    },
    {
      name: "Content Marketing",
      img: "https://cdn3d.iconscout.com/3d/premium/thumb/digital-marketing-3d-icon-download-in-png-blend-fbx-gltf-file-formats--online-web-advertisement-ads-advertising-pack-business-icons-4936363.png",
      color: "#F9A825",
    },
    {
      name: "Email Marketing",
      img: "https://static.vecteezy.com/system/resources/previews/021/096/519/original/3d-icon-email-marketing-png.png",
      color: "#00695C",
    },
    {
      name: "Pay-Per-Click Advertising (PPC)",
      img: "https://cdn3d.iconscout.com/3d/premium/thumb/ppc-3d-icon-download-in-png-blend-fbx-gltf-file-formats--cost-per-click-pay-marketing-internet-pack-business-icons-6497274.png?f=webp",
      color: "#1565C0",
    },
    {
      name: "Affiliate Marketing",
      img: "https://static.vecteezy.com/system/resources/previews/015/339/864/original/3d-rendering-affiliate-marketing-isolated-useful-for-advertising-advertisement-and-promotion-design-png.png",
      color: "#9E9D24",
    },
    {
      name: " Analytics and Reporting",
      img: "https://cdn.icon-icons.com/icons2/2957/PNG/512/graphic_statistics_analytics_bars_chart_icon_185900.png",
      color: "#64DD17",
    },
  ];
  return (
    <>
      <Header_01 />
      <main className="main-wrapper relative overflow-hidden">
        {/*...::: Breadcrumb Section Start :::... */}
        <section id="section-breadcrumb">
          {/* Section Spacer */}
          <div className="breadcrumb-wrapper">
            {/* Section Container */}
            <div className="global-container flex flex-col justify-center items-center">
              <div className="breadcrumb-block w-full lg:w-2/3 ">
                <p className="text-3xl  xl:text-4xl xxl:text-6xl font-Satoshi font-bold !text-gray-100">
                  Let's start something really BIG!
                </p>
              </div>
              <div className="h-[500px] grid grid-cols-1 grid-rows-2 py-2 gap-2 lg:grid-cols-4 w-full px-0 lg:px-14 mt-14">
                <div className="w-full p-7 h-full bg-yellow-300 relative rounded-xl">
                  <p className="font-Satoshi font-bold text-2xl xl:text-5xl">
                    200+
                  </p>
                  <p className="font-Satoshi font-medium text-xl xl:text-3xl mt-2">
                    Awards
                  </p>
                  <div className="size-28 absolute -bottom-1 left-1/2 -translate-x-1/2">
                    <img src={"/assets/img_placeholder/trophy.png"} />
                  </div>
                </div>
                <div className="w-full relative p-7 h-full bg-lime-400  rounded-xl">
                  <p className="font-Satoshi font-bold text-2xl xl:text-5xl">
                    10+
                  </p>
                  <p className="font-Satoshi font-medium text-xl xl:text-3xl mt-2">
                    Ongoing Projects
                  </p>
                  <div className="size-28 absolute -bottom-1 left-1/2 -translate-x-1/2">
                    <img src={"/assets/img_placeholder/project.png"} />
                  </div>
                </div>
                <div className="w-full h-full overflow-hidden col-span-2 row-span-2 bg-pink-400  rounded-xl">
                  <video autoPlay muted loop>
                    <source
                      src={
                        "https://videos.pexels.com/video-files/18069234/18069234-uhd_1440_1440_24fps.mp4"
                      }
                    />
                  </video>
                </div>
                <div className="w-full relative  p-7 h-full bg-orange-400 col-span-2 rounded-xl">
                  <p className="font-Satoshi font-bold text-2xl xl:text-4xl">
                    Start Project
                  </p>
                  <button className="bg-black text-gray-100 px-6 py-2 rounded-lg mt-4 font-Satoshi font-medium">
                    Lets talk
                  </button>
                  <div className="size-24 absolute left-1/2 -translate-x-1/2 ">
                    <img src={`/assets/img_placeholder/star.png`} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="global-container mb-20">
          <h2 className="w-full text-center">Services</h2>
          <div className="grid place-items-center grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={index}
                style={{ backgroundColor: service?.color }}
                className="mt-10 border-[10px] cursor-pointer border-gray-200 group  rounded-2xl w-full lg:w-[300px] h-[400px]  relative overflow-hidden"
              >
                <div className="size-40 absolute top-16 -translate-x-1/2 left-1/2 -translate-y-0">
                  <img className="w-full" src={service.img} />
                </div>
                <div className="size-4 group-hover:scale-[80] xxl:group-hover:scale-[110]  absolute transition-all duration-700  -top-4 -left-4 bg-gray-200 rounded-full"></div>
                <div className="size-3 group-hover:scale-[90] xxl:group-hover:scale-[120] absolute transition-all duration-700 -top-4 -left-4 bg-white delay-200 rounded-full"></div>
                <div className="w-full relative  z-10 h-full flex py-5 px-5 flex-col justify-end items-start">
                  <p className="xl:text-2xl   pr-3 font-bold font-Satoshi leading-snug group-hover:text-gray-900 transition-all duration-500 text-gray-100">
                    {service.name}
                  </p>
                  <p className="leading-snug mt-1 text-sm text-gray-200 group-hover:text-gray-800  transition-all duration-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <div className="w-full flex justify-between items-center">
                    <button className="px-4 bg-lime-300 py-2 font-Satoshi font-semibold text-sm mt-2   rounded-full">
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer_01 />
    </>
  );
}

export default About;
