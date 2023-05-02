export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export function isProduct(data: any): data is Product {
  return (
    typeof data.id === "number" &&
    typeof data.title === "string" &&
    typeof data.description === "string" &&
    typeof data.price === "number" &&
    typeof data.discountPercentage === "number" &&
    typeof data.rating === "number" &&
    typeof data.stock === "number" &&
    typeof data.brand === "string" &&
    typeof data.category === "string" &&
    typeof data.thumbnail === "string" &&
    Array.isArray(data.images) &&
    data.images.every((img: any) => typeof img === "string")
  );
}
