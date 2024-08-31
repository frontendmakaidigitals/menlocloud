import Image from 'next/image';
import Link from 'next/link';
 

const LogoDark = () => {
  return (
    <Link href='/'>
     <p className='text-xl font-bold'>menlo<span className='text-sky-500 italic'>cloud</span></p>
    </Link>
  );
};

export default LogoDark;
