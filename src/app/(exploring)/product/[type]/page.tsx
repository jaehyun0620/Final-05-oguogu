import CropItem from '@/components/elements/ProductItem/CropItem/CropItem';

export default function ProductListByType() {
  return (
    <>
      <h1>1차 카테고리 상품 목록 페이지</h1>
      <h2>experience : 체험 상품</h2>
      <h2>gardening : 텃밭 상품</h2>
      <h2>crop : 농산물 상품</h2>
      <CropItem />
    </>
  );
}
