import { Link } from "react-router-dom";

const Information = (props) => {

    return ( 
        <>
            <div>
                <h3 style={{color:"var(--white)"}}>{props.title}</h3>
                <ul className="list-none p-0 m-0">
                    {props.information.map((item, index) => (
                        <li key={index}><Link to={item.link}>{item.text}</Link></li>
                    ))}
                </ul>
            </div>
        </>
     );
}
 
export default Information;