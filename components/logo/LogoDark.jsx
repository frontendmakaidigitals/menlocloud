import Link from "next/link";

const LogoDark = () => {
  return (
    <Link href="/" className="flex items-center gap-1">
      <img src={"/assets/img_placeholder/logo-icon.png"} width={40} />
      <p className="text-xl xl:text-2xl text-gray-200 font-bold font-Satoshi">
        Menlo<span className="text-sky-500 font-Clash font-[600]">Cloud</span>
      </p>
    </Link>
  );
};

export default LogoDark;
