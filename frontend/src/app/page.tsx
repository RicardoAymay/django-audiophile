import FeaturedProducts from "@/components/FeaturedProducts/FeaturedProducts";
import { Header } from "@/components/Headers/Header";
import Presentation from "@/components/Presentation/Presentation";
import ProductSection from "@/components/ProductSection/ProductSection";

export default function Home() {
  return (
    <>
      <Header />
        <main className="w-[1110px] mx-auto mt-0">
          <ProductSection /> {/* ver as formas ativas e rovers. Ordem corrigida. */}
          <FeaturedProducts /> {/* ver as formas ativas e rovers  */}
          <Presentation />
        </main>
    </>
  );
}
