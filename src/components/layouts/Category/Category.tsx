import {
  ImageCategoryItem,
  TextCategoryItem,
} from '@/components/elements/CategoryItem/CategoryItem';
import ProductLink from '@/components/elements/ProductLink/ProductLink';

/**
 * 이미지형 카테고리 컴포넌트
 * @returns {HTMLElement}
 */
export function ImageCategory() {
  return (
    <section className="flex flex-col items-center px-[30px] py-4 w-full min-w-[320px]">
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

/**
 * 텍스트형 1차 카테고리 컴포넌트
 * @description 상품 타입(type)별 구분
 * @returns {HTMLElement}
 */
export function TextCategory() {
  return (
    <nav className="flex min-w-[320px]">
      <TextCategoryItem
        params="crop"
        subParams=""
        title="농산물"
        isClick={true}
      />
      <TextCategoryItem
        params="experience"
        subParams=""
        title="체험"
        isClick={false}
      />
      <TextCategoryItem
        params="subscribe"
        subParams=""
        title="구독"
        isClick={false}
      />
    </nav>
  );
}

/**
 * 텍스트형 2차 카테고리 컴포넌트
 * @description 농산물 하위 카테고리(category)별 구분
 * @returns {HTMLElement}
 */
export function FilteredTextCategory() {
  return (
    <nav className="flex min-w-[320px]">
      <TextCategoryItem
        params="crop"
        subParams="tuber"
        title="서류"
        isClick={true}
      />
      <TextCategoryItem
        params="crop"
        subParams="fruits"
        title="과실류"
        isClick={false}
      />
      <TextCategoryItem
        params="crop"
        subParams="verdure"
        title="채소류"
        isClick={false}
      />
      <TextCategoryItem
        params="crop"
        subParams="fungi"
        title="버섯류"
        isClick={false}
      />
      <TextCategoryItem
        params="crop"
        subParams="cereals"
        title="곡류"
        isClick={false}
      />
    </nav>
  );
}
