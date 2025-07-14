'use client';

import Link from 'next/link';
import { Menu, Search, ShoppingCart } from 'lucide-react';

interface HeaderProps {
  cartItemCount?: number;
}

export default function Header({ cartItemCount = 0 }: HeaderProps) {
  return (
    <header className="bg-amber-200 w-full max-w-[320px] mx-auto h-12 flex items-center justify-between relative">
      {/* 햄버거 메뉴 */}
      <Link href="/menu" className="p-2">
        <Menu size={24} />
      </Link>

      {/* 사이트 이름 */}
      <h1 className="absolute left-1/2 -translate-x-1/2 text-base">오구텃밭</h1>

      {/* 검색 */}
      <div className="flex gap-1 items-center ">
        <Link href="/search" className="p-2">
          <Search size={20} />
        </Link>

        {/* 장바구니 아이콘 + 뱃지 */}
        <div className="relative p-2 mr-2">
          <Link href="/cart">
            <ShoppingCart size={20} />
            {cartItemCount > 0 && (
              <span className="absolute top-0.25 right-0.5 bg-oguogu-main text-oguogu-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                {cartItemCount > 99 ? '99+' : cartItemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
