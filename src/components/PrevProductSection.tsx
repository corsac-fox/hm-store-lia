import { mockProducts } from '../data/mockData.ts'
import './PrevProductSection.css'
import './ProductCard.css';

function PrevProductSection () {
    return (
        // атрибут id нужен для навигации по странице
        <section id='product-section'>
            <h2 className='section-title'>Товары</h2>
            <div className='card-contaner'>
                {mockProducts.map(product => (
                    <div className='card' key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <p>{product.name}</p>
                    {/* Для разделения числа на разряды - в будущем - 
                    https://codepen.io/IgorLesnevskiy/pen/QpBaBd - 
                    или что=то подобное */}
                        <p className='product-price'>{product.price} &#8381;</p>
                        <button>купить</button>
                    </div>
            
                ))}
                <div className='see-all-btn'>
                    <h3>Смотреть все</h3>
                    <br/>
                    <img src='src\assets\images\ui\arrow.png'/>
                </div>
            </div>        
        </section>
    )
}

export default PrevProductSection;