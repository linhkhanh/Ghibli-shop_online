export interface ProductItem {
   id: number;
   title: string;
   price: number;
   description: string;
   image: string;
   movieId: string;
   discount?: number;
   stock: number;
}

export interface MovieCategory {
   id: string;
   name: string;
   img: string;
}

export interface ProductsByCategory {
   movie: MovieCategory;
   products: ProductItem[];
}
