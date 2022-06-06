import React from "react"
import { useAppDispatch } from "../../hooks/redux"
import { IInteresting } from "../../models/IInteresting"
import { fetchPosts } from "../../store/reducers/PostSlice"

const Recommend: React.FC<IInteresting> = ({ id, name, date }) => {
    const dispatch = useAppDispatch()

    const onClickArticle = (id: number) => {
        dispatch(fetchPosts(null, id))
    }

    return (
        <li className="recommend__list-item">
            <h4 className="recommend__list-title">
                <a href="#" onClick={() => onClickArticle(id)}>{name}</a>
            </h4>
            <time className="recommend__list-date" dateTime="2022-05-21 19:21">{date}</time>
        </li>
    )
}

export default Recommend