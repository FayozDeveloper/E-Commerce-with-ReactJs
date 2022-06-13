import React from 'react';
import {FaTrash} from 'react-icons/fa'

function Order(props) {
    return (
        <div className='item'>
            <img src={props.item.img} alt=""/>
            <h2>{props.item.title}</h2>
            <b>{props.item.price} $</b>
            <FaTrash className='delete-item' onClick={()=> props.onDelete(props.item.id)}/>
            <hr/>
        </div>
    );
}

export default Order;