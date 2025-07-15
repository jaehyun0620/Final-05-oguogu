export interface CropItemExtraType {
  likeCount: string;
  isBest: boolean;
  isNew: boolean;
}

export interface CropItemType {
  _id: number;
  seller_id?: string;
  originPrice: string;
  dcRate?: string;
  finPrice?: string;
  name: string;
  extra?: CropItemExtraType;
}
