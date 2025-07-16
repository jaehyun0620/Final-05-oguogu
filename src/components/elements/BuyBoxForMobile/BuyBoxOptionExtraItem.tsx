import { BuyBoxOptionExtraItemType } from '@/components/elements/BuyBoxForMobile/BuyBoxOptionExtraItem.type';

export default function BuyBoxOptionExtraItem({ date, time, count }: BuyBoxOptionExtraItemType) {
  console.log(date, time, count);
  return (
    <>
      {count > 0 ? (
        <label className="cursor-pointer">
          <input type="radio" name="timeOption" value={`${date} ${time}`} className="peer hidden" />
          <div className="w-[140px] border peer-checked:border-oguogu-main-dark  border-oguogu-gray-2 rounded-lg p-3">
            <p className="text-sm text-gray-800">{date}</p>
            <p className="text-sm text-gray-500">{time}</p>
            <p className="mt-2 text-black font-bold">{count} 자리 남음</p>
          </div>
        </label>
      ) : (
        <label className="cursor-not-allowed">
          <input type="radio" name="timeOption" value="2025-07-27-10" className="hidden" disabled />
          <div className="w-[140px] border border-oguogu-gray-2 bg-oguogu-gray-1 rounded-lg p-3">
            <p className="text-sm text-gray-800">{date}</p>
            <p className="text-sm text-gray-500">{time}</p>
            <p className="mt-2 text-black font-bold">품절</p>
          </div>
        </label>
      )}
    </>
  );
}
