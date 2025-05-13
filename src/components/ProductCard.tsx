// Заготовка для карточки товара

import './ProductCard.css';

function ProductCard () {
    return (
        <span className='card'>
            <img src='src\assets\photos\products\shopper-bag.jpg' alt='product-photo' width={211} height={281}></img>
            <p>Шоппер с курочкой</p>
            <p className='product-price'>2 700 ₽</p>
            <button>купить</button>
        </span>
    )
}

export default ProductCard;