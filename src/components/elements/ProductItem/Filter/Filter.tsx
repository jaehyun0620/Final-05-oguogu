'use client';

import SelectBox from '@/components/elements/SelectBox/SelectBox';
import { useState } from 'react';

export default function Filter() {
  const [selectedCategory, setSelectedCategory] = useState('default');

  const filterOptions = [
    { value: 'default', label: '카테고리' },
    { value: 'veggie', label: '채소' },
    { value: 'fruit', label: '과일' },
    { value: 'grain', label: '쌀 / 곡류' },
    { value: 'mushroom', label: '버섯' },
  ];

  return (
    <SelectBox
      label="카테고리"
      name="category"
      id="category"
      options={filterOptions}
      value={selectedCategory}
      onChange={setSelectedCategory}
      changeBoxSize={selectedCategory === 'default' || selectedCategory === 'grain' ? 'w-[74px]' : 'w-[48px]'}
    />
  );
}
