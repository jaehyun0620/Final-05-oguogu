import { ImageCategoryItem } from '@/components/elements/CategoryItem/CategoryItem';
import ProductLink from '@/components/elements/ProductLink/ProductLink';

export function ImageCategory() {
  return (
    <section className="flex flex-col items-center px-[30px] py-4">
      <div className="flex gap-5 pb-6 ">
        <ImageCategoryItem type="tuber" order="03" category="서류" />
        <ImageCategoryItem type="fruits" order="01" category="과실류" />
        <ImageCategoryItem type="verdure" order="02" category="채소류" />
        <ImageCategoryItem type="fungi" order="04" category="버섯류" />
        <ImageCategoryItem type="cereals" order="05" category="곡류" />
      </div>
      <ProductLink item="전체 상품" queryParams="" />
    </section>
  );
}

export function TextCategory() {
  return <></>;
}
