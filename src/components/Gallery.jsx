import { useState } from "react";
import "../Gallery.css";

const Gallery = (props) => {

    const [index, setIndex] = useState(0);

    if (!props.images || props.images.length === 0) {
        return null;
    }

    const nextImage = () => {
       if (index > 0) {
            console.log(index);
            setIndex((prev) => prev - 1);
        }
    }

    const prevImage = () => {
         if (index < props.images.length - 1) {
            console.log(index);
            setIndex((next) => next + 1);
        }
    }

    return (
        <>
            <div className="gallery-container">
                <div className={`gallery-${props.className}`} >

                    <img src={props.images[index].src} alt="Gallery" style={{ width: props.width, height: props.height, borderRadius: props.radius }}/>
                </div>
                {index > 0 && (
                    <i className={"next-button"} onClick={nextImage}>{"<"}</i>
                )}
                {index < props.images.length - 1 && (
                    <i className="prev-button" onClick={prevImage}>{">"}</i>
                )}
            </div>
        </>
    );
}

export default Gallery;