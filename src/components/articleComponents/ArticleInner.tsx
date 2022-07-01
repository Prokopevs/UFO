import React from 'react'
import { Link } from "react-router-dom"
import Comments from './Comments'
import Recommend from './Recommend'
import { IPosts } from '../../models/IPosts'
import { useAppSelector } from '../../hooks/redux'

const ArticleInner: React.FC<IPosts> = ({ imageUrl, name, description, date, categoryName, text }) => {
    const { interesting } = useAppSelector(state => state.interestingReducer)
    
    let getMeRandomElements

    if(!!interesting.length) {
        getMeRandomElements = function(interesting) {
            const shufled = interesting.map(i=>[Math.random(), i]).sort().map(i=>i[1])
            return shufled.slice(0, 4)
        }
    }
    const selected = React.useMemo(() => getMeRandomElements(interesting), [])

    return (
        <article className="post">
            <div className="post__actions">
                <Link to="/ufo">
                    <p>вернуться назад</p>
                </Link>
            </div>

            <div className="post__header  post__header--open">
                <h1 className="post__title  post__title--mb1">{name}</h1>
                <ul className="post__data">
                    <li className="post__data-item">
                        <time dateTime="2022-05-21 19:20">{date}</time>
                    </li>
                    <li className="post__data-item">
                        <div>{categoryName}</div>
                    </li>
                </ul>
            </div>

            <div className="post__content">
                <div className="post__text">
                    <p>
                        <img className="post__inside" src={imageUrl} alt=""></img>
                    </p>

                    <p>{description}</p>

                    {text.split(" | ").map((item, index) => (
                        <p key={index}>{item}</p>
                    ))}
                </div>
            </div>

            <div className="recommend">
                <h3 className="recommend__subtitle">Интересно почитать</h3>
                <ul className="recommend__list">
                    {selected.map((items, index) => (<Recommend
                        key={index}
                        {...items}
                    />))}
                </ul>
            </div>

            <Comments />

        </article >
    )
}

export default ArticleInner