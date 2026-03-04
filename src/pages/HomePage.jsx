import Gallery from "../components/Gallery";
import Section from "../components/Section";
import ProductListing from "../components/ProductListing";
import { products } from "../data/product";
import img1 from "/collection-1.png";
import img2 from "/collection-2.png";
import img3 from "/collection-3.png";

<assets />

const HomePage = () => {
    const image = [
        { "src": "public/home-slide-1.jpeg" },
        { "src": "public/home-slide-2.jpeg" },
        { "src": "public/home-slide-3.jpeg" },
        { "src": "public/home-slide-4.jpeg" },
        { "src": "public/home-slide-5.jpeg" },
        { "src": "public/home-slide-6.jpeg" },
        { "src": "public/home-slide-7.jpeg" },
        { "src": "public/home-slide-8.jpeg" }
    ];

    return (
        <>
            <div style={{textAlign:"center"}}>
                <Gallery
                    images={image}
                    width="1140px"
                    height="681px"
                    radius="10px"
                    className="container"
                />
            </div>
            <Section title="Coleção em destaque" titleAlign="center" >
                <div className="flex justify-content-center gap-4 mt-5">
                    <img className="collection-image" src={img1} alt="Coleção em destaque" />
                    <img className="collection-image" src={img2} alt="Coleção em destaque" />
                    <img className="collection-image" src={img3} alt="Coleção em destaque" />
                </div>
            </Section>
            <Section title="Produtos em alta" titleAlign="left" >
                <ProductListing products={products} />
            </Section>
        </>
    );
}

export default HomePage