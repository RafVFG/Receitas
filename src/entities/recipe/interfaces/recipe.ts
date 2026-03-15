export interface Item {
  id: number;
  amount: string;
}

export interface Recipe {
  id?: number;
  idUser: number;
  name: string;
  description?: string;
  ingredients: Item[];
  directions: string[];
  rating?: number;
  tags?: string[];
  prepTime?: string;
  yields?: number;
}
