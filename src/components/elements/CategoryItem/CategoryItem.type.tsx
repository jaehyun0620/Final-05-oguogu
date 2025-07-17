export interface ImageCategoryItemType {
  params: 'fruit' | 'veggie' | 'grain' | 'mushroom';
  title: string;
}

export interface TextCategoryItemType {
  params: string;
  subParams?: string;
  title: string;
  isClick: boolean;
}
