import './HeroSection.css';

function HeroSection () {
    return (
        <section className='hero-bg'>
            <div className='hero-content'>
                <h1>Ручная вышивка</h1>
                <h3>на одежде, шопперах, сумочках, кошельках, косметичках и пр.</h3>
                <div className='hero-btns'>
                    <button type="button" className='accent-btn'>связаться</button>
                    <button type="button">заказать</button>
                </div>
            </div>            
        </section>
    )
}

export default HeroSection;