import ico from "../assets/star-icon.svg"
import ProductOptions from "./ProductOptions"


const BuyBox = ({
  children,
  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description}) => {

    const isDiscount = priceDiscount === true

    const listagem = [
        "40",
        "41",
        "42"
    ]

    return (
        <>
            <div className="flex flex-column gap-3">
                {children}
                <h2 style={{ fontSize: "32px", color: "var(--dark-gray)" }}>{name}</h2>
                <p style={{ fontSize: "12px", color: "var(--dark-gray-3)" }}>{reference}</p>
                <div className="flex gap-3">
                    <p style={{ fontSize: "14px", border: "4px", backgroundColor: "var(--warning)" }}>{stars}</p>
                    <img src={ico} alt="icone estrela" style={{backgroundColor:"var(--warning)"}}/>
                </div>
                <p style={{ fontSize: "14px", color: "var(--light-gray)" }}>{rating}</p>
                <div className="flex gap 3">
                    <p style={{
                        fontSize: isDiscount ? "16px" : "32px",
                        color: isDiscount ? "var(--light-gray-2)" : "var(--dark-gray-2)",
                        textDecoration: isDiscount ? "line-through" : "none"
                    }}>{price}</p>
                    {priceDiscount && (
                        <p style={{
                            fontSize:"32px",
                            color:"var(--dark-gray-2)"
                        }}>{priceDiscount}</p>
                    )
                    }
                </div>
                <p style={{
                    fontSize:"14px",
                    color:"var(--dark-gray-2)"
                }}>{description}</p>

                <ProductOptions options={listagem} />

                <button style={{backgroundColor:"var(--warning)",color:"var(--white)",fontSize:"16px", width:"100%",height:"50px", border:"none", borderRadius:"50px"}}>Comprar</button>
            
            </div>
        </>
    );
}

export default BuyBox;