import { Link } from "react-router-dom";

const Section = (props) => {

  return (
    <>
      {props.children}

      {props.link && props.link.length > 0 ? (
        props.link.map((item, index) => (
          <div key={index} className="section__header">
            
            <div className={`text-${props.titleAlign} flex-1`}>
              <h3 style={{ color: "var(--dark-gray-2)", fontSize: "24px" }}>
                {props.title}
              </h3>
            </div>

            <div>
              <h3>{item.text}</h3>
              <Link
                to={item.href}
                className="section__link-item"
              >
                {item.href}
              </Link>
            </div>

          </div>
        ))
      ) : (
        <div className={`text-${props.titleAlign} p-7`}>
          <h3 className="section-titleAlign">
            {props.title}
          </h3>
        </div>
      )}
    </>
  );
};

export default Section;