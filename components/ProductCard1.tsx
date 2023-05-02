import { Product } from "../utils/ProductSchema";

export const ProductCard1 = ({ product }: { product: Product }) => {
  return (
    <div className="flex flex-col gap-3 items-center justify-center">
      <h1 className="text-6xl font-bold text-center">Product Card 1</h1>
    </div>
  );
};
