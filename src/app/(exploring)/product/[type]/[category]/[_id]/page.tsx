import BuyBoxOption from '@/components/elements/BuyBoxForMobile/BuyBoxOption';

export default function ProductDetail() {
  return (
    <div>
      <h1>상품 상세 페이지</h1>
      <BuyBoxOption name="쫀득쫀득 대학 미백 찰옥수수 30개입" price={11800} maxQuantity={10} />
    </div>
  );
}
