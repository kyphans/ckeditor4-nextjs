'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { linkItem } from '.';

function SideBarItem({ data }: { data: linkItem }) {
  const pathName = usePathname();
  return (
    <Link
      className={cn(
        'flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 transition-all hover:text-gray-900',
        pathName === data.href && 'bg-gray-800 text-white hover:text-gray-200'
      )}
      href={data.href}>
      {data.icon}
      {data.text}
    </Link>
  );
}

export default SideBarItem;
