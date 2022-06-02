import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useAppSelector } from "../hooks/redux"

export default function ScrollToTop() {
  const {pathname} = useLocation()
  const {category} = useAppSelector(state => state.filterReducer)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname, category])

  return null
}