export interface IArticle {
    id: string
    imageUrl: string
    name: string
    description: string
    date: string
    category: number
    categoryName: string
    likeCount: number
    liked?: false
    text: string
    isLoading?: boolean
}