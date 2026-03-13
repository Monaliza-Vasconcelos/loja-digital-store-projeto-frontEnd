import { useState } from "react";

const ProductOptions = (props) => {

    const [option, setOption] = useState(null);

    const isCircle = props.shape === "circle";
    const isColor = props.type === "color";

    return (
        <div className="product-options">

            <p className="product-options__title">
                <strong>Tamanho e numeração</strong>
            </p>

            <div className="product-options__list">

                {props.options.map((item, index) => {

                    const isSelected = option === index;

                    return (
                        <div
                            key={index}
                            onClick={() => setOption(index)}
                            className={`
                                product-options__item
                                ${isCircle ? "product-options__item--circle" : ""}
                                ${isColor ? "product-options__item--color" : ""}
                                ${isSelected ? "product-options__item--selected" : ""}
                            `}
                            style={isColor ? { backgroundColor: item } : {}}
                        >
                            {!isColor && item}
                        </div>
                    );

                })}

            </div>

        </div>
    );
}

export default ProductOptions;