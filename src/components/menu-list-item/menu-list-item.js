import React from 'react';
import './menu-list-item.scss';

const MenuListItem = ({menuItem, addedToCart}) => {

    const {title, price, url, category, categoryImg = null} = menuItem;
    return (
        <>
            <li className="menu__item">
                <div className="menu__category--img">
                    <img src={categoryImg} alt={category}/>
                </div>
                <div className="menu__title">{title}</div>
                <img className="menu__img" src={url} alt={title} />
                <div className="menu__category">Category: <span>{category}</span></div>
                <div className="menu__price">Price: <span>{price}</span></div>
                <button onClick={() => addedToCart()} className="menu__btn">Add to cart</button>
            </li>
        </>
    )
}

export default MenuListItem;
