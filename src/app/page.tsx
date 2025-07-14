import {
  FilteredTextCategory,
  ImageCategory,
  TextCategory,
} from '@/components/layouts/Category/Category';
import Header from '@/components/layouts/Header/Header';
import Navigation from '@/components/layouts/Navigation/Navigation';
import { ProductRecommendation } from '@/components/layouts/Recommendation/Recommendation';

export default async function Home() {
  return (
    <>
      <Header cartItemCount={4} />
      <Navigation />
      <ImageCategory />
      <TextCategory />
      <FilteredTextCategory />
      <ProductRecommendation
        title="온 가족이 함께 즐기는 텃밭 체험"
        subTitle="7월 한 달 간 체험 상품 20% 할인!"
        type="crop"
      />
    </>
  );
}
