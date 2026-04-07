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
   id: string;
   cartId: string;
   quantity: number;
   productId: string;
   title: string;
   price: number;
   discount: number;
   imageUrl: string;
}

export interface OrderItem {
   id: string;
   orderId: string;
   productId: string;
   title: string;
   price: number;
   quantity: number;
   discount: number;
   imageUrl: string;
}

export interface Order {
   id: string;
   userId: string;
   totalAmount: number;
   status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
   createdAt: string;
}
