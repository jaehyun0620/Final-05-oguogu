import CommonButtonProps from '@/components/elements/CommonButton/CommonButton.type';

export default function CommonButton({ feature, textSize, height }: CommonButtonProps) {
  return (
    <button
      className={`flex flex-1 items-center justify-center text-center
         bg-oguogu-main text-oguogu-white 
         ${textSize} ${height} 
         px-[24px] py-[6px] rounded-[4px]`}
    >
      {feature}
    </button>
  );
}
