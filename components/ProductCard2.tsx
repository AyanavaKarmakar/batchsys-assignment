import Image from "next/image";
import { type Product } from "../utils/ProductSchema";
import { Ratings } from "../utils/Ratings";

export const ProductCard2 = ({ product }: { product: Product }) => {
  return (
    <div className="flex flex-col gap-3 items-start justify-center m-5">
      <Image
        className="rounded-lg h-80 w-96 object-cover"
        src={product.thumbnail}
        alt={product.title}
        width={400}
        height={400}
      />

      <div className="flex flex-col w-full">
        <div className="flex flex-row justify-between">
          <div className="font-bold text-xl">{product.title.toUpperCase()}</div>
          <div className="font-bold text-xl">${product.price}</div>
        </div>

        <div className="mt-1 flex flex-row">
          <Ratings product={product} />
        </div>
      </div>
    </div>
  );
};
