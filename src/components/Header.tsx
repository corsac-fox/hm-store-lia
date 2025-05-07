// Заготовка для шапки сайта

import './Header.css';

function Header () {
    return (
        <div className='header'>
            <div className='logo-box'>
                <div id='logo'></div>
                <div>
                    <p>embroidery</p>
                    <p className='brand-font'>by Lia</p>
                </div>
            </div>
            <div className='nav-bar'>
                <div>главная</div>
                <div>товары</div>
                <div>инд. заказ</div>
                <div>контакты</div>
            </div>
            <div className='icons'>
                <div id='search'></div>
                <div id='basket'></div>
            </div>
        </div>
    )
}

export default Header;