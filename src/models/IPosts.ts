export interface IPosts {
    id: number
    imageUrl: string
    name: string
    description: string
    date: string
    category: number
    categoryName: string
    likeCount: number
    liked: boolean
    isLoading?: boolean
}