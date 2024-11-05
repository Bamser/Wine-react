const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__wrapper'>
          <div className='footer__top'>
            <ul className='fotter__list'>
              <li>
                <a href='#'>Главная</a>
              </li>
              <li>
                <a href='#'>Каталог</a>
              </li>
              <li>
                <a href='#'>Поставщики</a>
              </li>
              <li>
                <a href='#'>Коллекции</a>
              </li>
              <li>
                <a href='#'>Дегустация</a>
              </li>
              <li>
                <a href='#'>Коллекция 2020</a>
              </li>
              <li>
                <a href='#'>Контакты</a>
              </li>
            </ul>
          </div>
          <div className='footer__bottom'>
            <div className='footer__contacts'>
              <span>винный бутик LE CORTE</span>
              <a href='tel:88121234567'>8 (812) 123-45-67</a>
              <a href='#'>
                <svg
                  width='26'
                  height='26'
                  viewBox='0 0 26 26'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M23.8956 7.52385C23.7662 7.04288 23.5126 6.60435 23.1604 6.25215C22.8082 5.89995 22.3697 5.64643 21.8888 5.51697C20.1175 5.0376 13 5.0376 13 5.0376C13 5.0376 5.8825 5.0376 4.11125 5.51697C3.63028 5.64643 3.19175 5.89995 2.83955 6.25215C2.48735 6.60435 2.23384 7.04288 2.10438 7.52385C1.77364 9.33025 1.61315 11.1637 1.625 13.0001C1.61315 14.8365 1.77364 16.6699 2.10438 18.4763C2.23384 18.9573 2.48735 19.3958 2.83955 19.748C3.19175 20.1002 3.63028 20.3538 4.11125 20.4832C5.8825 20.9626 13 20.9626 13 20.9626C13 20.9626 20.1175 20.9626 21.8888 20.4832C22.3697 20.3538 22.8082 20.1002 23.1604 19.748C23.5126 19.3958 23.7662 18.9573 23.8956 18.4763C24.2264 16.6699 24.3869 14.8365 24.375 13.0001C24.3869 11.1637 24.2264 9.33025 23.8956 7.52385ZM10.725 16.4126V9.5876L16.6319 13.0001L10.725 16.4126Z'
                    fill='white'
                  />
                </svg>
              </a>
              <a href='#'>
                {' '}
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g clip-path='url(#clip0_3014_34)'>
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M21.3624 14.7577C21.3624 14.7577 23.3028 16.6741 23.7828 17.5609C23.7921 17.5736 23.7994 17.5878 23.8044 17.6029C24 17.9305 24.048 18.1873 23.952 18.3769C23.79 18.6901 23.2416 18.8473 23.0556 18.8605H19.626C19.3872 18.8605 18.8904 18.7981 18.2856 18.3805C17.8236 18.0577 17.364 17.5261 16.9188 17.0065C16.254 16.2349 15.6792 15.5653 15.0972 15.5653C15.0237 15.5651 14.9507 15.5773 14.8812 15.6013C14.4408 15.7405 13.8816 16.3681 13.8816 18.0397C13.8816 18.5629 13.4688 18.8605 13.1796 18.8605H11.6088C11.0736 18.8605 8.28719 18.6733 5.81639 16.0681C2.78879 12.8785 0.069586 6.48005 0.043186 6.42365C-0.126014 6.00965 0.229186 5.78405 0.613186 5.78405H4.07639C4.54079 5.78405 4.69199 6.06485 4.79759 6.31685C4.91999 6.60605 5.37359 7.76285 6.11759 9.06245C7.32239 11.1768 8.06279 12.0373 8.65439 12.0373C8.76553 12.0376 8.8748 12.0086 8.97119 11.9533C9.74399 11.5285 9.59999 8.76845 9.56399 8.19965C9.56399 8.08925 9.56279 6.96725 9.16679 6.42485C8.88359 6.03605 8.40119 5.88485 8.10959 5.82965C8.18759 5.71685 8.35319 5.54405 8.56559 5.44205C9.09479 5.17805 10.0512 5.13965 11.0004 5.13965H11.5272C12.5568 5.15405 12.8232 5.22005 13.1976 5.31485C13.9512 5.49485 13.9656 5.98325 13.8996 7.64645C13.8804 8.12165 13.86 8.65685 13.86 9.28685C13.86 9.42125 13.854 9.57125 13.854 9.72365C13.8312 10.5768 13.8012 11.5381 14.4036 11.9329C14.4817 11.9815 14.5719 12.0073 14.664 12.0072C14.8728 12.0072 15.498 12.0072 17.1936 9.09725C17.9376 7.81205 18.5136 6.29645 18.5532 6.18245C18.5868 6.11885 18.6876 5.94005 18.81 5.86805C18.8971 5.82172 18.9946 5.79858 19.0932 5.80085H23.1672C23.6112 5.80085 23.9124 5.86805 23.9712 6.03605C24.0696 6.30845 23.952 7.14005 22.092 9.65525C21.7788 10.074 21.504 10.4365 21.2628 10.7533C19.5768 12.9661 19.5768 13.0777 21.3624 14.7577Z'
                      fill='white'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_3014_34'>
                      <rect width='24' height='24' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a href='#'>
                {' '}
                <svg
                  width='26'
                  height='26'
                  viewBox='0 0 26 26'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M14.5134 22.7469V13.8679H17.5088L17.9541 10.3915H14.5134V8.17718C14.5134 7.17402 14.7929 6.48718 16.2327 6.48718H18.057V3.38777C17.1694 3.29264 16.2771 3.24671 15.3844 3.25018C12.7367 3.25018 10.9189 4.86652 10.9189 7.83377V10.385H7.94299V13.8614H10.9254V22.7469H14.5134Z'
                    fill='white'
                  />
                </svg>
              </a>
              <a href='mailto:le-corte.ru'>© le-corte.ru</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
