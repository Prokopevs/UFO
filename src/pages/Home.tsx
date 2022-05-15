import React from 'react'
import Blocks from '../components/homeComponents/Blocks'
import Pagination from '../components/homeComponents/Pagination'
import axios from 'axios';


function Home() {
    const [data, setData] = React.useState([])
    const [changeLike, setChangeLike] = React.useState([false])

    React.useEffect(() => {
        axios.get(`https://62811cdf7532b4920f77b2db.mockapi.io/posts/`).then(({ data }) => { setData(data) });
    }, [])

    return (
        <div>
            {data.map((obj, index) =><Blocks
            key={index}
            {...obj}
            setChangeLike={setChangeLike}
            changeLike={changeLike}
            />)}
            
            <Pagination/>
        </div>
    )
}

export default Home
