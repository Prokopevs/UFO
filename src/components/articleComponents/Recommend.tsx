import React from "react"
import { useAppDispatch } from "../../hooks/redux"
import { IInteresting } from "../../models/IInteresting"
import { fetchArticle } from "../../store/reducers/ArticleSlice"

const Recommend: React.FC<IInteresting> = ({ id, name, date }) => {
    const dispatch = useAppDispatch()

    const onClickArticle = (id: number) => {
        dispatch(fetchArticle(id))
    }

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <li className="recommend__list-item">
            <h4 className="recommend__list-title">
                <p onClick={() => onClickArticle(id)}>
                    {name}
                </p>
            </h4>
            <time className="recommend__list-date" dateTime="2022-05-21 19:21">
                {date}
            </time>
        </li>
    )
}

export default Recommend
