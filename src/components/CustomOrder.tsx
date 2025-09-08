import './CustomOrder.css';
import OrderForm from './OrderForm';

function CustomOrder () {
    return (
        <section id='custom-order'>
            <h2 className='section-title'>Индивидуальный заказ</h2>
            <div className='custom-card-contaner'>
                <article className='custom-card'>
                    <img src='products/custom/custom_order_01.jpg' alt='custom order example'/>
                    <p>Кошелёк, сумка, брошь</p>
                </article>
                <article className='custom-card'>
                    <img src='products/custom/custom_order_02.jpg' alt='custom order example'/>
                    <p>Футболка "Лис-программист"</p>
                </article>
                <div className='see-all-btn'>
                    <h3>Смотреть все</h3>
                    <img src='src\assets\images\ui\arrow.png'/>
                </div>
                <OrderForm/>
            </div>
        </section>
    )
}

export default CustomOrder;