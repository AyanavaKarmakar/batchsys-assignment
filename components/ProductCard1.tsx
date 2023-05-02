import Image from "next/image";
import { Product } from "../utils/ProductSchema";
import { Ratings } from "../utils/Ratings";
import { HeartIcon } from "@radix-ui/react-icons";

export const ProductCard1 = ({ product }: { product: Product }) => {
  return (
    <div className="flex flex-col gap-3 items-center justify-center">
      <div className="flex flex-col gap-3 items-start justify-center m-5">
        <div className="relative">
          <Image
            className="rounded-lg h-44 w-72 object-cover"
            src={
              product.thumbnail
                ? product.thumbnail
                : product.images[0]
                ? product.images[0]
                : "https://i.dummyjson.com/data/products/1/4.jpg"
            }
            alt={product.title}
            width={500}
            height={500}
          />
          <span className="cursor-pointer bg-white border-2 border-solid border-black p-1.5 absolute top-3 right-3 rounded-full">
            <HeartIcon className="w-4 h-4 text-black" />
          </span>
        </div>

        <div className="flex flex-col w-full">
          <div className="font-bold text-xl">{product.title}</div>

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

          <div className="mt-1 flex flex-row">
            <Ratings product={product} />
          </div>

          <div>
            <button
              type="button"
              className="bg-primary-light dark:bg-primary-dark my-4 p-2 rounded-md text-lg w-full font-semibold"
            >
              Add to cart
            </button>
          </div>
          <div className="text-lg underline decoration-inherit text-center cursor-pointer font-semibold">
            Quick Shop
          </div>
        </div>
      </div>
    </div>
  );
};
