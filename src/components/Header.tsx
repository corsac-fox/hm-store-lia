// Заготовка для шапки сайта

import './Header.css';

function Header () {
    return (
        <div>
            <div>
                <div id='logo'></div>
                <div>
                    <p>embroidery</p>
                    <p>by Lia</p>
                </div>
            </div>
            <div className='nav-bar'>
                <div>главная</div>
                <div>товары</div>
                <div>инд. заказ</div>
                <div>контакты</div>
            </div>
            <div>search and basket</div>
        </div>
    )
}

export default Header;