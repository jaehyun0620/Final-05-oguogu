import { ImageCategoryItem } from '@/components/elements/CategoryItem/CategoryItem';
import ProductLink from '@/components/elements/ProductLink/ProductLink';

export function ImageCategory() {
  return (
    <section className="flex flex-col items-center px-[30px] py-4">
      <div className="flex gap-5 pb-6 ">
        <ImageCategoryItem category="tuber" categoryTitle="서류" />
        <ImageCategoryItem category="fruits" categoryTitle="과실류" />
        <ImageCategoryItem category="verdure" categoryTitle="채소류" />
        <ImageCategoryItem category="fungi" categoryTitle="버섯류" />
        <ImageCategoryItem category="cereals" categoryTitle="곡류" />
      </div>
      <ProductLink item="전체 상품" queryParams="" />
    </section>
  );
}

export function TextCategory() {
  return <></>;
}
