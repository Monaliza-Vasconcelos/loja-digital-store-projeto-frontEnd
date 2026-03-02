import Gallery from "../components/Gallery";
import Section from "../components/Section";
import ProductListing from "../components/ProductListing";
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

    const products = [
        {
            name: "Nike Air Force 1",
            image: "public/product-thumb-1.jpeg",
            price: 599.9,
            discountedPrice: 499.9
        },
        {
            name: "Nike Revolution 6",
            image: "public/product-thumb-2.jpeg",
            price: 349.9
        },
        {
            name: "Nike Air Max SC",
            image: "public/product-thumb-3.jpeg",
            price: 499.9,
            discountedPrice: 399.9
        },
        {
            name: "Nike Downshifter 12",
            image: "public/product-thumb-4.jpg",
            price: 329.9
        },
        {
            name: "Nike Court Vision Low",
            image: "public/product-thumb-5.jpg",
            price: 429.9,
            discountedPrice: 349.9
        },
        {
            name: "Nike Flex Experience Run",
            image: "public/product-thumb-6.jpg",
            price: 379.9
        },
        {
            name: "Nike Air Zoom Pegasus",
            image: "public/product-thumb-7.jpg",
            price: 799.9,
            discountedPrice: 649.9
        },
        {
            name: "Nike Tanjun",
            image: "public/product-thumb-8.jpg",
            price: 299.9
        },
        {
            name: "Nike React Infinity Run",
            image: "public/product-thumb-9.jpg",
            price: 899.9,
            discountedPrice: 749.9
        },
        {
            name: "Nike Court Royale",
            image: "public/product-thumb-10.jpg",
            price: 399.9
        },
        {
            name: "Nike Air Max Excee",
            image: "public/product-thumb-11.jpg",
            price: 699.9,
            discountedPrice: 549.9
        },
        {
            name: "Nike Run Swift",
            image: "public/product-thumb-12.jpg",
            price: 359.9
        }
    ]

    return (
        <>
            <Gallery
                images={image}
                width="1140px"
                height="681px"
                radius="10px"
                className="container"
            />
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