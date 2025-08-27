import './About.css';

function About () {
    return (
        <section className='about'>
            <img className='about-photo' src='\photos\personal.png' alt='Личное фото'/>
            <h1>Обо мне</h1>
            <div className='about-content'>
                <p>Привет!</p>
                <p>Меня зовут Лия. Я живу в Самаре и пропитываюсь речным ветром волжского гедонизма.</p>
                <p>В паблике ВК я показываю воплощение своих идей, а также делаю разные штуки на заказ.</p>
                <p>Во вкладке Товары вы можете изучить, что сейчас есть в наличии.</p>
                <p>Процессы творчества, болтовня, гоблинкорный лайфстайл живут у меня в 
                    телеге: <a href='https://t.me/liaembr'>&#064;liaembr</a></p>
            </div>
        </section>
    )
}

export default About;