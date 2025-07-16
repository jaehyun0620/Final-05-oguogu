import CommonButton from '@/components/elements/CommonButton/CommonButton';
import { PathCaseOne, PathCaseThree, PathCaseTwo } from '@/components/elements/Path/Path';
import Badge from '@/components/elements/ProductItem/Badge/Badge';
import Filter from '@/components/elements/ProductItem/Filter/Filter';
import Sort from '@/components/elements/ProductItem/Sort/Sort';
import SlideBanner from '@/components/layouts/Banner/SlideBanner';
import { FilteredTextCategory, ImageCategory, TextCategory } from '@/components/layouts/Category/Category';
import Header from '@/components/layouts/Header/Header';
import SearchHeader from '@/components/layouts/Header/SearchHeader';
import Navigation from '@/components/layouts/Navigation/Navigation';
import { ProductRecommendation } from '@/components/layouts/Recommendation/Recommendation';

export default async function Home() {
  return (
    <>
      <Header cartItemCount={4} />
      <Navigation />
      <SlideBanner />
      <ImageCategory />
      <TextCategory />
      <FilteredTextCategory />
      <ProductRecommendation
        title="온 가족이 함께 즐기는 텃밭 체험"
        subTitle="7월 한 달 간 체험 상품 20% 할인!"
        type="crop"
      />
      <SearchHeader cartItemCount={4} />
      <CommonButton feature="로그인" textSize="text-[16px]" width="w-[288px]" height="h-[43px]" />
      <CommonButton feature="자세히 보기" textSize="text-[10px]" width="w-[257px]" height="h-[22px]" />
      <CommonButton feature="장바구니 담기" textSize="text-[10px]" width="w-[109px]" height="h-[22px]" />
      <Badge content="제철 상품" bgColor="bg-oguogu-main-dark" textColor="text-oguogu-white" />
      <Badge content="인기 상품" bgColor="bg-oguogu-yellow" textColor="text-oguogu-black" />
      <Badge content="🗓️ 마감 D-5" bgColor="bg-ogugu-blue-light" textColor="text-oguogu-white" />
      <Sort />
      <Filter />
      <PathCaseOne title="옥수수" />
      <PathCaseTwo title="옥수수" params="crops" subParams="veggie" />
      <PathCaseThree title="옥수수" params="crops" subParams="veggie" />
    </>
  );
}
