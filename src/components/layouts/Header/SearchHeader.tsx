'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, Search, ShoppingCart } from 'lucide-react';
import TopRatedItem from '@/components/elements/TopRatedItem/TopRatedItem';
import RelatedKeywordItem from '@/components/elements/RelatedKeywordItem/RelatedKeywordItem';

interface SearchHeaderProps {
  cartItemCount?: number;
}

export default function SearchHeader({ cartItemCount = 0 }: SearchHeaderProps) {
  const [keyword, setKeyword] = useState('');

  const handleSearch = () => {
    if (keyword.trim()) {
      console.log('검색:', keyword); // 또는 router.push(`/search?keyword=${keyword}`)
    }
  };

  return (
    <>
    <header className="bg-amber-200 w-full max-w-[320px] mx-auto h-12 flex items-center justify-between relative px-2">
      <Link href="/" >
        <ChevronLeft size={28} strokeWidth={1.5} />
      </Link>

      {/* 검색 + 장바구니 */}
      <div className="flex gap-1 items-center">
        {/* 검색창 */}
        <div className="relative">
          <input
            type="search"
            placeholder="7월은 초당옥수수가 재철!"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            className="w-60 h-6 sm:w-48 pl-3 pr-8 py-1.5 text-sm rounded-full text-oguogu-black placeholder-oguogu-gray-3 focus:outline-none focus:ring-1 focus:ring-oguogu-main"
          />
          <button
            onClick={handleSearch}
            className="absolute top-1/2 right-2 -translate-y-1/2 text-oguogu-black"
          >
            <Search size={20} />
          </button>
        </div>

        {/* 장바구니 + 뱃지 */}
        <div className="relative p-2 mr-2">
          <Link href="/cart">
            <ShoppingCart size={20} />
            {cartItemCount > 0 && (
              <span className="absolute top-0.5 right-0.5 bg-oguogu-main text-oguogu-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                {cartItemCount > 99 ? '99+' : cartItemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
    <TopRatedItem />
    <RelatedKeywordItem keywords={['옥수수', '토마토', '고구마', '감자']} />
    </>
  );
}
