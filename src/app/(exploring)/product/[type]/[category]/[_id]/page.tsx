import BuyBoxOption from '@/components/elements/BuyBoxForMobile/BuyBoxOption';

export default function ProductDetail() {
  return (
    <div>
      <h1>상품 상세 페이지</h1>
      <BuyBoxOption type="crop" name="쫀득쫀득 대학 미백 찰옥수수 30개입" price={11800} maxQuantity={10} />
      <BuyBoxOption type="experience" name="감자캐기 체험" price={10000} maxQuantity={4} />
      <BuyBoxOption type="gardening" name="초당옥수수 7월 수확" price={11800} />
    </div>
  );
}
