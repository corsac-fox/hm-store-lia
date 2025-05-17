import './Header.css';

function Header () {
    return (
        <div className='header'> 
            <span>
                <img id='logo' src='src/assets/logo.png' alt='Логотип - лягушка'/>
                <span className='logo-label'>
                    <span>embroidery</span>
                    <div className='brand-font'>by Lia</div>
                </span> 
            </span>       
            <ul className='nav-bar'>
                <li>главная</li>
                <li><a href='#product-section' className='bookmark-link'>товары</a></li>
                <li>инд. заказ</li>
                <li>контакты</li>
            </ul>
            <span className='header-icons'>
                <img src='src/assets/search-icon.png' alt='Поиск' id='search'/>
                <img src='src/assets/basket-icon.png' alt='Корзина' id='basket'/>
            </span>
        </div>
    )
}

export default Header;