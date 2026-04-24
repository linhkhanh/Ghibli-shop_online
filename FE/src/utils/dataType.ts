export interface ProductItem {
   id: number;
   title: string;
   price: number;
   description: string;
   images: string[];
   movieId: number;
   discount: number;
   stock: number;
}

export interface MovieCategory {
   id: number;
   title: string;
   img: string;
}

export interface ProductByCategory extends ProductItem {
   movieTitle: string;
   movieImg: string;
}

export interface ItemInfo {
   quantity: number;
   productId: number;
   title: string;
   price: number;
   discount: number;
   imageUrl: string;
}

export interface CartItem extends ItemInfo {
   id: number;
   cartId: number;
}

export interface CartInfo {
   cartId: number;
   items: CartItem[];
   totalPrice: number;
}
export interface OrderItem extends ItemInfo {
   id: number;
   orderId: number;
   status: OrderStatus;
}

export interface Order {
   id: number;
   userId: number;
   totalAmount: number;
   paymentMethod?: string;
   status: OrderStatus;
   createdAt: string;
}

export interface User {
   id: number;
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
   movieId: number;
   images: (File | string)[]; // Can be File objects for new uploads or URLs for existing images
}

export interface RegisterResponse {
   success: boolean;
   message: string;
   user: User;
}

export interface ProductPayload {
   title: string;
   description: string;
   price: number;
   stock: number;
   discount?: number;
   movie_id: number;
   images: string[];
}
export interface UpdateProductPayload extends ProductPayload {
   id: number;
}

export type OrderStatus = "pending" | "processing" | "shipped" | "delivered";
