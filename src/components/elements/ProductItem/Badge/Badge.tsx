import BadgeProps from '@/components/elements/ProductItem/Badge/Badge.type';

export default function Badge({ bgColor, textColor, content }: BadgeProps) {
  return (
    <>
      <span
        className={`${bgColor} ${textColor} 
        text-[8px] px-[6px] py-[4px] rounded-[8px] mr-1`}
      >
        {content}
      </span>
    </>
  );
}
