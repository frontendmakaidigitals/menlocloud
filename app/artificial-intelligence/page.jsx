import Footer_01 from "@/components/footer/Footer_01";
import Header_01 from "@/components/header/Header_01";

function About() {
  const data = [
    { name: "employees", number: "100+" },

    { name: "project done", number: "30+" },
    { name: "offices", number: "20+" },
    { name: "project awards", number: "25+" },
  ];
  const missiondData = [
    {
      title: "Integrity",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      icon: "/assets/img_placeholder/integrity.png",
    },
    {
      title: "Excellence",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      icon: "/assets/img_placeholder/excellence.png",
    },
    {
      title: "Collaboration",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      icon: "/assets/img_placeholder/collaboration.png",
    },
    {
      title: "Innovation",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      icon: "/assets/img_placeholder/innovation.png",
    },
  ];

  const teams = [
    {
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Jonathan",
      role: "Software Engineer",
    },
    {
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Jonathan",
      role: "Software Engineer",
    },
    {
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Jonathan",
      role: "Software Engineer",
    },
    {
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Jonathan",
      role: "Software Engineer",
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
              <div className="breadcrumb-block w-full ">
                <p className="text-3xl  xl:text-4xl text-start leading-loose xxl:text-7xl w-2/3 font-Satoshi font-bold !text-gray-100">
                  Innovating{" "}
                  <span className="text-blue-500 font-Clash">Intelligence</span>{" "}
                  for a Smarter World
                </p>
              </div>
              <div className="bg-no-repeat shadow-[0_5px_15px_rgba(3,_169,_244)] bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1675557009483-e6cf3867976b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] w-full h-[50vh] xl:h-[85vh] overflow-hidden bg-gray-100 mt-10 rounded-[40px]"></div>
            </div>
          </div>
          <div className="global-container mb-10">
            <div className="w-full flex flex-col justify-center items-center">
              <p className="text-3xl  xl:text-4xl xxl:text-6xl text-center font-Satoshi font-bold !text-gray-900">
                Our Mission and Values
              </p>
              <p className="mt-2 text-center text-sm ">
                Fostering a Culture of Excellence and Accountability Through Our
                Mission and Core Values
              </p>
            </div>
          </div>
         </section>
      </main>
      <Footer_01 />
    </>
  );
}

export default About;
