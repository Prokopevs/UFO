import React from "react"

type PropsType = {
    likeCount: number
    liked: boolean
    changeLike: boolean
    setChangeLike: any
}

function Like({ likeCount, liked, changeLike, setChangeLike }: PropsType) {

    return (
        <div className="post__like">
            <div className="post__like__count">{likeCount}</div>
            <div className={changeLike ? 'heart heart--active' : 'heart'} onClick={() => setChangeLike(!changeLike)} ></div>
        </div>
    )
}

export default Like