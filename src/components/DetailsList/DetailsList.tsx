export interface DetailsData {
    diet: string;
    weight: string;
    size: string;
    conservation_status: string;
    type: string;
}

interface DetailsListProps {
    data: DetailsData;
}

export default function DetailsList({ data }: DetailsListProps) {
    return (
        <ul>
            <li className="flex pb-4 border-b border-gray-300">
                <span className="font-bold">Tipo: </span> &nbsp;
                <span className="tracking-[7%]">{data.type ?? "..."}</span>
            </li>
            <li className="flex py-4 border-b border-gray-300">
                <span className="font-bold">Risco de extinção: </span> &nbsp;
                {data.conservation_status}
            </li>
            <li className="flex py-4 border-b border-gray-300">
                <span className="font-bold">Peso: </span> &nbsp; {data.weight}
            </li>
            <li className="flex py-4 border-b border-gray-300">
                <span className="font-bold">Tamanho: </span> &nbsp; {data.size}
            </li>
            <li className="flex py-4 border-b border-gray-300">
                <span className="font-bold">Dieta: </span> &nbsp;
                <span className="tracking-[7%]">{data.diet}</span>
            </li>
        </ul>
    );
}
