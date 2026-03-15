export interface Item {
  id: number;
  amount: string;
}

export interface Recipe {
  id?: number;
  name: string;
  ingredients: Item[];
  directions: string[];
  rating?: number;
  tags?: string[];
  prepTime?: string;
  yields?: number;
}
