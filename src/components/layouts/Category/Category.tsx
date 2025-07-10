import CategoryItem from '@/components/elements/CategoryItem/CategoryItem';
import Link from 'next/link';

export default function Category() {
  return (
    <section className="flex flex-col items-center px-[30px] py-4">
      <div className="flex gap-5 pb-6 ">
        <CategoryItem type="fruit" order="01" category="과실류" />
        <CategoryItem type="vegetable" order="02" category="채소류" />
        <CategoryItem type="potato" order="03" category="서류" />
        <CategoryItem type="mushroom" order="04" category="버섯류" />
        <CategoryItem type="rice" order="05" category="곡류" />
      </div>
      <Link href="/product" className="flex items-center gap-2 text-xs">
        <span className="content-center">전체 상품 보러 가기</span>
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
    </section>
  );
}
