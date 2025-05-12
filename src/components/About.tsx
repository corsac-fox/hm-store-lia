import './About.css';

function About () {
    return (
        <div className='about'>
            <img className='about-photo' src='src\assets\photos\personal.png' alt='the profile photo'/>
            <h1>Обо мне</h1>
            <div className='about-content'>
                <p>Привет!</p>
                <p>Меня зовут Лия. Я живу в Самаре и пропитываюсь речным ветром волжского гедонизма.</p>
                <p>В паблике ВК я показываю воплощение своих идей, а также делаю разные штуки на заказ.</p>
                <p>Во вкладке Товары вы можете изучить, что сейчас есть в наличии.</p>
                <p>Процессы творчества, болтовня, гоблинкорный лайфстайл живут у меня в телеге: <a href='https://t.me/liaembr'>liaembr</a></p>
            </div>
        </div>
    )
}

export default About;