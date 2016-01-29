export interface Labels {
    icon: string;
    medium: string;
    large: string;
}

export interface Glass {
    id: number;
    name: string;
    createDate: string;
}

export interface Category {
    id: number;
    name: string;
    createDate: string;
}

export interface Style {
    id: number;
    categoryId: number;
    category: Category;
    name: string;
    shortName: string;
    description: string;
    ibuMin: string;
    ibuMax: string;
    abvMin: string;
    abvMax: string;
    srmMin: string;
    srmMax: string;
    ogMin: string;
    fgMin: string;
    fgMax: string;
    createDate: string;
    updateDate: string;
}

export interface Available {
    id: number;
    name: string;
    description: string;
}

export interface Srm {
    id: number;
    name: string;
    hex: string;
}

export class Beer {
    id: string;
    name: string;
    nameDisplay: string;
    description: string;
    abv: string;
    ibu: string;
    glasswareId: number;
    styleId: number;
    isOrganic: string;
    labels: Labels;
    status: string;
    statusDisplay: string;
    originalGravity: string;
    createDate: string;
    updateDate: string;
    glass: Glass;
    style: Style;
    availableId?: number;
    available: Available;
    srmId?: number;
    srm: Srm;
    servingTemperature: string;
    servingTemperatureDisplay: string;
}

export class RawResponse {
    currentPage: number;
    numberOfPages: number;
    totalResults: number;
    data: Beer[];
    status: string;
}