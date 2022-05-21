import React from 'react'
import Blocks from '../components/homeComponents/Blocks'
import Pagination from '../components/homeComponents/Pagination'
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchPosts } from '../store/reducers/PostSlice';


const Home = () => {
    const dispatch = useAppDispatch()
    const {posts, isLoading} = useAppSelector(state => state.postReducer)
    const {category} = useAppSelector(state => state.filterReducer)

    React.useEffect(() => {
        dispatch(fetchPosts(category))
    }, [category])

    return (
        <>
            {posts.map((obj, index) => (<Blocks
                key={index}
                isLoading={isLoading}
                {...obj}
            />))}
            
            {!isLoading && <Pagination />}
        </>
    )
}

export default Home
