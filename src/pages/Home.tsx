import React from 'react'
import { Link } from 'react-router-dom'
import Like from '../components/Like'
import Pagination from '../components/Pagination'

import { Post } from '../pictures'

function Home() {
    return (
        <div>
            <article className="post">
                <Link to="/article" className='post__link'>
                    <div className="post__header">
                        <a href="#">
                            <img className="post__preview" src={String(Post)} alt=""></img>
                        </a>
                    </div>

                    <div className="post__content">
                        <h2 className="post__title">
                            <div className="post__caption">Как писать код быстро и безболезненно?</div>
                        </h2>
                        <p className="post__description">Галактика Андромеды — спиральная галактика, наблюдаемая в созвездии Андромеды. Эта галактика приблизительно вдвое больше нашей галактики в диаметре, содержит в несколько раз больше звёзд и удалена от неё на расстояние порядка 800 килопарсек.</p>
                    </div>
                </Link>

                <div className="post__footer">
                    <ul className="post__data">
                        <li className="post__data-item">
                            <time dateTime="2022-05-1 23:50">01.05.2022</time>
                        </li>
                        <li className="post__data-item">
                            <div>Все</div>
                        </li>
                    </ul>
                    
                    <Like/>

                </div>
            </article>

            <Pagination/>
        </div>
    )
}

export default Home
