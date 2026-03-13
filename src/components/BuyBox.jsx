import ico from "../assets/star-icon.svg";
import ProductOptions from "./ProductOptions";

const BuyBox = ({
  children,
  name,
  reference,
  rating,
  price,
  priceDiscount,
  description,
  star1
}) => {

  const isDiscount = priceDiscount;

  const listagem = ["40", "41", "42"];

  return (
    <div className="buy-box">

      {children}

      <h2 className="buy-box__title">{name}</h2>

      <p className="buy-box__reference">{reference}</p>

      <div className="buy-box__stars">
        {Array.from({ length: star1 }).map((_, index) => (
          <span key={index} className="buy-box__star">
            <img src={ico} alt="ícone estrela" />
          </span>
        ))}
      </div>

      <p className="buy-box__rating">{rating}</p>

      <div className="buy-box__price-container">

        <p className={`buy-box__price ${isDiscount ? "buy-box__price--old" : ""}`}>
          R${price.toFixed(2)}
        </p>

        {priceDiscount && (
          <p className="buy-box__price buy-box__price--discount">
            R${priceDiscount.toFixed(2)}
          </p>
        )}

      </div>

      <p className="buy-box__description">
        {description}
      </p>

      <ProductOptions options={listagem} />

      <button className="buy-box__button">
        Comprar
      </button>

    </div>
  );
};

export default BuyBox;