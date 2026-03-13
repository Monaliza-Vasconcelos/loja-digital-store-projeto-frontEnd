import ProductCard from "./ProductCard";

const ProductListing = (props) => {
    return (
        <>
            <div className="product-listing-container">
                {props.products.map((product, index) => (
                    <ProductCard key={index} {...product} />
                ))}
            </div>
        </>
    );
}

export default ProductListing;