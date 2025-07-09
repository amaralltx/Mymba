export default function AboutSection({data}) {
    return (
        <div className="flex flex-col gap-2 mt-4">
            <h3 className="font-bold">Sobre</h3>
            <p className="tracking-[7%]">{data.about}</p>
        </div>
    );
}
