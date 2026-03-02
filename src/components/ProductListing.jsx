import ProductCard from "./ProductCard";

const ProductListing = (props) => {
    return (
        <>
            <div className="flex flex-wrap justify-content-center gap-4 mt-5">
                {props.products.map((product, index) => (
                    <ProductCard key={index} {...product} />
                ))}
            </div>
        </>
    );
}

export default ProductListing;