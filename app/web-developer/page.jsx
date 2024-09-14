"use client";
import Footer_01 from "@/components/footer/Footer_01";
import Header_01 from "@/components/header/Header_01";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { twMerge } from "tailwind-merge";
function Services() {
  const products = [
    {
      title: "Insight Vision",
      thumbnail: "/assets/img_placeholder/insight-vision.png",
    },
    {
      title: "Zippro",
      thumbnail: "/assets/img_placeholder/zippro.png",
    },
    {
      title: "Insight Vision",
      thumbnail: "/assets/img_placeholder/insight-vision.png",
    },
    {
      title: "Zippro",
      thumbnail: "/assets/img_placeholder/zippro.png",
    },
    {
      title: "Insight Vision",
      thumbnail: "/assets/img_placeholder/insight-vision.png",
    },
    {
      title: "Zippro",
      thumbnail: "/assets/img_placeholder/zippro.png",
    },
    {
      title: "Insight Vision",
      thumbnail: "/assets/img_placeholder/insight-vision.png",
    },
    {
      title: "Zippro",
      thumbnail: "/assets/img_placeholder/zippro.png",
    },
    {
      title: "Insight Vision",
      thumbnail: "/assets/img_placeholder/insight-vision.png",
    },
    {
      title: "Zippro",
      thumbnail: "/assets/img_placeholder/zippro.png",
    },
    {
      title: "Insight Vision",
      thumbnail: "/assets/img_placeholder/insight-vision.png",
    },
    {
      title: "Zippro",
      thumbnail: "/assets/img_placeholder/zippro.png",
    },
    {
      title: "Insight Vision",
      thumbnail: "/assets/img_placeholder/insight-vision.png",
    },
    {
      title: "Zippro",
      thumbnail: "/assets/img_placeholder/zippro.png",
    },
    {
      title: "Insight Vision",
      thumbnail: "/assets/img_placeholder/insight-vision.png",
    },
    {
      title: "Zippro",
      thumbnail: "/assets/img_placeholder/zippro.png",
    },
    {
      title: "Insight Vision",
      thumbnail: "/assets/img_placeholder/insight-vision.png",
    },
    {
      title: "Zippro",
      thumbnail: "/assets/img_placeholder/zippro.png",
    },
  ];

  const dummyContent = [
    {
      title: "Web Apps",
      description: (
        <>
          <p className="text-lg">
            We offer full-cycle web app development services from UI/UX design
            and development to QA and upgrade & maintenance. We build web apps
            that are secure, scalable, fast, and work seamlessly across all
            devices and platforms
          </p>
        </>
      ),
      badge: "React",
      image:
        "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "eCommerce",
      description: (
        <>
          <p className="text-lg">
            With more than 12 years of delivering the best eCommerce web
            development services, our web design & development team can help you
            leverage Shopify, Magento, WooCommerce, or BigCommerce to transform
            your store with a smooth shopping experience for your users.
          </p>
        </>
      ),
      badge: "Shopify",
      image:
        "https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "ERP",
      description: (
        <>
          <p className="text-lg">
            Leverage our expert ERP development services to build a solution
            from the ground up, regardless of its scale, functionalities, or
            complexity. We help enterprises to streamline processes, function
            efficiently, and facilitate growth by building scalable ERP
            solutions.
          </p>
        </>
      ),
      badge: "Java",
      image: "https://ibrinfotech.b-cdn.net/uploads/erp-solution-1.png",
    },
  ];
  return (
    <>
      <div className="page-wrapper relative">
        <Header_01 />
        <main className="main-wrapper">
          <div className="w-full mb-20 ">
            <HeroParallax products={products} />;
          </div>
        </main>
        <section className=" flex flex-col items-center justify-center">
          <div className="global-container lg:w-2/3 flex flex-col items-center justify-center w-full">
            <h2 className="text-center">Web Development Services</h2>
          </div>
          <TracingBeam className="px-12 lg:px-6 mt-10">
            <div className="max-w-2xl mx-auto antialiased pt-6 relative">
              {dummyContent.map((item, index) => (
                <div key={`content-${index}`} className="mb-10">
                  <p className={"text-3xl text-Satoshi font-[600]"}>
                    {item.title}
                  </p>
                  <h2 className="bg-lime-400 text-gray-900 rounded-full text-sm w-fit px-4 mb-4 mt-1 py-1">
                    {item.badge}
                  </h2>

                  <div className="text-sm prose prose-sm dark:prose-invert">
                    {item?.image && (
                      <img
                        src={item.image}
                        alt="blog thumbnail"
                        height="1000"
                        width="1000"
                        className="rounded-lg mb-10 object-cover"
                      />
                    )}
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </TracingBeam>
        </section>
        <Footer_01 />
      </div>
    </>
  );
}

export default Services;
