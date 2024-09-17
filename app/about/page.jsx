"use client";
import Footer_01 from "@/components/footer/Footer_01";
import Header_01 from "@/components/header/Header_01";
import SwiperNavButtons from "@/components/SwiperNavButton";
import { BsArrowUpRight } from "react-icons/bs";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
const data = [
  {
    img: "https://s7d9.scene7.com/is/image/slalom/insight-globalbas-turtle-finserv-thumb-520x490?fmt=webp-alpha",
    title: "2024 industry outlook: Financial services",
    hoverColor: "#F48FB1",
  },
  {
    img: "https://s7d9.scene7.com/is/image/slalom/insight-globalbas-turtle-finserv-thumb-520x490?fmt=webp-alpha",
    title: "2024 industry outlook: Financial services",
    hoverColor: "#90CAF9",
  },
  {
    img: "https://s7d9.scene7.com/is/image/slalom/insight-globalbas-turtle-finserv-thumb-520x490?fmt=webp-alpha",
    title: "2024 industry outlook: Financial services",
    hoverColor: "#B39DDB",
  },
  {
    img: "https://s7d9.scene7.com/is/image/slalom/insight-globalbas-turtle-finserv-thumb-520x490?fmt=webp-alpha",
    title: "2024 industry outlook: Financial services",
    hoverColor: "#80CBC4",
  },
  {
    img: "https://s7d9.scene7.com/is/image/slalom/insight-globalbas-turtle-finserv-thumb-520x490?fmt=webp-alpha",
    title: "2024 industry outlook: Financial services",
    hoverColor: "#E6EE9C",
  },
  {
    img: "https://s7d9.scene7.com/is/image/slalom/insight-globalbas-turtle-finserv-thumb-520x490?fmt=webp-alpha",
    title: "2024 industry outlook: Financial services",
    hoverColor: "#FFF59D",
  },
  {
    img: "https://s7d9.scene7.com/is/image/slalom/insight-globalbas-turtle-finserv-thumb-520x490?fmt=webp-alpha",
    title: "2024 industry outlook: Financial services",
    hoverColor: "#FFAB91",
  },
];

