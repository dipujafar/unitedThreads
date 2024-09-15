import productImg from "@/assets/product.svg";
import Image from "next/image";
import {  TQuoteProduct } from "@/types/type";


const ProductCard = ({product}:{product: TQuoteProduct}) => {
    return (
        <div className={`p-4 border border-primaryBlack rounded-xl font-roboto space-y-4`}>
            <div className="grid grid-cols-4">
                <Image src={productImg} alt={product.name} width={84} height={84} />
                <div className="col-span-3 flex flex-col gap-3">
                    <h1 className="text-xl font-bold">{product.name}</h1>
                </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Short Description</h3>
            <p>{product.shortDescription}</p>
            </div>
            
        </div>
    )
}

export default ProductCard;
