import './Header.css';

function Header () {
    return (
        <div className='header'> 
            <span>
                <img id='logo' src='src/assets/logo.png'/>
                <span className='logo-label'>
                    <span>embroidery</span>
                    <div className='brand-font'>by Lia</div>
                </span> 
            </span>       
            <ul className='nav-bar'>
                <li>главная</li>
                <li>товары</li>
                <li>инд. заказ</li>
                <li>контакты</li>
            </ul>
            <span className='icons'>
                <img src='src/assets/search-icon.png' id='search'/>
                <img src='src/assets/basket-icon.png' id='basket'/>
            </span>
        </div>
    )
}

export default Header;