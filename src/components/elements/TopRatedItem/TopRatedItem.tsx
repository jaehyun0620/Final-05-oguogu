import { TopItem, TopRatedItemProps } from '@/components/elements/TopRatedItem/TopRatedItem.type';

// 인기 텃밭 TOP 10의 기본 데이터
const defaultTopItems: TopItem[] = [
  { id: '1', name: '돌쇠네농산물', rank: 1 },
  { id: '2', name: '중앙청과', rank: 2 },
  { id: '3', name: '홍자매농원', rank: 3 },
  { id: '4', name: '프레델', rank: 4 },
  { id: '5', name: '야채도사', rank: 5 },
  { id: '6', name: '프룻대디', rank: 6 },
  { id: '7', name: '마르쉐', rank: 7 },
  { id: '8', name: '오롯유통', rank: 8 },
  { id: '9', name: '투지팜', rank: 9 },
  { id: '10', name: '큰고을농원', rank: 10 },
];

// 랭크별 아이콘 반환 함수
const getRankIcon = (rank: number): string => {
  switch (rank) {
    case 1: return '🥇';
    case 2: return '🥈';
    case 3: return '🥉';
    default: return '';
  }
};

/**
 * 인기 텃밭 TOP 10 컴포넌트
 * @param items - 표시할 텃밭 리스트
 * @param title - 컴포넌트 제목
 * @param maxItems - 최대 표시 항목 수
 */
export default function TopRatedItem({
  items = defaultTopItems,
  title = '인기 텃밭 TOP 10',
  maxItems = 10,
}: TopRatedItemProps) {
  // 최대 maxItems 만큼만 표시
  const totalItems = items.slice(0, maxItems);

  // 리스트를 좌/우로 분할
  const midPoint = Math.ceil(totalItems.length / 2);
  const leftItems = totalItems.slice(0, midPoint);
  const rightItems = totalItems.slice(midPoint);

  return (
    <div className="w-full max-w-[320px] mx-auto p-2">
      <h2 className="text-lg mb-4 font-medium">{title}</h2>
      <div className="grid grid-cols-2 gap-2" role="list" aria-label="인기 텃밭 순위">
        {/* 왼쪽 리스트 */}
        <ul className="space-y-2">
          {leftItems.map((item: TopItem) => (
            <TopRatedListItem key={item.id} item={item} />
          ))}
        </ul>
        {/* 오른쪽 리스트 */}
        <ul className="space-y-2">
          {rightItems.map((item: TopItem) => (
            <TopRatedListItem key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

/**
 * 개별 텃밭 항목 렌더링 컴포넌트
 * @param item - 텃밭 정보
 */
export function TopRatedListItem({ item }: { item: TopItem }) {
  const handleClick = () => {
    console.log(`클릭된 텃밭: ${item.name}`);
    // 필요시 여기서 상세 페이지 이동 등 추가 작업 가능
  };

  return (
    <li
      className="flex items-center gap-2 p-3 bg-oguogu-white rounded-xl shadow-sm hover:bg-gray-50 hover:shadow-md transition-all cursor-pointer"
      role="listitem"
      tabIndex={0}
      onClick={handleClick}
    >
      <span className="flex items-center gap-1 min-w-[2rem]">
        <span className="text-md font-medium text-oguogu-main" aria-label={`${item.rank}위`}>
          {item.rank}
        </span>
        <span className="text-sm">{getRankIcon(item.rank)}</span>
      </span>
      <span className="text-xs truncate">{item.name}</span>
    </li>
  );
}
