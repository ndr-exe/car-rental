import Link from 'next/link';

const UserOptions = () => {
  return (
    <ul className="hidden lg:flex gap-6 font-medium">
      <li className="self-center">
        <Link href={'/'} className="hover:text-primary">
          Sign in
        </Link>
      </li>
      <li className="">
        <Link href={'/'} className="w-32 h-12 grid place-content-center button-primary ">
          Register
        </Link>
      </li>
    </ul>
  );
};

export default UserOptions;
