import { Link } from "react-router-dom";

const Section = (props) => {

  return (
    <>
      {props.children}

      {props.link && props.link.length > 0 ? (
        props.link.map((item, index) => (
          <div key={index} className="flex justify-content-between align-items-center p-6">
            
            <div className={`text-${props.titleAlign} flex-1`}>
              <h3 style={{ color: "var(--dark-gray-2)", fontSize: "24px" }}>
                {props.title}
              </h3>
            </div>

            <div className="text-right">
              <h3>{item.text}</h3>
              <Link
                to={item.href}
                style={{ color: "var(--primary)" }}
                target="_blank"
              >
                {item.href}
              </Link>
            </div>

          </div>
        ))
      ) : (
        <div className={`text-${props.titleAlign} pl-6`}>
          <h3 style={{ color: "var(--dark-gray-2)", fontSize: "24px" }}>
            {props.title}
          </h3>
        </div>
      )}
    </>
  );
};

export default Section;