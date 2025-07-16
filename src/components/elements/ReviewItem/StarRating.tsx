import Image from 'next/image';

export default function StarRating({ rating }: { rating: number }) {
  const stars = [...Array(5)].map((_, index) => {
    const isFilled = index < Math.round(rating);
    return (
      <Image
        key={index}
        src={isFilled ? '/images/iconImage/icon-star-filled.svg' : '/images/iconImage/icon-star-empty.svg'}
        alt={isFilled ? 'Filled star' : 'Empty star'}
        width={14}
        height={15}
      />
    );
  });
  return (
    <>
      <div className="flex items-center text-center gap-1">
        <div className="flex items-center">{stars}</div>
        <div className="leading-[17px]  text-center">{rating.toFixed(1)}</div>
      </div>
    </>
  );
}
