export interface IArticle {
    id: number
    imageUrl: string
    name: string
    description: string
    date: string
    category: number
    categoryName: string
    likeCount: number
    liked: false
    text: string
    isLoading?: boolean
}