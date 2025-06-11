import './Header.css';

function Header () {
    return (
        <span className='header'> 
            <span>
                <img id='logo' src='src/assets/logo.png' alt='Логотип - лягушка'/>
                <span className='logo-label'>
                    <span>embroidery</span>
                    <div className='brand-font'>by Lia</div>
                </span> 
            </span>       
            <ul className='nav-bar'>
                {/* все ссылки пока ведут на один и тот же раздел */}
                <li><a href='#product-section' className='bookmark-link'>главная</a></li>
                <li><a href='#product-section' className='bookmark-link'>товары</a></li>
                <li><a href='#product-section' className='bookmark-link'>инд. заказ</a></li>
                <li><a href='#product-section' className='bookmark-link'>контакты</a></li>
            </ul>
            <span className='header-icons'>
                <img src='src/assets/search-icon.png' alt='Поиск' id='search'/>
                <img src='src/assets/basket-icon.png' alt='Корзина' id='basket'/>
            </span>
        </span>
    )
}

export default Header;