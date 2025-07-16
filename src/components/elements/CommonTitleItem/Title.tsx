export default function Title({ title = '제목', content = '부제목' }: { title?: string; content?: string }) {
  return (
    <article className="flex flex-col w-[320px] h-[96px] px-4 py-7">
      <p className="text-[20px] text-oguogu-black">{title}</p>
      <p className="text-[14px] text-oguogu-gray-4">{content}</p>
    </article>
  );
}
