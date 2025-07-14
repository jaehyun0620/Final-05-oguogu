import { ImageCategoryItemType } from '@/components/elements/CategoryItem/CategoryItem.type';
import Image from 'next/image';
import Link from 'next/link';

export function ImageCategoryItem({ params, title }: ImageCategoryItemType) {
  return (
    <Link
      href={`/product/crop/${params}`}
      className="flex flex-col items-center gap-2"
    >
      <Image
        src={`/images/category-${params}.webp`}
        alt={title}
        width={36}
        height={36}
      />
      <h3 className="text-[10px]">{title}</h3>
    </Link>
  );
}

export function TextCategoryItem() {
  return <></>;
}
