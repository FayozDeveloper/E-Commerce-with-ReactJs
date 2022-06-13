import React, {useState} from 'react';
import {FaShoppingCart} from 'react-icons/fa'
import Order from "./Order";

const showOrders = (props) => {
    let totalPrice = 0;
    props.orders.forEach(el => totalPrice += Number.parseFloat(el.price))
    return (
        <div>
            {props.orders.map((e)=>(
                <Order onDelete={props.onDelete} key={e.id} item={e}/>
            ))}
            <p className='totalPrice'>Сумма: { new Intl.NumberFormat().format(totalPrice)}$</p>
        </div>
    )
}

const showNothing = () => {
    return (
        <div className='empty'>
            <h2>Товаров нет </h2>
        </div>
    )
}

function Header(props) {

    let [cartOpen, setCartOpen] = useState(false)

    return (
        <header>
            <div>
                <span className='logo'>House Staff</span>
                <ul className='nav'>
                    <li>Про нас</li>
                    <li>Контакты</li>
                    <li>Кабинет</li>
                </ul>
                <FaShoppingCart onClick={()=> setCartOpen(cartOpen = !cartOpen)}  className={`shop-cart-button ${cartOpen && 'active'}`}/>

                {cartOpen && (
                    <div className='shop-cart'>
                        {props.orders.length > 0 ? showOrders(props) : showNothing()}
                    </div>
                )}
                {/*{props.orders.map((e)=>(*/}
                {/*    <Order key={e.id} item={e}/>*/}
                {/*))}*/}
            </div>
            <div className="presentation"></div>
        </header>
    );
}

export default Header;