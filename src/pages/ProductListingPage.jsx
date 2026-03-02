import ProductListing from "../components/ProductListing";

const ProductListingPage = () => {

    const products = [
{
	name: "Nome do produto 1",
	image: "https://picsum.photos/292/321",
	price: 200,
	discountedPrice: 149.9
},
{
	name: "Nome do produto 2",
	image: "https://picsum.photos/292/321",
	price: 49.9
},
{
	name: "Nome do produto 1",
	image: "https://picsum.photos/292/321",
	price: 200,
	discountedPrice: 149.9
},
{
	name: "Nome do produto 2",
	image: "https://picsum.photos/292/321",
	price: 49.9
},
{
	name: "Nome do produto 1",
	image: "https://picsum.photos/292/321",
	price: 200,
	discountedPrice: 149.9
},
{
	name: "Nome do produto 2",
	image: "https://picsum.photos/292/321",
	price: 49.9
},
{
	name: "Nome do produto 1",
	image: "https://picsum.photos/292/321",
	price: 200,
	discountedPrice: 149.9
},
{
	name: "Nome do produto 2",
	image: "https://picsum.photos/292/321",
	price: 49.9
},
{
	name: "Nome do produto 2",
	image: "https://picsum.photos/292/321",
	price: 49.9
}
];
    return ( 
        <>
            <ProductListing products={products} />
        </>
     );
}
 
export default ProductListingPage;