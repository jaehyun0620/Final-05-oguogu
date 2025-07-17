export default function Title({
  title = '제목',
  content = '부제목',
  textSize = '14',
}: {
  title?: string;
  content?: string;
  textSize?: string;
}) {
  return (
    <>
      <div className="flex flex-col w-[320px]">
        <p className="text-[20px] text-oguogu-black">{title}</p>
        <p className={`text-[${textSize}px] text-oguogu-gray-4`}>{content}</p>
      </div>
    </>
  );
}
