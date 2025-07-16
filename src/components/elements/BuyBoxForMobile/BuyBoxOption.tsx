'use client';

import { BuyBoxOptionType } from '@/components/elements/BuyBoxForMobile/BuyBoxOption.type';
import { useEffect, useState } from 'react';

export default function BuyBoxOption({ name, price, maxQuantity }: BuyBoxOptionType) {
  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(price);

  const minusCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const addCount = () => {
    if (count < maxQuantity) {
      setCount(count + 1);
    }
  };

  useEffect(() => {
    setTotalPrice(price * count);
  }, [price, count]);

  return (
    <div className="text-base flex flex-col gap-6 p-4 rounded-se-xl rounded-ss-xl">
      {/* 상품명 */}
      <div className="flex flex-col gap-2">
        <span className="text-xs text-oguogu-gray-4">상품명</span>
        <h3 className="text-xl max-w-full whitespace-nowrap overflow-hidden text-ellipsis">{name}</h3>
      </div>

      {/* 수량 선택 */}
      <div className="flex flex-col gap-2">
        <span className="text-xs text-oguogu-gray-4">수량 선택</span>
        <div className="flex justify-between">
          {/* 버튼 영역 */}
          <div className="flex gap-0 text-xs">
            <button
              type="button"
              className="w-7 h-7 border border-oguogu-gray-2 flex justify-center items-center cursor-pointer"
              onClick={minusCount}
            >
              <svg width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 0.996094H9" stroke="black" stroke-linecap="round" />
              </svg>
            </button>
            <p className="w-7 h-7 border-t border-b border-oguogu-gray-2 text-center content-center">1</p>
            <button
              type="button"
              className="w-7 h-7 border border-oguogu-gray-2 flex justify-center items-center cursor-pointer"
              onClick={addCount}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.00391 0.5C5.28005 0.5 5.50391 0.723858 5.50391 1V4.49609H9C9.27614 4.49609 9.5 4.71995 9.5 4.99609C9.5 5.27224 9.27614 5.49609 9 5.49609H5.50391V9C5.50391 9.27614 5.28005 9.5 5.00391 9.5C4.72776 9.5 4.50391 9.27614 4.50391 9V5.49609H1C0.723858 5.49609 0.5 5.27224 0.5 4.99609C0.5 4.71995 0.723858 4.49609 1 4.49609H4.50391V1C4.50391 0.723858 4.72776 0.5 5.00391 0.5Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>

          {/* 개당 금액 및 최대 구매 가능 수량 */}
          <div className="flex flex-col items-end">
            <div className="flex gap-2 text-xs">
              <span>개당</span>
              <div className="flex gap-1">
                <span>{price.toLocaleString()}</span>
                <span>원</span>
              </div>
            </div>
            <div className="text-[8px] text-oguogu-gray-3">
              <span>최대&nbsp;</span>
              <span>{maxQuantity}</span>
              <span>개 구매 가능</span>
            </div>
          </div>
        </div>
      </div>

      {/* 총 수량 및 최종 금액 */}
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <span>총 수량</span>
          <div className="flex gap-2">
            <span className="text-oguogu-main">{count}</span>
            <span>개</span>
          </div>
        </div>
        <div className="text-xl flex gap-2">
          <span className="text-oguogu-main">{totalPrice.toLocaleString()}</span>
          <span>원</span>
        </div>
      </div>
    </div>
  );
}
