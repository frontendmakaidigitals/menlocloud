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
              <div className="breadcrumb-block w-full  ">
                <p className="text-2xl  xl:text-3xl xxl:text-5xl font-Satoshi font-bold !text-gray-100">
                  Accelerate your business with top talent.
                </p>
                <p className="text-2xl  xl:text-3xl xxl:text-5xl font-Satoshi font-bold !text-gray-100">
                  Your success, our mission.
                </p>
              </div>
              <div className="bg-no-repeat bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] w-full h-[50vh] xl:h-[80vh] overflow-hidden bg-green-400 mt-10 rounded-[40px]"></div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5 place-items-center bg-blue-100 w-full p-6 xl:p-8 xxl:p-12 justify-around mt-10 rounded-[40px]">
                {data.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center font-Satoshi "
                  >
                    <p className="text-3xl text-blue-500 xl:text-4xl xxl:text-6xl font-bold">
                      {item.number}
                    </p>
                    <p className="font-[500] capitalize text-blue-400 text-sm xl:text-xl xxl:text-2xl ">
                      {item.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="global-container mb-10">
            <div className="w-full flex flex-col justify-center items-center">
              <p className="text-3xl  xl:text-4xl xxl:text-6xl text-center font-Satoshi font-bold !text-gray-900">
                Our Mission and Values
              </p>
              <p className="mt-2 text-center text-sm ">
                Our mission is to empower businesses with top-tier IT talent,
                delivering exceptional solutions that drive innovation and
                success.
              </p>
            </div>
          </div>
          <div className="bg-blue-100 py-20 mb-20">
            <div className="grid global-container grid-cols-1  md:grid-cols-2 gap-10 place-items-center xxl:grid-cols-4">
              {missiondData.map((mission, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl px-7 py-6 w-full"
                >
                  <div className="size-20">
                    <img src={mission.icon} />
                  </div>
                  <p className="text-2xl xxl:text-3xl mt-10 font-bold font-Satoshi">
                    {mission.title}
                  </p>
                  <p className="text-md xxl:text-lg mt-2 font-Satoshi font-medium">
                    {mission.description}
                  </p>
                  <button className="mt-3 text-blue-500 font-Satoshi font-semibold">
                    Learn more
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="global-container mb-10">
            <div className="flex flex-col w-full justify-center items-center">
              <p className="text-3xl xl:text-4xl w-2/3 xxl:text-6xl font-Satoshi font-bold !text-gray-900 text-center">
                Our Team
              </p>
              <p className="mt-2 text-center">
                Fostering a Culture of Excellence and Accountability Through Our
                Mission and Core Values
              </p>
            </div>
          </div>

          <div className=" w-full mb-20">
            <div className="grid px-10 w-full xl:w-2/3 global-container grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
              {teams.map((team, index) => (
                <div key={index} className="rounded-2xl overflow-hidden">
                  <div className="w-full h-[350px] lg:h-[280px] xl:h-[320px]  bg-gray-400 rounded-2xl object-fit overflow-hidden">
                    <img src={team.img} className="w-full " />
                  </div>
                  <p className="font-bold mt-2 font-Satoshi xxl:text-2xl">
                    {team.name}
                  </p>
                  <p className="font-medium font-Satoshi xxl:text-lg text-gray-600">
                    {team.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer_01 />
    </>
  );
}

export default About;
