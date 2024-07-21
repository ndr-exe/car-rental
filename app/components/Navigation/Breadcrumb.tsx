'use client';

import { displaySubpageName } from '@/lib/helperFunctions';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Breadcrumb = () => {
  const pathname = usePathname();
  const page = displaySubpageName(pathname);

  return (
    <div>
      <h3 className="text-4xl font-bold mb-2.5">{page}</h3>
      <ul className="flex gap-1 font-semibold">
        <li>
          <Link href="/" className="transition-colors hover:text-primary">
            Home
          </Link>
        </li>
        <span> &#47; </span>
        <li>
          <p>{page}</p>
        </li>
      </ul>
    </div>
  );
};

export default Breadcrumb;
