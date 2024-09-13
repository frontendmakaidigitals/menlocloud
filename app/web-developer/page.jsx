"use client";
import Footer_01 from "@/components/footer/Footer_01";
import Header_01 from "@/components/header/Header_01";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { Timeline } from "@/components/ui/timeline";
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

  const webServices = [
    {
      img: "dd",
      title: "Web Apps",
      description:
        "We offer full-cycle web app development services from UI/UX design and development to QA and upgrade & maintenance. We build web apps that are secure, scalable, fast, and work seamlessly across all devices and platforms.",
    },
    {
      img: "dd",
      title: "eCommerce",
      description:
        "With more than 12 years of delivering the best eCommerce web development services, our web design & development team can help you leverage Shopify, Magento, WooCommerce, or BigCommerce to transform your store with a smooth shopping experience for your users.",
    },
    {
      img: "dd",
      title: "ERP",
      description:
        "Leverage our expert ERP development services to build a solution from the ground up, regardless of its scale, functionalities, or complexity. We help enterprises to streamline processes, function efficiently, and facilitate growth by building scalable ERP solutions.",
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
          <section className="global-container">
            <div className="flex lg:w-2/3 justify-center w-full">
              <h1>Our Web Development Services</h1>
              <p>
                Whether you need a new web app, custom or CMS website, eCommerce
                store, or an ERP solution, we can handle it all. Improve your
                business processes and increase profits through our strategic
                web development services.
              </p>
            </div>
          </section>
        </main>
        <Footer_01 />
      </div>
    </>
  );
}

export default Services;
