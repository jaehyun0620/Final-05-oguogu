import { CategoryItemType } from '@/components/elements/CategoryItem/CategoryItem.type';
import Image from 'next/image';
import Link from 'next/link';

export default function CategoryItem({
  type,
  order,
  category,
}: CategoryItemType) {
  return (
    <Link
      href={`/category/product?type=${type}`}
      className="flex flex-col gap-2"
    >
      <Image
        src={`/images/category-${order}-${type}.webp`}
        alt={type}
        width={36}
        height={36}
      />
      <h3 className="text-[10px]">{category}</h3>
    </Link>
  );
}
