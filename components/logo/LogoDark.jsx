import Link from "next/link";

const LogoDark = () => {
  return (
    <Link href="/">
      <p className="text-xl xl:text-3xl text-gray-200 font-bold font-Satoshi">
        Menlo<span className="text-sky-500 font-Clash font-[600]">cloud</span>
      </p>
    </Link>
  );
};

export default LogoDark;
