import RelatedKeywordItemProps from '@/components/elements/RelatedKeywordItem/RelatedKeywordItem.type';
import { Search } from 'lucide-react';

/**
 * 자동완성 관련 키워드 리스트 UI 컴포넌트
 * 
 * @param keywords - 자동완성으로 보여줄 키워드 배열
 */
export default function RelatedKeywordItem({ keywords }: RelatedKeywordItemProps) {
  return (
    <div className="w-full max-w-[320px] mx-auto p-2">
      <ul className="space-y-2">
        {/* 키워드가 없을 때 안내 메시지 */}
        {keywords.length === 0 ? (
          <li className='text-oguogu-gray-4 text-sm px-2 py-1'>관련 키워드가 없습니다.</li>
        ) : (
          keywords.map((keyword, keywordIndex) => (
            <li key={keywordIndex} className="flex items-center gap-2 text-oguogu-black" tabIndex={0}>
              <Search className="w-4 h-4 text-oguogu-gray-3" />
              <span className="text-sm">{keyword}</span>
          </li>
          ))
        )}
      </ul>
    </div>
  );
}
