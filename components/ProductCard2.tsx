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

      <div className="flex flex-col w-full leading-none">
        <div className="flex flex-row justify-between">
          <div className="font-bold text-base">
            {product.title.toUpperCase()}
          </div>
          {product.discountPercentage > 0 ? (
            <div className="font-bold text-base">
              <span className="line-through text-gray-500 dark:text-gray-400">
                ${product.price.toFixed(2)}
              </span>
              <span className="ml-2">
                $
                {(
                  product.price -
                  (product.price * product.discountPercentage) / 100
                ).toFixed(2)}
              </span>
            </div>
          ) : (
            <div className="font-bold text-base">
              ${product.price.toFixed(2)}
            </div>
          )}
        </div>

        <div className="mt-1 flex flex-row">
          <Ratings product={product} />
        </div>
      </div>
    </div>
  );
};
