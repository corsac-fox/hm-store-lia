import './Header.css';

function Header () {
    return (
        <header> 
            <div className='logo-contaner'>
                <img id='logo' src='src/assets/logo.png' alt='Логотип - лягушка'/>
                <p className='logo-label'>
                    embroidery
                    <br/> 
                    <span className='brand-font'>by Lia</span>
                </p>                 
            </div>
            <ul className='nav-bar'>
                {/* все ссылки пока ведут на один и тот же раздел */}
                <li><a href='#product-section' className='bookmark-link'>главная</a></li>
                <li><a href='#product-section' className='bookmark-link'>товары</a></li>
                <li><a href='#product-section' className='bookmark-link'>инд. заказ</a></li>
                <li><a href='#product-section' className='bookmark-link'>контакты</a></li>
            </ul>
            <span className='header-icons'>
                <img src='src\assets\images\ui\search-icon.png' alt='Поиск' id='search'/>
                <img src='src\assets\images\ui\basket-icon.png' alt='Корзина' id='basket'/>
            </span>
        </header>
    )
}

export default Header;