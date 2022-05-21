import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ScrollToTop from '../ScrollToTop'

interface IBlocks {
    id: number
    imageUrl: string
    name: string
    description: string
    date: string
    categoryName: string
    likeCount: number
    liked: boolean
    isLoading: boolean
}

const Blocks: React.FC<IBlocks> = ({ id, imageUrl, name, description, date, categoryName, likeCount, liked, isLoading }) => {
    const [like, setLike] = React.useState(liked)

    const onClickLike = () => {
        setLike(!like)
    }
    
    return (
        <article className={!isLoading ? "post" : "post post--opacity"}>
            <Link to="/article" className='post__link'>
                <div className="post__header">
                    <a href="#">
                        <img className="post__preview" src={imageUrl} alt=""></img>
                        {isLoading && <div className="spinner">
                            <div className="blob top"></div>
                            <div className="blob bottom"></div>
                            <div className="blob left"></div>

                            <div className="blob move-blob"></div>
                        </div>}
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

                <div className="post__like">
                    <div className="post__like__count">{likeCount}</div>
                    <div className={like ? 'heart heart--active' : 'heart'} onClick={onClickLike}></div>
                </div>
            </div>
        </article>
        
    )
}

export default Blocks