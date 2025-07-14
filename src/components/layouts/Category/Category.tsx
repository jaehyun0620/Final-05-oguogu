import { ImageCategoryItem } from '@/components/elements/CategoryItem/CategoryItem';
import ProductLink from '@/components/elements/ProductLink/ProductLink';

export function ImageCategory() {
  return (
    <section className="flex flex-col items-center px-[30px] py-4">
      <div className="flex gap-5 pb-6 ">
        <ImageCategoryItem params="tuber" title="서류" />
        <ImageCategoryItem params="fruits" title="과실류" />
        <ImageCategoryItem params="verdure" title="채소류" />
        <ImageCategoryItem params="fungi" title="버섯류" />
        <ImageCategoryItem params="cereals" title="곡류" />
      </div>
      <ProductLink queryParams="" linkTitle="전체 농산물" />
    </section>
  );
}

export function TextCategory() {
  return <></>;
}
