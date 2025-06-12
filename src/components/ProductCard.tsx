// Заготовка для карточки товара

import './ProductCard.css';

function ProductCard () {
    return (
        <span className='card'>
            <img src='\products\shopper-bag.jpg' alt='Шоппер с курочкой' />
            <p>Шоппер с курочкой</p>
            <p className='product-price'>2 700 ₽</p>
            <button>купить</button>
        </span>
    )
}

export default ProductCard;