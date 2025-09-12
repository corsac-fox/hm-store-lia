// Заготовка для формы заказа

import './OrderForm.css';

function OrderForm () {
    return (
        <form className='order-form' target='_blank' method='post'>
            <h3 className="order-title">Оставьте заявку на расчет стоимости индивидуального заказа</h3>            
            <div className='form-fields'>
                <input name='username' required placeholder="Ваше имя"/>
                <br/>
                <input type="tel" name='phone' required 
                    pattern='(\+7)|8[0-9]{10}'
                    placeholder="Ваш телефон"/>
                <br/>
                <input type="email" name='email' placeholder="Ваш email"/> {/** добавить атрибут pattern для проверки email*/}
                <br/>
                <textarea name='order-text' required 
                    placeholder="Информация по Вашему заказу (Пример:&nbsp;брошь гриб, сумка с инд. вышивкой)" rows={5}></textarea> 
            </div>            
            <input type='submit'/>
        </form>
    )
}

export default OrderForm;