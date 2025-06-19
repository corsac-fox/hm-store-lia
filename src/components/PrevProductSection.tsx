import { mockProducts } from '../data/mockData.ts'
import './PrevProductSection.css'
import './ProductCard.css';

function PrevProductSection () {
    return (
        <div className='product-section'>
            <h2>Товары</h2>
            <div className='card-contaner'>
                {mockProducts.map(product => (
                    <div className='card' key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <p>{product.name}</p>
                    {/* Для разделения числа на разряды - в будущем - 
                    https://codepen.io/IgorLesnevskiy/pen/QpBaBd - 
                    или что=то подобное */}
                        <p className='product-price'>{product.price} ₽</p>
                        <button>купить</button>
                    </div>
            
                ))}
                <div className='card-arrow'>
                    <h3>Смотреть все</h3>
                    <div>
                        <img src='src\assets\images\ui\arrow.png' ></img>
                    </div>                    
                </div>
            </div>        
        </div>
    )
}

export default PrevProductSection;