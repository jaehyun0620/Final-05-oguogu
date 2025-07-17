import BuyBox from '@/components/elements/BuyBox/BuyBox';
// import Title from '@/components/elements/CommonTitleItem/Title';
import { PathCaseOne } from '@/components/elements/Path/Path';
import ProductLinkItem from '@/components/elements/ProductLink/ProductLink';
import Image from 'next/image';

{
  /* <BuyBoxOption type="crop" name="쫀득쫀득 대학 미백 찰옥수수 30개입" price={11800} maxQuantity={10} />
      <BuyBoxOption type="experience" name="감자 캐기 체험" price={10000} maxQuantity={4} />
      <BuyBoxOption type="gardening" name="초당옥수수 7월 수확" price={10000} /> */
}

export default function ProductDetail() {
  return (
    <div>
      <Image
        className="w-[320px] h-[320px] object-cover aspect-square"
        src="/images/crop/crop-001.png"
        alt="상품명"
        width={320}
        height={320}
      />
      <section className="px-4 pt-4">
        <section className="flex flex-col gap-4">
          <PathCaseOne title="옥수수" />
          {/* <Title title="쫀득쫀득 대학 미백 찰옥수수 30개입" content="올해 수확! 알갱이가 톡톡 터지는 맛있는 찰옥수수" /> */}
          {/* 가격 정보 */}
          <div>
            <s className="text-[16px] text-oguogu-gray-2">20,000원</s>
            <div>
              <span className="text-[20px] text-oguogu-main">59%</span>
              <span className="text-[20px] text-oguogu-black ml-2">11,800원</span>
            </div>
          </div>
        </section>
        <section>
          <div className="px-3 py-2 border-2 border-oguogu-main-dark rounded-[4px] flex items-center text-center justify-center">
            회원가입 하고 할인가로 구매하기
          </div>
        </section>
        <div>
          <div>
            <span>배송</span>
            <div>
              <span>3,000원</span>
              <span>벳지2개 넣어</span>
            </div>
          </div>
          <div>
            <span>텃밭</span>
            <div>
              <span>돌쇠네농산물</span>
              <span>인증된 판매자 입니다.</span>
            </div>
          </div>
          <div>
            <span>위치</span>
            <span>부산시 해운대구 반송로 456</span>
          </div>
          <div>
            <span>문의</span>
            <span>02-123-4567</span>
          </div>
        </div>
        <ProductLinkItem linkTitle="전체 농산물" />
      </section>
      <div className="flex items-center justify-center h-[1500px] border-4 border-oguogu-gray-4">상품 상세 이미지</div>
      <BuyBox />
    </div>
  );
}
