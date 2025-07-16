export interface BuyBoxOptionType {
  name: string;
  price: number;
  quantity?: number;
  maxQuantity?: number;
  buyQuantity?: number;
  type: 'crop' | 'experience' | 'gardening';
}
