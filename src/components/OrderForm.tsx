// Заготовка для формы заказа

import './OrderForm.css';

function OrderForm () {
    return (
        <form className='order-form'>
            <h3 className="order-title">Оставьте заявку на расчет стоимости индивидуального заказа</h3>            
            <div className='form-fields'>
                <input type="text" placeholder="Ваше имя"/>
                <br/>
                <input type="text" placeholder="Ваш телефон"/>
                <br/>
                <input type="email" placeholder="Ваш email"/>
                <br/>
                <textarea placeholder="Информация по Вашему заказу (Пример:&nbsp;брошь гриб, сумка с инд. вышивкой)" rows={5}></textarea> 
            </div>            
            <button>отправить</button>
        </form>
    )
}

export default OrderForm;