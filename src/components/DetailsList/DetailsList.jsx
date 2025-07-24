export default function DetailsList({data}) {

    return (
        <ul className="">
            <li className="flex pb-4 border-b-1 border-gray-300">
                <span className="font-bold">Tipo: </span> &nbsp; <span className="tracking-[7%]">{"..."}</span> 
            </li>
            <li className="flex pt-4 pb-4 border-b-1 border-gray-300">
                <span className="font-bold">Dieta: </span> &nbsp; <span className="tracking-[7%]">{data[0]}</span> 
            </li>
            <li className="flex pt-4 pb-4 border-b-1 border-gray-300">
                <span className="font-bold">Peso: </span> &nbsp; {data[1]}
            </li>
            <li className="flex pt-4 pb-4 border-b-1 border-gray-300">
                <span className="font-bold">Tamanho: </span> &nbsp; {data[2]}
            </li>
            <li className="flex pt-4 pb-4 border-b-1 border-gray-300">
                <span className="font-bold">Risco de extinção: </span> &nbsp; {data[3]}
            </li>
        </ul>
    );
}