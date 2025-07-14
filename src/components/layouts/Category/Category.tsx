import CategoryItem from '@/components/elements/CategoryItem/CategoryItem';
import ProductLink from '@/components/elements/ProductLink/ProductLink';

export function ImageCategory() {
  return (
    <section className="flex flex-col items-center px-[30px] py-4">
      <div className="flex gap-5 pb-6 ">
        <CategoryItem type="fruit" order="01" category="과실류" />
        <CategoryItem type="vegetable" order="02" category="채소류" />
        <CategoryItem type="potato" order="03" category="서류" />
        <CategoryItem type="mushroom" order="04" category="버섯류" />
        <CategoryItem type="rice" order="05" category="곡류" />
      </div>
      <ProductLink item="전체 상품" queryParams="" />
    </section>
  );
}
