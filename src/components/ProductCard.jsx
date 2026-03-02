const ProductCard = (props) => {

    // Define a cor e o design do texto com base na presença ou não de um preço com desconto.
    const color = props.discountedPrice ? "var(--light-gray)" : "var(--dark-gray)";
    // Se houver um preço com desconto, o preço original será riscado. Caso contrário, o preço será exibido normalmente.
    const textDecoration = props.discountedPrice ? "line-through" : "none";
    return (
        <>
            <div className="flex flex-column bg-white border-round shadow-3" style={{ width: "292px", height: "auto" }}>

                <img 
                    src={props.image} alt={props.name} 
                    className="w-full" 
                    style={{ aspectRatio: "1 / 1", objectFit: "cover" }} 
                />
                <div className="p-3">
                    <h3>{props.name}</h3>   
                    <section className="flex align-items-center gap-3">
                        <p style={{ color: color, fontSize: "24px", textDecoration: textDecoration }}>R${props.price}</p>
                        <span style={{ fontSize: "24px", color: "var(--dark-gray)" }}>{props.discountedPrice ? `R$${props.discountedPrice}` : ""}</span>
                    </section>
                </div>
            </div>
        </>
    );
}

export default ProductCard;