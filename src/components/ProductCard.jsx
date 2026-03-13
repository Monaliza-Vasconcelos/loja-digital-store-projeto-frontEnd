import { Link } from "react-router-dom";

const ProductCard = (props) => {

    // Define a cor e o design do texto com base na presença ou não de um preço com desconto.
    const color = props.discountedPrice ? "var(--light-gray)" : "var(--dark-gray)";
    // Se houver um preço com desconto, o preço original será riscado. Caso contrário, o preço será exibido normalmente.
    const textDecoration = props.discountedPrice ? "line-through" : "none";
    return (
        <>
            <Link to={`/product/${props.id}`} style={{ textDecoration: "none", color: "var(--dark-gray-2)"}}>
            <div className="product-card">

                <img 
                    src={props.image} alt={props.name} 
                    className="product-card__image"  
                />
                <div className="product-card__content">
                    <h3>{props.name}</h3>   
                    <section className="product-card__price-section">
                        <p className="product-card__price" style={{ color: color, textDecoration: textDecoration }}>R${props.price.toFixed(2)}</p>
                        <span className="product-card__discount-price">{props.discountedPrice ? `R$${props.discountedPrice}` : ""}</span>
                    </section>
                </div>
            </div>
            </Link>
        </>
    );
}

export default ProductCard;