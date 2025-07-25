// src/types/types.jsx

export type Animal = {
    id: number;
    taxon_id: number;
    popular_name: string;
    scientific_name: string;
    description: string;
    conservation_status: string;
    weight: string;
    size: string;
    diet: string;
}

export type DetailsListProps = {
    data: string[] | null;
};

export type AboutSectionProps = {
    about: string | null;
};
