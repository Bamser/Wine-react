const Header = () => {
  return (
    <div className='header'>
      <div className='container'>
        <div className='header__contacts'>
          <span>Новокузнечный переулок 4/1</span>
          <a href='tel:88121234567'>8 (812) 123-45-67</a>
        </div>
        <nav className='header__list'>
          <ul className='header__menu'>
            <li>
              <a href='#'>Каталог</a>
            </li>
            <li>
              <a href='#'>Доставка</a>
            </li>
            <li>
              <a href='#'>Коллекции</a>
            </li>
            <li>
              <a href='#'>Контакты</a>
            </li>
          </ul>
        </nav>
        <div className='header__links'>
          <a href='#'>винная карта</a>
          <a href='#'>дегустация</a>
        </div>
      </div>
    </div>
  )
}

export default Header
