export interface NavOption {
    id: number
    description: string
    imageUrl: string
    headerImageUrl: string
    color?: string
}

export interface Skill {
    level: number
    maxLevel: number
    iconUrl: string
}

export interface Track {
    id: number
    name: string
    url: string
}