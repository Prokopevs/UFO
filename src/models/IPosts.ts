export interface IPosts {
    id: number
    imageUrl: string
    name: string
    description: string
    date: string
    category: number
    categoryName: string
    text: string
    isLoading?: boolean
}

export interface UrlParams {
    category?: number
    page?: number
    limit?: number
    newFlag?: boolean
}