import React from 'react'
import Link from "next/link"
import ImageIcon from '@/components/icons/ImageIcon';
import FolderIcon from '@/components/icons/FolderIcon';
import NewsIcon from '@/components/icons/NewsIcon';
import UsersIcon from '@/components/icons/UsersIcon';
import SideBarItem from './SideBarItem';

export type linkItem = {
  href: string;
  text: string;
  icon: React.JSX.Element;
};

const links: linkItem[] = [
  {
    href: '/admin/images-management',
    text: 'Images Management',
    icon: <ImageIcon className='h-4 w-4' />
  },
  {
    href: '/admin/foundation-project',
    text: 'Foundation Project',
    icon: <FolderIcon className='h-4 w-4' />
  },
  {
    href: '/admin/foundation-news',
    text: 'Foundation News',
    icon: <NewsIcon className='h-4 w-4' />
  },
  {
    href: '/admin/administrator-management',
    text: 'Administrator Management',
    icon: <UsersIcon className='h-4 w-4' />
  }
];

function SideBar() {
  return (
    <div className='hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40'>
      <div className='flex h-full max-h-screen flex-col gap-2'>
        <div className='flex h-[60px] items-center border-b px-6'>
          <Link className='flex items-center gap-2 font-semibold' href='/admin'>
            <span className=''>NCFoundation Admin</span>
          </Link>
        </div>
        <div className='flex-1 overflow-auto py-2'>
          <nav className='grid items-start px-4 text-sm font-medium'>
            {links.map((link, index) => (
              <SideBarItem key={index} data={link} />
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}


export default SideBar