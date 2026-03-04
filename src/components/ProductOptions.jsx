import { useState } from "react";

const ProductOptions = (props) => {

    const [option, setOption] = useState(null)

    const borderRadius = props.shape === "circle" ? "50%" : props.radius;

    const isCircle = props.shape === "circle"

    const isColor = props.type == "color"

    return (
        <>
            <div className="flex flex-column gap-3">
                <p><strong>Tamanho e numeração</strong></p>
                <div className="flex">
                    {props.options.map((item, index) => {
                        const isSelected = option === index;
                        return <div
                            onClick={() => setOption(index)}
                            key={index}
                            style={{
                                height: isCircle ? "31px" : "46px",
                                width: isCircle ? "31px" : "46px",
                                minWidth: isCircle ? "31px" : "46px",
                                borderRadius: borderRadius,
                                border: isSelected
                                    ? "2px solid var(--primary)"
                                    : "1px solid var(--light-gray-2)",
                                backgroundColor: isColor ? item : "transparent",
                                fontSize: !isColor ? "24px" : undefined,
                                color: !isColor ? "var(--dark-gray-2)" : undefined,

                            }}
                            className="flex justify-content-center align-items-center cursor-pointer"
                        >{!isColor && item}</div>
                    })}
                </div>
            </div>

        </>
    );
}

export default ProductOptions;