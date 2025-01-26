export default interface project {
    name: string
    year: number
    description: string
    imageUrl: string
    iconUrl: string
    liveUrl: string
    tecnologies: tecnology[]
}

interface tecnology {
    name: string
    imageUrl: string
}