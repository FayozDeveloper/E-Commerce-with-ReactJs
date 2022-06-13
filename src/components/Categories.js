import React from 'react';
import categories from "./categoryData";


function Categories(props) {

    return (
        <div className='categories'>
            {categories.map((el)=> (
                <div key={el.key} onClick={() => props.chooseCategory(el.key)}>{el.name}</div>
            ))}
        </div>
    );
}

export default Categories;
