import { ProductLinkItemType } from '@/components/elements/ProductLinkItem/ProductLinkItem.type';
import Link from 'next/link';

export default function ProductLinkItem({
  queryParams = '',
  item,
}: ProductLinkItemType) {
  if (queryParams !== '') {
    queryParams = `/search?type=${queryParams}`;
  } else {
    queryParams = `/product`;
  }

  return (
    <Link href={queryParams} className="flex items-center gap-2 text-xs">
      <span className="content-center">
        <span className="text-oguogu-main">{item}</span> 보러 가기
      </span>
      <svg
        width="5"
        height="11"
        viewBox="0 0 10 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="rotate-180"
      >
        <path d="M9 0.5L1 9.22973L9 17.5" stroke="black" />
      </svg>
    </Link>
  );
}
