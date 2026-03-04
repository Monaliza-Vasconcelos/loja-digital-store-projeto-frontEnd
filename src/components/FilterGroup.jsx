const FilterGroup = (props) => {

    return ( 
        <>
            <div>
                <div
					style={{ backgroundColor: "var(--dark-gray-2)", height: "1px" }} className="w-full ml-6 mt-3">
				</div>
                <h3 style={{fontSize:"14px", color:"var(--dark-gray-2)"}} className="ml-6 mt-2">{props.title}</h3>
                {props.options.map((option, index) => (
                    
                    <div className="flex align-items-center ml-6 mt-2 gap-2" key={index}>
                        
                        <input type={props.inputType} style={{width:"22px",height:"22px", accentColor: "var(--primary)"}} {...(option.value ? { value: option.value } : {})}/>
                        <p>{option.text}</p>
                        <label htmlFor="opção">{props.text}</label>
                    </div>
                    
                ))}
            </div>
        </>
     );
}
 
export default FilterGroup;