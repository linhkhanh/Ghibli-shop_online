export interface ProductItem {
   id: string;
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

export interface CartItem {
   productId: string;
   price: number;
   discount?: number;
   title: string;
}

export interface NewCartItem {
   id: string;
   cartId: string;
   quantity: number;
   productId: string;
   title: string;
   price: number;
   discount: number;
   imageUrl: string;
}
