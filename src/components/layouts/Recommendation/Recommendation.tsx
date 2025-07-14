import { ProductRecommendationType } from '@/components/layouts/Recommendation/Recommendation.type';
import { ReactElement } from 'react';

export function ProductRecommendation({
  title,
  subTitle,
  type,
}: ProductRecommendationType) {
  let itemBlock: ReactElement;

  switch (type) {
    case 'crop':
      itemBlock = <div className="flex flex-row"></div>;
    case 'experience':
      itemBlock = <div className="flex flex-col w-full"></div>;
    case 'subscribe':
      itemBlock = <div></div>;
  }
  return (
    <section className="w-full min-w-[320px] max-w-[768px] pl-4 py-7">
      <div className="flex flex-col">
        <h2 className="text-xl">{title}</h2>
        <p className="text-sm text-oguogu-gray-4">{subTitle}</p>
      </div>
      {itemBlock}
    </section>
  );
}
