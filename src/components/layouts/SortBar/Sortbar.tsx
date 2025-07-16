import CheckButton from '@/components/elements/CheckButton/CheckButton';
import Filter from '@/components/elements/ProductItem/Filter/Filter';
import { ProductSort, ReviewSort } from '@/components/elements/ProductItem/Sort/Sort';
import Image from 'next/image';

export function ProductSortbar() {
  return (
    <div className="flex justify-between items-center w-[320px] h-[48px] p-[16px]">
      <span>총 159개</span>
      <div>
        <ProductSort />
        <Filter />
      </div>
    </div>
  );
}
export function ReviewSortbar() {
  return (
    <div className="flex flex-row justify-between items-center w-[320px] h-[48px] p-[16px]">
      <div className="flex flex-row items-center gap-x-[8px]">
        <span>평점</span>
        <div className="flex flex-row gap-x-[2px]">
          <Image
            src="/images/iconImage/icon-star-filled.svg"
            alt="별 모양의 평점 아이콘"
            width={16}
            height={16}
            className="mb-[4px]"
          />
          <span>4.8</span>
        </div>
      </div>
      <ReviewSort />
    </div>
  );
}

export function QnaSortBar() {
  return (
    <div className="flex justify-between items-center w-[320px] h-[48px] p-[16px]">
      <span>총 15,642개</span>
      <div>
        <CheckButton children="내가 작성한 글" size={14} gap={2} />
      </div>
    </div>
  );
}
