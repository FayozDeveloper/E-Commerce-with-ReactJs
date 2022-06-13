import React from 'react'
import Item from "./item";

function Items  (props)  {

    return(
        <main>
            {props.items.map(e => (
                <Item onShowItem={props.onShowItem} key={e.id} item={e} onAdd={props.onAdd}/>
            ))}
        </main>
    )
}
export default Items