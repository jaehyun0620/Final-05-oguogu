export interface BuyBoxOptionType {
  name: string;
  price: number;
  maxQuantity?: number;
  type: 'crop' | 'experience' | 'gardening';
}
