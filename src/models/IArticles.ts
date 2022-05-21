export interface IInteresting {
    id: number
    name: string
    date: string
}

export interface IArticles {
    id: number
    imageUrl: string
    name: string
    date: string
    categoryName: string
    description: string
    text: string
    interesting: Array<IInteresting>
    isLoading?: boolean
}