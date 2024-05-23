import React from "react"
import { Link } from "react-router-dom"

const Error = () => {
    return (
        <div className="error">
            <p className="error__text">Что-то пошло не так</p>
            <p className="error__text">
                Вернуться на <Link to="/">главную</Link>
            </p>
        </div>
    )
}

export default Error
