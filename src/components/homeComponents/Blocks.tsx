import React from 'react'
import { Link } from 'react-router-dom'
import Like from './Like'

type PropsType = {
    id: number
    imageUrl: string
    name: string
    description: string
    date: string
    categoryName: string
    likeCount: number
    liked: boolean
    changeLike: boolean
    setChangeLike: any
}

function Blocks({ id, imageUrl, name, description, date, categoryName, likeCount, liked, changeLike, setChangeLike }: PropsType) {

  return (
    <article className="post">
                <Link to="/article" className='post__link'>
                    <div className="post__header">
                        <a href="#">
                            <img className="post__preview" src={imageUrl} alt=""></img>
                        </a>
                    </div>

                    <div className="post__content">
                        <h2 className="post__title">
                            <div className="post__caption">{name}</div>
                        </h2>
                        <p className="post__description">{description}</p>
                    </div>
                </Link>

                <div className="post__footer">
                    <ul className="post__data">
                        <li className="post__data-item">
                            <time dateTime="2022-05-1 23:50">{date}</time>
                        </li>
                        <li className="post__data-item">
                            <div>{categoryName}</div>
                        </li>
                    </ul>
                    
                    <Like likeCount={likeCount} liked={liked} changeLike={changeLike} setChangeLike={setChangeLike} />
                </div>
            </article>
  )
}

export default Blocks