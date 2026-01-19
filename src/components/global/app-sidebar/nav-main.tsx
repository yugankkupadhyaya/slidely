'use client';
import React from 'react';
import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '../../ui/sidebar';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import path from 'path';

type SubItem = {
  title: string;
  url: string;
};

type NavItem = {
  title: string;
  url: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  isActive?: boolean;
  items: SubItem[];
};

type Props = {
  items: NavItem[];
};

const NavMain = ({ items }: Props) => {
  const pathname = usePathname();

  const isActive = pathname.includes('TEST');

  return (
    <SidebarGroup className="p-0">
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton
            asChild
            tooltip="TEST"
            className={`
           ${pathname.includes('TEST') && 'bg-background-80'}
            `}
          >
            <Link
              href="TEST"
              className={`
                text-lg $pathname.includes('TEST')
                font-bold
              `}
            >
              <span>Test Sidebar item</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
};

export default NavMain;
