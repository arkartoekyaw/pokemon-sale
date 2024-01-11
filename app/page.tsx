import { products } from "@/utils/product";
import Search from "./components/search/Search";
import Image from "next/image";
import ProductCard from "./components/footer/ProductCard";
import Container from "./components/Container";

export default function Home() {
  return (
    <Container>
      <div className="relative pt-5  mx-auto flex items-center justify-center sm:w-3/4 md:w-2/3 lg:w-1/2">
        <Search />
      </div>
      <div className="container py-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2">
          {products.map((product: any)=>{
            return  <ProductCard data={product}/>
          })}
        </div>
      </div>

      <div className="w-[113px] h-6 justify-center items-center gap-[9px] flex flex-row mx-auto py-6">
        <div className="w-3.5 h-3.5 relative">
          <div className="w-3.5 h-3.5 left-0 top-0 absolute" />
          <Image src="/OIP.jpg" alt="arrow" width={20} height={20} />
        </div>
        <div className="text-stone-500 text-base font-medium font-['Poppins']">
          show more
        </div>
      </div>
    </Container>
  );
}
