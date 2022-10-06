import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/redux'
import { IPosts } from '../../models/IPosts'
import { fetchPosts } from '../../store/reducers/PostSlice'
import { IconTwitter } from '../../pictures'


const Blocks: React.FC<IPosts> = ({ id, imageUrl, name, description, date, categoryName, isLoading }) => {
    const dispatch = useAppDispatch()

    const onClickArticle = (id: number) => {
        dispatch(fetchPosts(null, id))
    }   
    
    return (
        <article className={!isLoading ? "post" : "post post--opacity"}>
            <Link to="/ufo/article" className='post__link' onClick={() => onClickArticle(id)}>
                <div className="post__header">
                    <img className="post__preview" src={imageUrl ? imageUrl : String(IconTwitter)} alt=""></img>
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
            </div>
        </article>
        
    )
}

export default Blocks