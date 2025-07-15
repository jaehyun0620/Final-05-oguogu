import Image from 'next/image';
import { CropItemType } from '@/components/elements/ProductItem/CropItem/CropItem.type';

export default function CropItem({ _id }: CropItemType) {
  return (
    <div className="flex flex-col gap-4 w-[140px] h-[330px]">
      <Image src={`/crop/${_id}`} alt="" width={140} height={186.67} />
    </div>
  );
}
