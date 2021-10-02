export interface ItemDTO {
  id: string;
  title: string;
  category?: string;
  measureValue?: number;
  unit?: 'kg' | 'g' | 'mg' | 'l' | 'ml';
  quantity: number | 1;
  price: number;
  relativePrice: number;
}
