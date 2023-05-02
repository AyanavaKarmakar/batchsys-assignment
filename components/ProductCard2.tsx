import { Product } from "../utils/ProductSchema";

export const ProductCard2 = ({ product }: { product: Product }) => {
  return (
    <div className="flex flex-col gap-3 items-center justify-center min-h-screen">
      <h1 className="text-6xl font-bold text-center">Product Card 2</h1>
    </div>
  );
};
