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

export interface ItemInfo {
   quantity: number;
   productId: string;
   title: string;
   price: number;
   discount: number;
   imageUrl: string;
}

export interface CartItem extends ItemInfo {
   id: string;
   cartId: string;
}

export interface OrderItem extends ItemInfo {
   id: string;
   orderId: string;
   status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
}

export interface Order {
   id: string;
   userId: string;
   totalAmount: number;
   status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
   createdAt: string;
}

export interface User {
   id: string;
   name: string;
   role: "customer" | "admin";
   email: string;
   phone?: string;
   address?: string;
}
