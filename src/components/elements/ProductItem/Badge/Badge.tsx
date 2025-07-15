export default function Badge({ bgColor, textColor, content }: BadgeProps) {
  return (
    <>
      <span
        className={`${bgColor} ${textColor} 
        text-[8px] px-[6px] py-[4px] rounded-[8px]`}
      >
        {content}
      </span>
    </>
  );
}
