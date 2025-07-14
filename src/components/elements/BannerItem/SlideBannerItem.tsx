import { SlideBannerItemType } from '@/components/elements/BannerItem/SlideBannerItem.type';
import Image from 'next/image';
import Link from 'next/link';

export default function SlideBannerItem({
  order,
  size,
  productName,
  farmName,
  className,
}: SlideBannerItemType ) {
  return (
 // CHECKLIST
 // [ ] 링크 연결 
    <Link href={`/`}>
      <figure
        className={`relative w-[210px] h-[280px] overflow-hidden rounded-[12px] transform ${className}`}
      >
        <Image
          src={`/images/main-banner-${order}-${size}.webp`}
          alt={`${productName}${farmName}`}
          width={210}
          height={280}
          className="w-full h-full object-cover scale-105"
        />
        <figcaption className="absolute bottom-0 left-0 w-full text-oguogu-white text-center py-2">
          <h3 className="text-[20px] font-bold">{productName}</h3>
          <p className="text-[14px]">{farmName}</p>
        </figcaption>
      </figure>
    </Link>
  );
}
