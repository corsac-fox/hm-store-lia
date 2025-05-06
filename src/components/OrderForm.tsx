// Заготовка для формы заказа

import './OrderForm.css';

function OrderForm () {
    return (
        <form>
            <div className="order-title">Оставьте заявку на расчет стоимости индивидуального заказа</div>            
            <div className='form-fields'>
               <input type="text" placeholder="Ваше имя"/>
                <input type="text" placeholder="Ваш телефон"/>
                <input type="email" placeholder="Ваш email"/>
                <textarea placeholder="Информация по Вашему заказу(Пример: брошь гриб, сумка с инд. вышивкой)" rows={5}></textarea> 
            </div>            
            <button>отправить</button>
        </form>
    )
}

export default OrderForm;