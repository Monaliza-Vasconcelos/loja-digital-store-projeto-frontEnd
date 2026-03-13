import { Link } from "react-router-dom";

const Information = (props) => {

    return ( 
        <div className="information">

            <h3 className="information__title">
                {props.title}
            </h3>

            <ul className="information__list">

                {props.information.map((item, index) => (
                    
                    <li key={index} className="information__item">
                        <Link 
                            to={item.link}
                            className="information__link"
                        >
                            {item.text}
                        </Link>
                    </li>

                ))}

            </ul>

        </div>
     );
}
 
export default Information;