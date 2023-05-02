import Image from "next/image";
import { type Product } from "../utils/ProductSchema";
import { Ratings } from "../utils/Ratings";

export const ProductCard2 = ({ product }: { product: Product }) => {
  return (
    <div className="flex flex-col gap-3 items-center justify-center">
      <Image
        src={product.thumbnail}
        alt={product.title}
        width={400}
        height={400}
      />

      <div className="flex flex-row">
        <div>{product.title.toUpperCase()}</div>
        <div>${product.price}</div>

        <Ratings product={product} />
      </div>
    </div>
  );
};
