import newImage from '../images/new-image.jpg'
const New = () => {
  return (
    <section className='new'>
      <div className='container'>
        <div className='new__content'>
          <div className='new__desc'>
            <span>Новинки коллекций</span>
            <h2>Март 1980 Урожай Марселя</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
              enim tortor in hac id imperdiet adipiscing. Pellentesque nisi, mi
              sit non sit sed fermentum. Felis adipiscing morbi sodales ac.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
              enim tortor in hac id imperdiet adipiscing. Pellentesque nisi, mi
              sit non sit sed fermentum. Felis adipiscing morbi sodales ac.
            </p>
            <a href='#' className='link new__link'>
              узнать подробнее
            </a>
          </div>
          <div className='new__images'>
            <img src={newImage} alt='' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default New
