import Link from 'next/link';

const Navigation = () => {
  return (
    <div className="bg-[#FFC21D] p-4 flex justify-center h-13">
      <div className="flex space-x-4 button">
        <Link className='btn' href="/home">
          Home
        </Link>
        <div className='bg-black  w-[2px]'></div>
        <Link className='btn' href="/inplay">
          In-Play
        </Link>
        <div className='bg-black  w-[2px]'></div>
        <Link className='btn' href="/multimarket">
          Multi-Market
        </Link>
        <div className='bg-black  w-[2px]'></div>
        <Link className='btn' href="/cricket">
          Cricket
        </Link>
        <div className='bg-black  w-[2px]'></div>
        <Link className='btn' href="/tennis">
          Tennis
        </Link>
        <div className='bg-black  w-[2px]'></div>
        <Link className='btn' href="/casino">
          Casino
        </Link>
        <div className='bg-black  w-[2px]'></div>
        <Link className='btn' href="/soccer">
          Soccer
        </Link>
        <div className='bg-black  w-[2px]'></div>
        <Link className='btn' href="/horseracing">
          Horse Racing
        </Link>
        <div className='bg-black  w-[2px]'></div>
        <Link className='btn' href="/basketball">
          Basketball
        </Link>
        <div className='bg-black  w-[2px]'></div>
        <Link className='btn' href="/virtualsports">
          Virtual Sports
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
