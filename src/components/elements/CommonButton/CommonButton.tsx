import CommonButtonProps from '@/components/elements/CommonButton/CommonButton.type';

export default function CommonButton({ feature, textSize, width, height }: CommonButtonProps) {
  return (
    <button
      className={`flex items-center justify-center text-center
         bg-oguogu-main text-oguogu-white 
         ${textSize} ${width} ${height} 
         px-[24px] py-[6px] rounded-[4px]`}
    >
      {feature}
    </button>
  );
}
