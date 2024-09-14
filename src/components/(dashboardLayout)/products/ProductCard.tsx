import { FaArrowUp } from "react-icons/fa6";
import productImg from "@/assets/product.svg";
import Image from "next/image";
import { TProduct } from "@/types/type";


const ProductCard = ({product}:{product: TProduct}) => {
    return (
        <div className={`p-4 border border-primaryBlack rounded-xl font-roboto space-y-4`}>
            <div className="grid grid-cols-4">
                <Image src={productImg} alt={product.name} width={84} height={84} />
                <div className="col-span-3 flex flex-col gap-3">
                    <h1 className="text-xl font-bold">{product.name}</h1>
                    <p className="text-base"> ${product.price}</p>
                </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Short Description</h3>
            <p>{product.shortDescription}</p>
            </div>
            <div className="border border-[#334A55]/30 p-3 rounded-md space-y-3">
              <div className="flex justify-between items-center font-semibold">
                <p>Sales Count</p>
                <p className="flex items-center gap-2"><FaArrowUp size={16} /> {product.salesCount}</p>
              </div>
              <div className="border-t"></div>
              <div className="flex justify-between items-center font-semibold">
                <p >Remaining Products</p>
                {/* <p className=" rounded-xl min-w-16 border-primaryBlack"></p>  */}
                <div className="flex items-center gap-2">
                <p>{product.quantity}</p>
                </div>
              </div>
            </div>
        </div>
    )
}

export default ProductCard;
