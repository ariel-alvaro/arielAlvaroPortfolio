export interface NavOption {
    id: number
    description: string
    imageUrl: string
    headerImageUrl: string
    color?: string
}

export interface Skill {
    name: string
    level: number
    maxLevel: number
    iconUrl: string
}

export interface Track {
    id: number
    name: string
    url: string
}

export interface BackpackItem {
    name: string
    count: number
    imageUrl: string
}