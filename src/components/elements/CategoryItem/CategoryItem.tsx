import { ImageCategoryItemType } from '@/components/elements/CategoryItem/CategoryItem.type';
import Image from 'next/image';
import Link from 'next/link';

export function ImageCategoryItem({
  category,
  categoryTitle,
}: ImageCategoryItemType) {
  return (
    <Link
      href={`/product?type=${category}`}
      className="flex flex-col items-center gap-2"
    >
      <Image
        src={`/images/category-${category}.webp`}
        alt={categoryTitle}
        width={36}
        height={36}
      />
      <h3 className="text-[10px]">{categoryTitle}</h3>
    </Link>
  );
}

export function TextCategoryItem() {
  return <></>;
}
