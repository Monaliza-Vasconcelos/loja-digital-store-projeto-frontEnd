const FilterGroup = (props) => {

    return ( 
        <div className="filter-group">

            <div className="filter-group__divider"></div>

            <h3 className="filter-group__title">
                {props.title}
            </h3>

            {props.options.map((option, index) => (

                <div className="filter-group__option" key={index}>

                    <input 
                        type={props.inputType}
                        className="filter-group__input"
                        {...(option.value ? { value: option.value } : {})}
                    />

                    <p className="filter-group__text">
                        {option.text}
                    </p>

                    <label className="filter-group__label">
                        {props.text}
                    </label>

                </div>

            ))}

        </div>
    );
}

export default FilterGroup;