export interface ProductItem {
   id: string;
   title: string;
   price: number;
   description: string;
   images: string[];
   movieId: string;
   discount?: number;
   stock: number;
}

export interface MovieCategory {
   id: string;
   title: string;
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
   email: string;
   role: string;
   address?: string;
   phone?: string;
   created_at: string;
   updated_at: string;
}

export interface ProductData {
   title: string;
   description: string;
   price: number;
   stock: number;
   discount?: number;
   movieId: string;
   images: (File | string)[]; // Can be File objects for new uploads or URLs for existing images
}

export interface RegisterResponse {
   success: boolean;
   message: string;
   user: User;
}
