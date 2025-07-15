export interface TopItem {
  id: string;
  name: string;
  rank: number;
}

export interface TopRatedItemProps {
  items?: TopItem[];
  title?: string;
  maxItems?: number;
}

