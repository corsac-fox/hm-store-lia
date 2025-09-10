import './Footer.css';

function Footer() {
    return (
        <footer>
            <span>&copy; 2023 Embroidery by Lia</span>
            <ul className='nav-bar'>
                {/* все ссылки пока ведут на один и тот же раздел */}
                <li><a href='#product-section' className='bookmark-link'>Главная</a></li>
                <li><a href='#product-section' className='bookmark-link'>Товары</a></li>
                <li><a href='#product-section' className='bookmark-link'>Инд. заказ</a></li>
                <li><a href='#product-section' className='bookmark-link'>Контакты</a></li>
            </ul>
            <div className='footer-icons'>
                <a href='https://vk.com/liaembr' target='_blank'>
                    <img src='src\assets\images\ui\vk-icon.png' alt='Ссылка на ВК' id='vk'/>
                </a>
                <a href='https://t.me/liaembr' target='_blank'>
                    <img src='src\assets\images\ui\tlg-icon.png' alt='Ссылка на Телеграм' id='tlg'/>
                </a>                
            </div>
        </footer>
    )
}

export default Footer;