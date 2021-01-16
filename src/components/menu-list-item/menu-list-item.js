import React from 'react';
import './menu-list-item.scss';
import meat from '../../assets/images/meat.png';
import pizza from '../../assets/images/pizza.png';
import salads from '../../assets/images/salads.png';

const MenuListItem = ({menuItem, addedToCart}) => {

    const {title, price, url, category } = menuItem;

    const allCategory = {
        meat, pizza, salads,
    };

    const categoryImage = <img src={allCategory[category]} alt={category}/>

    return (
        <>
            <li className="menu__item">
                <div className="menu__category--img">
                    {categoryImage}
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
