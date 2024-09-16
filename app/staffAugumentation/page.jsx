"use client";
import Footer_01 from "@/components/footer/Footer_01";
import Header_01 from "@/components/header/Header_01";

import "swiper/css";

import { Timeline } from "@/components/ui/timeline";
function Services() {
  const services = [
    {
      name: "Hire web developers",
      img: "/assets/img_placeholder/web.png",
      color: "#512DA8",
    },
    {
      name: "Hire mobile app developers",
      img: "/assets/img_placeholder/app.png",
      color: "black",
    },
    {
      name: "Hire eCommerce and CMS Developers",
      img: "/assets/img_placeholder/ecomm.png",
      color: "#F9A825",
    },
    {
      name: "Hire Developers for Automation Solutions",
      img: "/assets/img_placeholder/auto.png",
      color: "#00695C",
    },
    {
      name: "Hire Software Testers",
      img: "/assets/img_placeholder/tester.png",
      color: "#1565C0",
    },
    {
      name: "Hire Graphic Designers",
      img: "/assets/img_placeholder/graphics.png",
      color: "#9E9D24",
    },
  ];
  const data = [
    {
      title: "Requirement Gathering ",
      content: (
        <div>
          <p className="text-neutral-800 text-xs md:text-md  font-normal mb-2 lg:mb-4">
            We analyze your requirements and match them with the best resources
            from our in-house team for your project
          </p>
          <div className="w-full">
            <img
              src="https://www.teced.com/wp-content/uploads/bigstock-Manager-leading-a-meeting-with-137595377.jpg"
              alt="startup template"
              className="rounded-lg object-cover h-60 md:h-44 lg:h-[30rem] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Allocate Resources ",
      content: (
        <div>
          <p className="text-neutral-800 text-xs md:text-md  font-normal mb-2 lg:mb-4">
            We provide you with the resumes of the shortlisted candidates for
            your evaluation
          </p>

          <div className="">
            <img
              src="https://www.projectmanager.com/wp-content/uploads/2023/05/Resource-Optimization.jpg"
              alt="startup template"
              className="rounded-lg object-cover h-60 md:h-44 lg:h-[30rem] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Interview Candidate",
      content: (
        <div>
          <p className="text-neutral-800 text-xs md:text-md  font-normal mb-2 lg:mb-4">
            Feel free to interview candidates to find the most suitable match
            for your requirements.
          </p>

          <div className="">
            <img
              src="https://www.proclinical.com/img/dxMB0y2fUkX69QjW-32sXA/how+to+spot+a+great+candidate+at+interview.jpg?v=cbbb5d01d08ad7bdf659ba32cd053aa1"
              alt="startup template"
              className="rounded-lg object-cover h-60 md:h-44 lg:h-[30rem] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Contract Finalization",
      content: (
        <div>
          <p className="text-neutral-800 text-xs md:text-md  font-normal mb-2 lg:mb-4">
            After you have selected the appropriate resources from our in-house
            team for your project, we will provide a final contract for your
            review.
          </p>

          <div className="">
            <img
              src="https://media.licdn.com/dms/image/D5612AQGqKDWRA3L23A/article-cover_image-shrink_720_1280/0/1692817692297?e=2147483647&v=beta&t=tFbcP3EjhgnYbOGsznY5O2KbnCP8Y8DPIKdWsH3q4UY"
              alt="startup template"
              className="rounded-lg object-cover h-60 md:h-44 lg:h-[30rem] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Scheduling and Monitoring",
      content: (
        <div>
          <p className="text-neutral-800 text-xs md:text-md  font-normal mb-2 lg:mb-4">
            Your remote resource at MenloCloud will maintain work logs and
            provide regular updates on the progress of the work.
          </p>
          <div className="mb-8"></div>
          <div className="">
            <img
              src="https://www.firstlight.net/wp-content/uploads/2021/04/Monitoring-Header.png"
              alt="hero template"
              className="rounded-lg object-cover h-60 md:h-44 lg:h-[30rem] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <>
      <div className="page-wrapper relative">
        <Header_01 />
        <main className="main-wrapper">
          <div className="w-full mb-20  h-[85vh] xl:h-screen bg-no-repeat bg-center bg-cover bg-[url('/assets/img_placeholder/staff.jpg')]">
            <div className="bg-gradient-to-b w-full h-full from-gray-800/40 to-gray-700/30">
              <div className="global-container  flex flex-col justify-around  w-full h-full">
                <div></div>
                <div></div>
                <div className="mt-32 xl:mt-0">
                  <p className="text-3xl lg:text-6xl font-dmSans font-bold text-gray-50">
                    Unlock the Power of <br /> Staff Augmentation
                  </p>
                  <p className="mt-3 leading-relaxed hidden lg:block text-sm xl:text-lg text-gray-100 w-[80%] lg:w-2/4">
                    Staff augmentation is a strategic approach to expanding your
                    team with skilled professionals on a temporary or project
                    basis. It provides the flexibility to adapt to changing
                    demands, access specialized skills, and meet deadlines
                    without the long-term commitment of hiring full-time
                    employees.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <section className="global-container mb-20">
            <h2 className="w-full text-center">Talent we Provide</h2>
            <div className="grid place-items-center grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  style={{ backgroundColor: service?.color }}
                  className="mt-10 border-[10px] cursor-pointer border-gray-200 group  rounded-2xl w-full lg:w-[300px] h-[400px]  relative overflow-hidden"
                >
                  <div className="size-28   absolute top-16 -translate-x-1/2 left-1/2 -translate-y-0">
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

          <section className="mb-32">
            <div className="global-container flex flex-col justify-center items-center">
              <h2 className="font-Satoshi font-[500] text-center">
                Why Partner with Us?
              </h2>
              <p className="text-sm xl:text-lg text-center mt-5 w-full lg:w-2/3 font-Satoshi">
                Our staff augmentation services offer a seamless way to
                integrate skilled professionals into your team, ensuring you get
                the expertise you need when you need it. Here &apos;s why we
                stand out:
              </p>
            </div>
            <div className="global-container grid grid-cols-1 xl:grid-cols-4 gap-5 mt-10">
              <div className="w-full bg-red-300 overflow-hidden relative h-[350px] shadow-lg bg-[url('https://images.pexels.com/photos/5716031/pexels-photo-5716031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-no-repeat bg-center bg-cover rounded-xl xl:col-span-2 ">
                <div className="absolute top-0 left-0 bg-gradient-to-t from-gray-900/60 to-transparent w-full h-full"></div>
                <div className="w-full flex flex-col justify-end p-4 h-full">
                  <p className="relative z-10 text-2xl font-Satoshi font-[600] text-gray-50">
                    {" "}
                    Experienced Professionals
                  </p>
                  <p className="relative z-10 font-Satoshi mt-1 text-gray-100 font-[500]">
                    We link you with seasoned specialists from the various
                    talent market, offering the specific skills required for
                    your projects
                  </p>
                </div>
              </div>
              <div className="w-full bg-red-300 overflow-hidden relative h-[350px] shadow-lg bg-[url('https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-no-repeat bg-center bg-cover rounded-xl  ">
                <div className="absolute top-0 left-0 bg-gradient-to-t from-gray-900/60 to-transparent w-full h-full"></div>
                <div className="w-full flex flex-col justify-end p-4 h-full">
                  <p className="relative z-10 text-2xl font-Satoshi font-[600] text-gray-50">
                    {" "}
                    Save upto 70%
                  </p>
                  <p className="relative z-10 font-Satoshi mt-1 text-gray-100 font-[500]">
                    By hiring dedicated specialists from us—whether developers,
                    designers, QA experts, or digital marketers—you can save up
                    to 70%
                  </p>
                </div>
              </div>
              <div className="w-full bg-red-300 overflow-hidden relative h-[350px] shadow-lg bg-[url('https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-no-repeat bg-center bg-cover rounded-xl">
                <div className="absolute top-0 left-0 bg-gradient-to-t from-gray-900/60 to-transparent w-full h-full"></div>
                <div className="w-full flex flex-col justify-end p-4 h-full">
                  <p className="relative z-10 text-2xl font-Satoshi font-[600] text-gray-50">
                    {" "}
                    Team Flexibility
                  </p>
                  <p className="relative z-10 font-Satoshi mt-1 text-gray-100 font-[500]">
                    Our offshore specialists provide the flexibility to
                    effortlessly adjust your team size according to your
                    project&apos;ss requirements
                  </p>
                </div>
              </div>
              <div className="w-full bg-red-300 overflow-hidden relative h-[350px] shadow-lg bg-[url('https://images.pexels.com/photos/6914650/pexels-photo-6914650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-no-repeat bg-center bg-cover rounded-xl ">
                <div className="absolute top-0 left-0 bg-gradient-to-t from-gray-900/60 to-transparent w-full h-full"></div>
                <div className="w-full flex flex-col justify-end p-4 h-full">
                  <p className="relative z-10 text-2xl font-Satoshi font-[600] text-gray-50">
                    {" "}
                    Zero Overheads
                  </p>
                  <p className="relative z-10 font-Satoshi mt-1 text-gray-100 font-[500]">
                    With our dedicated professionals, you can skip the hassle of
                    managing payroll, taxes, infrastructure costs, and employee
                    benefits.
                  </p>
                </div>
              </div>
              <div className="w-full bg-red-300 overflow-hidden relative h-[350px] shadow-lg bg-[url('https://images.pexels.com/photos/7841833/pexels-photo-7841833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-no-repeat bg-center bg-cover rounded-xl  ">
                <div className="absolute top-0 left-0 bg-gradient-to-t from-gray-900/60 to-transparent w-full h-full"></div>
                <div className="w-full flex flex-col justify-end p-4 h-full">
                  <p className="relative z-10 text-2xl font-Satoshi font-[600] text-gray-50">
                    {" "}
                    Strict NDAs
                  </p>
                  <p className="relative z-10 font-Satoshi mt-1 text-gray-100 font-[500]">
                    We implement stringent NDAs to guarantee absolute
                    confidentiality and security of your projects
                  </p>
                </div>
              </div>
              <div className="w-full bg-red-300 overflow-hidden relative h-[350px] shadow-lg bg-[url('https://images.pexels.com/photos/48770/business-time-clock-clocks-48770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-no-repeat bg-center bg-cover rounded-xl xl:col-span-2 ">
                <div className="absolute top-0 left-0 bg-gradient-to-t from-gray-900/60 to-transparent w-full h-full"></div>
                <div className="w-full flex flex-col justify-end p-4 h-full">
                  <p className="relative z-10 text-2xl font-Satoshi font-[600] text-gray-50">
                    {" "}
                    Same Business Hours
                  </p>
                  <p className="relative z-10 font-Satoshi mt-1 text-gray-100 font-[500]">
                    MenloCloud&apos;ss remote experts are aligned to work within
                    your business hours, ensuring seamless collaboration
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="mb-60">
            <div className="global-container flex justify-center">
              <h2 className="font-Satoshi font-bold  text-center">
                Onboarding Process
              </h2>
            </div>
            <Timeline data={data} />
          </section>
        </main>
        <Footer_01 />
      </div>
    </>
  );
}

export default Services;
