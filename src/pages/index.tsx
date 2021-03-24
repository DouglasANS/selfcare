
import { Headercima } from "../components/Headertop";
import { Imgcenter } from "../components/Logoimg";
import { Produto } from "../components/Produtos";
import { Footer } from "../components/Footer";
import { Promocao } from "../components/promocao";
import { Final } from "../components/final";



export default function Home() {
  return (
    <div>
        <Headercima />
        <Imgcenter />
        <Promocao />
        <Produto />
        <Footer />
        <Final />

    </div>
   
    
  )
}
