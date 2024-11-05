const Record = () => {
  return (
    <section className='record'>
      <div className='container'>
        <div className='record__wrapper'>
          <h2 className='record__title'>Запись на дегустацию</h2>
          <p className='record__text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            enim tortor in hac id imperdiet adipiscing. Pellentesque nisi, mi
            sit non sit sed fermentum.{' '}
          </p>
          <form action='' className='record__form'>
            <input type='text' placeholder='Имя' />
            <input type='number' placeholder='Телефон' />
          </form>
          <button className='record__button'>записаться</button>
        </div>
      </div>
    </section>
  )
}

export default Record
