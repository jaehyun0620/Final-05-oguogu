import { ImageCategoryItemType } from '@/components/elements/CategoryItem/CategoryItem.type';
import Image from 'next/image';
import Link from 'next/link';

export function ImageCategoryItem({ type, category }: ImageCategoryItemType) {
  return (
    <Link href={`/product?type=${type}`} className="flex flex-col items-center gap-2">
      <Image src={`/images/category-${type}.webp`} alt={type} width={36} height={36} />
      <h3 className="text-[10px]">{category}</h3>
    </Link>
  );
}

export function TextCategoryItem() {
  return <></>;
}
