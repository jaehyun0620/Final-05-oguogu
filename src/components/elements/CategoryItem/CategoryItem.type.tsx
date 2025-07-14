export interface ImageCategoryItemType {
  params: 'fruits' | 'verdure' | 'tuber' | 'fungi' | 'cereals';
  title: string;
}

export interface TextCategoryItemType {
  params: string;
  subParams?: string;
  title: string;
  isClick: boolean;
}