const tabs = [
  {
    name: "Data & Analytics",
    data: "Formulate the best data strategy and seamlessly deploy data solutions and technologies with MenloCloud expert guidance. Unlock the full potential of your data assets and drive informed decision-making. We offer a comprehensive range of services, from data collection and integration to advanced analytics and insights generation",
    points: [
      "Predictive Insights",
      "Data Visualization",
      "Business Intelligence",
      "Analytical Reporting",
      "Data Strategy",
    ],
  },
  {
    name: "Artificial Intelligence",
    data: "Assisting you in leveraging AI to automate repetitive functions, push beyond traditional limitations, and transform user experiences in an ethical manner. Our expertise includes machine learning, natural language processing, computer vision, and robotic process automation. We start by understanding your unique business challenges and objectives, then design and implement AI solutions tailored to your needs.",
    points: [
      "Natural Language Processing",
      "Predictive Analytics",
      "Deep Learning",
      "Robotic Process Automation",
      "Smart Algorithms",
    ],
  },
  {
    name: "Applied AI ",
    data: "Deploy conventional and generative AI to optimize existing processes, explore innovative solutions, and redefine user experiences responsibly. We combine Conventional and Generative AI and provide a holistic approach to solving complex challenges and unlocking new opportunities in the AI landscape. ",
    points: [
      "Conventional Models",
      "Generative Adversarial Networks",
      "Data Synthesis",
      "Pattern Recognition",
      "Algorithm Development",
    ],
  },
  {
    name: "Software Engineering",
    data: "With our advanced software development efficiency, solve intricate technical problems, and create impactful, reliable software solutions. We provide custom applications, integration of third-party systems, and enhancement of existing software. We focus on delivering solutions that are user-friendly, secure, and optimized for performance. From web and mobile applications to enterprise software and cloud-based solutions, we provide expertise in a wide range of technologies and platforms.",
    points: [
      "System Design",
      "Code Development",
      "Quality Assurance",
      "Version Control",
      "User Experience",
      "Debugging Processes",
    ],
  },
  {
    name: "Cloud Modernisation",
    data: "With cloud modernization, transform your existing infrastructure into a robust, scalable, and agile environment. Our approach involves assessing your current systems, developing a strategic cloud migration plan, streamline operations, reduce costs and implementing cutting-edge cloud solutions that enhance performance and efficiency. ",
    points: [
      "Cloud Migration",
      "Hybrid Cloud",
      "Containerization Technologies",
      "Serverless Computing",
      "Automated Provisioning",
    ],
  },
  {
    name: "Systems Implementation",
    data: "Our systems implementation services include the configuration and customization of software, migration of data, and integration with other systems. We apply industry best practices to ensure that the implementation is executed flawlessly, with attention to detail in every aspect of the process. This includes rigorous testing to validate functionality, performance, and security before the system goes live.",
    points: [
      "Deployment Planning",
      "User Training",
      "Operational Testing",
      "Technical Support",
      "System Customization",
    ],
  },
  {
    name: "Strategy",
    data: "Our strategic approach encompasses various areas, including business transformation, market entry, digital strategy, and organizational development. We design tailored strategies that leverage your strengths, address weaknesses, and capitalize on emerging trends. Our goal is to create a strategic roadmap that not only guides your immediate actions but also positions you for long-term success and adaptability.",
    points: [
      "Strategic Planning",
      "Market Analysis",
      "Competitive Positioning",
      "Long-Term Vision",
      "Strategic Alignment",
      "Risk Management",
      "Tactical Execution",
    ],
  },
  {
    name: "Privacy & Security",
    data: "We also focus on privacy management, Safeguarding information with cutting-edge privacy and security practices, establishing data governance frameworks, conducting privacy impact assessments, and ensuring transparent data collection and usage practices. A proactive approach to privacy and security that protects your organization and supports your business objectives.",
    points: [
      "Data Protection",
      "Cybersecurity Measures",
      "Access Control",
      "Encryption Protocols",
      "Security Audits",
      "Threat Detection",
      "Compliance Standards",
    ],
  },
  {
    name: "Organizational Change",
    data: "Enhancing company approach with top level cultural & hierarchy transformation, We provide comprehensive support for implementing change initiatives, including process redesign, technology adoption, and cultural transformation. Our team assists with designing and executing effective training programs to equip your employees with the skills and knowledge needed to adapt to new systems and processes.",
    points: [
      "Change Management",
      "Transformation Strategy",
      "Process Improvement",
      "Adaptation Strategies",
      "Implementation Planning",
    ],
  },
];
function Services() {
  const [mobileTabs, setMobileTabs] = useState(false);
  const [tabSelected, setTabSelected] = useState(0);

  const swiperRef = useRef(null);
  return (
    <>
      <Header_01 />
      <main className="main-wrapper relative overflow-hidden">
        <div className="w-full mb-20  h-[85vh] xl:h-screen bg-no-repeat bg-center bg-cover bg-[url('https://images.pexels.com/photos/3991976/pexels-photo-3991976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
          <div className="bg-gradient-to-b w-full h-full bg-gray-950/20">
            <div className="global-container relative  flex flex-col justify-around  w-full h-full">
              <div></div>
              <div></div>
              <div className="mt-32 xl:mt-0">
                <h1 className="font-dmSans text-start font-bold text-gray-50">
                  <span className="text-sky-500">Passionate</span> <br /> and{" "}
                  <br /> Sustainable
                </h1>
                <div className="hidden lg:block  absolute right-10 bottom-24 rounded-full">
                  <motion.svg
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 6,
                      ease: "linear",
                    }}
                    width="200"
                    height="200"
                    viewBox="0 0 200 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="200" height="200" rx="100" fill="black" />
                    <path
                      d="M105.318 16.864L104.401 27.2446L109.583 27.7023L109.407 29.7005L102.057 29.0513L103.151 16.6725L105.318 16.864Z"
                      fill="white"
                    />
                    <path
                      d="M117.819 31.5784C115.41 30.9147 114.205 28.696 114.896 26.1884C115.596 23.6481 117.734 22.3504 120.111 23.0051C122.536 23.6733 123.63 25.7202 122.935 28.2442L122.767 28.8506L116.666 27.1875C116.421 28.654 116.976 29.5828 118.304 29.9485C119.402 30.251 120.24 30.0235 120.682 29.3165L122.534 29.8266C121.702 31.5019 119.934 32.1609 117.819 31.5784ZM119.675 24.6485C118.495 24.3235 117.598 24.764 117.067 25.9226L121.132 27.0423C121.439 25.9278 120.872 24.9781 119.675 24.6485Z"
                      fill="white"
                    />
                    <path
                      d="M129.242 35.3396L127.348 34.4964L130.057 28.408L128.581 27.7514L129.286 26.1672L130.762 26.8238L131.826 24.4319L133.721 25.2751L132.657 27.667L134.148 28.3305L133.443 29.9147L131.952 29.2512L129.242 35.3396Z"
                      fill="white"
                    />
                    <path
                      d="M134.874 35.0884L136.552 36.1249C136.182 36.7557 136.403 37.4321 137.213 37.9325C138.038 38.4418 138.691 38.3861 139.013 37.8655C139.237 37.5039 139.209 37.1275 138.662 36.5897L137.563 35.4907C136.454 34.4063 136.208 33.4146 136.914 32.2721C137.78 30.8692 139.484 30.7631 141.133 31.7817C142.739 32.7735 143.251 34.3692 142.408 35.7666L140.73 34.7301C141.091 34.1137 140.928 33.4731 140.248 33.0531C139.554 32.6242 138.952 32.6922 138.621 33.2273C138.371 33.6323 138.529 34.0892 139.047 34.6091L140.146 35.708C141.177 36.7244 141.445 37.6493 140.766 38.7484C139.872 40.1947 138.089 40.3319 136.324 39.2418C134.546 38.1427 134.007 36.4913 134.874 35.0884Z"
                      fill="white"
                    />
                    <path
                      d="M148.697 47.9051L157.855 39.5052L161.199 43.1509C162.854 44.955 162.925 46.9193 161.397 48.3212C160.382 49.252 159.242 49.4674 158.085 48.9362C158.657 50.1882 158.378 51.3432 157.314 52.32C155.748 53.7563 153.833 53.5052 152.098 51.6135L148.697 47.9051ZM159.657 44.3116L157.91 42.4073L155.417 44.694L157.198 46.6359C158.002 47.5129 158.914 47.5763 159.728 46.8294C160.518 46.1054 160.484 45.2136 159.657 44.3116ZM155.937 47.9771L154.064 45.935L151.583 48.2102L153.456 50.2523C154.284 51.1544 155.182 51.2533 156.009 50.4949C156.785 49.7825 156.753 48.8666 155.937 47.9771Z"
                      fill="white"
                    />
                    <path
                      d="M168.767 59.9194L169.828 61.7017L162.611 65.9963L161.629 64.3455L162.515 63.6403C161.567 63.6106 160.543 62.9538 159.969 61.9896C158.978 60.3242 159.521 58.676 161.288 57.6241L165.803 54.9378L166.863 56.72L162.977 59.0325C161.604 59.8497 161.371 60.7206 161.962 61.714C162.631 62.8389 163.61 62.9882 164.983 62.171L168.767 59.9194Z"
                      fill="white"
                    />
                    <path
                      d="M174.911 68.3173C174.635 67.6589 174.935 66.9245 175.578 66.6549C176.221 66.3853 176.94 66.6922 177.216 67.3506C177.479 67.9777 177.194 68.7054 176.551 68.975C175.909 69.2447 175.174 68.9443 174.911 68.3173ZM165.214 71.2606L172.958 68.012L173.76 69.9246L166.016 73.1731L165.214 71.2606Z"
                      fill="white"
                    />
                    <path
                      d="M168.033 78.7011L167.399 76.7445L179.43 72.8423L180.064 74.799L168.033 78.7011Z"
                      fill="white"
                    />
                    <path
                      d="M169.77 86.0963C169.365 83.6992 170.874 81.9103 173.438 81.4775C176.02 81.0419 178.118 82.2394 178.54 84.7371C178.735 85.8938 178.421 86.9984 177.688 87.6566L182.935 86.7713L183.277 88.7996L170.805 90.9041L170.488 89.0266L171.756 88.6747C170.716 88.3331 169.982 87.3536 169.77 86.0963ZM171.724 86.2321C171.964 87.657 173.142 88.4064 174.634 88.1547C176.126 87.9029 177.01 86.8056 176.769 85.3807C176.529 83.9559 175.326 83.2624 173.851 83.5113C172.375 83.7602 171.483 84.8073 171.724 86.2321Z"
                      fill="white"
                    />
                    <path
                      d="M181.892 104.072L183.886 104.293L182.846 113.687L180.852 113.466L181.252 109.851L170.895 108.704L171.134 106.541L181.492 107.688L181.892 104.072Z"
                      fill="white"
                    />
                    <path
                      d="M174.12 116.465C176.625 117.226 177.8 119.555 177.044 122.044C176.288 124.532 174.015 125.814 171.51 125.053C169.005 124.292 167.83 121.962 168.586 119.474C169.342 116.985 171.615 115.703 174.12 116.465ZM173.517 118.449C172.053 118.004 170.774 118.646 170.359 120.012C169.944 121.379 170.649 122.624 172.113 123.068C173.577 123.513 174.856 122.871 175.271 121.505C175.686 120.139 174.981 118.894 173.517 118.449Z"
                      fill="white"
                    />
                    <path
                      d="M169.612 130.892C171.762 132.062 172.612 134.343 171.466 136.448C170.865 137.553 169.931 138.168 168.904 138.17L169.863 138.827L168.945 140.515L161.941 136.705C159.477 135.365 158.743 133.049 160.043 130.66C161.196 128.54 163.194 127.749 165.287 128.597L164.296 130.419C163.275 130.019 162.309 130.442 161.7 131.562C161.018 132.816 161.371 134.053 162.595 134.719L163.82 135.385C163.385 134.549 163.447 133.402 164.024 132.342C165.161 130.251 167.476 129.73 169.612 130.892ZM168.658 132.753C167.418 132.079 166.062 132.367 165.412 133.561C164.729 134.816 165.188 136.072 166.472 136.77C167.727 137.453 169.007 137.162 169.698 135.893C170.356 134.683 169.867 133.411 168.658 132.753Z"
                      fill="white"
                    />
                    <path
                      d="M155.691 144.577C157.287 142.654 159.805 142.468 161.806 144.128C163.834 145.811 164.138 148.294 162.564 150.191C160.957 152.127 158.642 152.282 156.627 150.611L156.143 150.209L160.168 145.331C158.932 144.505 157.857 144.629 156.978 145.689C156.25 146.565 156.113 147.423 156.576 148.116L155.349 149.595C154.164 148.148 154.291 146.265 155.691 144.577ZM161.245 149.118C162.026 148.176 161.994 147.177 161.156 146.217L158.464 149.462C159.353 150.2 160.452 150.073 161.245 149.118Z"
                      fill="white"
                    />
                    <path
                      d="M147.565 153.461L149.111 152.077L153.555 157.043L154.758 155.966L155.915 157.258L154.711 158.335L156.458 160.286L154.912 161.669L153.166 159.718L151.95 160.806L150.794 159.514L152.01 158.426L147.565 153.461Z"
                      fill="white"
                    />
                    <path
                      d="M141.773 158.213L143.513 157.084L150.396 167.695L148.642 168.833L145.737 164.355C145.739 165.326 145.198 166.305 144.186 166.962C142.446 168.09 140.821 167.584 139.637 165.758L136.824 161.423L138.564 160.294L141.108 164.216C141.876 165.4 142.831 165.591 143.715 165.018C144.813 164.305 144.956 163.119 144.271 162.063L141.773 158.213Z"
                      fill="white"
                    />
                    <path
                      d="M128.028 165.632C130.345 164.697 132.65 165.729 133.622 168.142C134.608 170.585 133.696 172.915 131.41 173.837C129.076 174.778 126.965 173.814 125.986 171.386L125.75 170.803L131.609 168.422C130.914 167.108 129.909 166.706 128.632 167.221C127.576 167.647 127.047 168.337 127.125 169.167L125.344 169.886C124.988 168.049 125.994 166.452 128.028 165.632ZM130.758 172.266C131.893 171.808 132.339 170.914 132.058 169.671L128.148 171.248C128.58 172.32 129.607 172.73 130.758 172.266Z"
                      fill="white"
                    />
                    <path
                      d="M116.01 178.384L115.584 176.511L116.33 176.341C117.789 176.01 118.524 175.024 118.162 173.432L117.258 169.453L119.281 168.994L121.137 177.167L119.231 177.6L118.844 176.433C118.68 177.324 118.025 178.048 116.931 178.297C116.649 178.361 116.36 178.392 116.01 178.384Z"
                      fill="white"
                    />
                    <path
                      d="M93.2582 183.669L94.4059 173.311L89.2355 172.738L89.4564 170.744L96.7895 171.557L95.4209 183.908L93.2582 183.669Z"
                      fill="white"
                    />
                    <path
                      d="M81.0866 168.677C83.4802 169.395 84.6349 171.64 83.8877 174.131C83.1307 176.655 80.9635 177.904 78.6024 177.196C76.1925 176.473 75.1453 174.402 75.8974 171.895L76.0781 171.292L82.1404 173.093C82.4187 171.632 81.8846 170.691 80.5656 170.295C79.4746 169.968 78.6312 170.177 78.1737 170.874L76.3337 170.322C77.2031 168.666 78.986 168.047 81.0866 168.677ZM79.0745 175.563C80.2469 175.915 81.1538 175.494 81.7106 174.348L77.6723 173.137C77.3402 174.244 77.8858 175.206 79.0745 175.563Z"
                      fill="white"
                    />
                    <path
                      d="M69.7456 164.657L71.621 165.543L68.775 171.569L70.2353 172.259L69.4948 173.827L68.0345 173.137L66.9165 175.504L65.0411 174.618L66.1591 172.251L64.6835 171.554L65.424 169.986L66.8997 170.683L69.7456 164.657Z"
                      fill="white"
                    />
                    <path
                      d="M64.1169 164.788L62.4627 163.715C62.8464 163.092 62.6399 162.411 61.8414 161.893C61.0285 161.366 60.3736 161.407 60.0405 161.92C59.8091 162.276 59.8279 162.653 60.3628 163.203L61.4376 164.326C62.5216 165.435 62.7461 166.432 62.015 167.559C61.1173 168.942 59.4112 169.01 57.7856 167.955C56.2027 166.928 55.7255 165.321 56.5997 163.943L58.2538 165.016C57.8794 165.625 58.0288 166.269 58.699 166.704C59.3835 167.148 59.9864 167.093 60.3288 166.566C60.588 166.166 60.4408 165.706 59.9344 165.175L58.8596 164.052C57.8519 163.013 57.6046 162.082 58.308 160.998C59.2335 159.572 61.0194 159.475 62.7591 160.604C64.5131 161.742 65.0146 163.405 64.1169 164.788Z"
                      fill="white"
                    />
                    <path
                      d="M50.5811 151.665L41.2387 159.86L37.9766 156.141C36.3623 154.301 36.3344 152.335 37.8935 150.967C38.9287 150.059 40.0736 149.869 41.2177 150.426C40.674 149.162 40.9781 148.013 42.0644 147.06C43.6619 145.659 45.5702 145.953 47.2629 147.882L50.5811 151.665ZM39.544 155.015L41.248 156.957L43.7912 154.727L42.0537 152.746C41.269 151.851 40.3589 151.767 39.5282 152.496C38.723 153.202 38.7369 154.095 39.544 155.015ZM43.3443 151.433L45.1715 153.516L47.702 151.296L45.8748 149.213C45.0676 148.293 44.1719 148.174 43.3284 148.914C42.5361 149.609 42.5484 150.525 43.3443 151.433Z"
                      fill="white"
                    />
                    <path
                      d="M30.7875 139.208L29.7669 137.402L37.0778 133.27L38.0231 134.942L37.1216 135.628C38.0682 135.678 39.0771 136.358 39.6292 137.335C40.5829 139.022 40.0038 140.658 38.2131 141.67L33.64 144.255L32.6195 142.449L36.5561 140.224C37.9473 139.438 38.2001 138.572 37.6313 137.566C36.9872 136.426 36.0117 136.255 34.6205 137.041L30.7875 139.208Z"
                      fill="white"
                    />
                    <path
                      d="M24.8354 130.685C25.0969 131.349 24.7802 132.077 24.1316 132.332C23.4831 132.587 22.7714 132.264 22.51 131.6C22.261 130.967 22.5618 130.246 23.2104 129.991C23.859 129.735 24.5864 130.052 24.8354 130.685ZM34.596 127.958L26.7812 131.034L26.0218 129.104L33.8366 126.029L34.596 127.958Z"
                      fill="white"
                    />
                    <path
                      d="M31.9366 120.444L32.527 122.414L20.4112 126.045L19.8208 124.074L31.9366 120.444Z"
                      fill="white"
                    />
                    <path
                      d="M30.3725 113.027C30.7238 115.433 29.1761 117.188 26.6024 117.564C24.0119 117.942 21.9404 116.698 21.5744 114.192C21.4049 113.031 21.7429 111.934 22.491 111.292L17.2259 112.061L16.9287 110.025L29.4439 108.198L29.719 110.082L28.4434 110.405C29.476 110.77 30.1883 111.766 30.3725 113.027ZM28.4222 112.848C28.2134 111.418 27.0521 110.643 25.555 110.862C24.0579 111.08 23.1501 112.158 23.3589 113.587C23.5676 115.017 24.7551 115.737 26.2354 115.521C27.7157 115.305 28.6309 114.278 28.4222 112.848Z"
                      fill="white"
                    />
                    <path
                      d="M18.6484 94.7777L16.66 94.5127L17.9089 85.1436L19.8973 85.4086L19.4166 89.0147L29.7462 90.3916L29.4587 92.5485L19.1291 91.1716L18.6484 94.7777Z"
                      fill="white"
                    />
                    <path
                      d="M26.7013 82.5538C24.2142 81.7365 23.0913 79.3813 23.9033 76.9103C24.7153 74.4393 27.0163 73.2091 29.5035 74.0264C31.9906 74.8437 33.1135 77.199 32.3015 79.67C31.4895 82.141 29.1885 83.3711 26.7013 82.5538ZM27.3488 80.5835C28.8023 81.0611 30.0953 80.4481 30.5411 79.0915C30.9869 77.7349 30.3095 76.4744 28.856 75.9968C27.4025 75.5191 26.1095 76.1321 25.6637 77.4887C25.2179 78.8454 25.8953 80.1058 27.3488 80.5835Z"
                      fill="white"
                    />
                    <path
                      d="M31.5286 68.2327C29.4048 67.0152 28.6068 64.7157 29.7989 62.6362C30.4246 61.5448 31.3722 60.9515 32.3991 60.972L31.4554 60.2938L32.4108 58.6272L39.3277 62.5926C41.7612 63.9877 42.4432 66.3187 41.0904 68.6784C39.8898 70.7727 37.875 71.5184 35.8014 70.6235L36.833 68.8243C37.8445 69.2474 38.8192 68.846 39.4534 67.7399C40.1636 66.501 39.8385 65.2565 38.6291 64.5632L37.4198 63.8699C37.8361 64.716 37.748 65.8609 37.1477 66.908C35.964 68.9727 33.6376 69.4418 31.5286 68.2327ZM32.5243 66.3933C33.7484 67.0951 35.1109 66.8377 35.7873 65.6578C36.4976 64.4189 36.0671 63.1532 34.7987 62.426C33.5599 61.7158 32.2733 61.9776 31.5546 63.2312C30.8697 64.4258 31.3297 65.7085 32.5243 66.3933Z"
                      fill="white"
                    />
                    <path
                      d="M45.7499 54.8618C44.1119 56.7491 41.5905 56.8793 39.6261 55.1744C37.636 53.4473 37.3877 50.9583 39.0034 49.0967C40.6525 47.1965 42.971 47.0927 44.9482 48.8087L45.4232 49.221L41.291 54.0082C42.5083 54.8621 43.5857 54.7618 44.4883 53.7218C45.2349 52.8616 45.3913 52.007 44.9439 51.3035L46.203 49.8527C47.3556 51.3258 47.1873 53.2055 45.7499 54.8618ZM40.2984 50.1981C39.4961 51.1225 39.5066 52.122 40.323 53.1006L43.0863 49.9165C42.2133 49.1588 41.1118 49.2608 40.2984 50.1981Z"
                      fill="white"
                    />
                    <path
                      d="M54.0704 46.161L52.4947 47.5096L48.1616 42.4467L46.9346 43.4968L45.8071 42.1794L47.0341 41.1293L45.3318 39.1403L46.9075 37.7917L48.6098 39.7807L49.8497 38.7195L50.9772 40.0369L49.7373 41.0981L54.0704 46.161Z"
                      fill="white"
                    />
                    <path
                      d="M59.9686 41.5413L58.2039 42.631L51.559 31.8691L53.3382 30.7706L56.1426 35.3125C56.1623 34.3413 56.7244 33.3749 57.7514 32.7408C59.5161 31.6512 61.1296 32.1934 62.2728 34.0449L64.9879 38.4422L63.2232 39.5318L60.7671 35.554C60.0258 34.3534 59.0755 34.141 58.1787 34.6947C57.0649 35.3824 56.8963 36.5654 57.5572 37.6358L59.9686 41.5413Z"
                      fill="white"
                    />
                    <path
                      d="M73.8707 34.4324C71.5328 35.3151 69.2522 34.2318 68.3335 31.7985C67.4027 29.3333 68.3666 27.0251 70.6727 26.1544C73.0265 25.2658 75.1159 26.2758 76.0407 28.7251L76.2628 29.3135L70.3525 31.5632C71.018 32.8928 72.0138 33.3164 73.3021 32.83C74.3676 32.4277 74.9113 31.75 74.8517 30.9184L76.6489 30.2399C76.9634 32.0836 75.9224 33.6578 73.8707 34.4324ZM71.289 27.7389C70.1439 28.1712 69.6783 29.0557 69.9318 30.3046L73.8761 28.8155C73.4677 27.734 72.45 27.3005 71.289 27.7389Z"
                      fill="white"
                    />
                    <path
                      d="M86.199 21.9468L86.5819 23.8292L85.8323 23.9817C84.3663 24.2799 83.6093 25.2493 83.9346 26.8485L84.7479 30.8466L82.7155 31.26L81.045 23.0472L82.9607 22.6575L83.3213 23.8332C83.5051 22.9458 84.1763 22.2368 85.2757 22.0132C85.5589 21.9556 85.8489 21.9313 86.199 21.9468Z"
                      fill="white"
                    />
                    <circle cx="95" cy="23" r="2" fill="#D9D9D9" />
                    <circle cx="107" cy="177" r="2" fill="#D9D9D9" />
                  </motion.svg>
                  <BsArrowUpRight className="text-gray-100  absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 text-6xl" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Section */}
      </main>
      <Footer_01 />
    </>
  );
}

export default Services;
