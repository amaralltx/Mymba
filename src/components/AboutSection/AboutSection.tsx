import { AboutSectionProps } from "../../types/types";

export default function AboutSection({ about }: AboutSectionProps) {
    return (
        <div className="flex flex-col gap-2 mt-4">
            <h3 className="font-bold">Sobre</h3>
            <p className="tracking-[7%]">{about ?? "..."}</p>
        </div>
    );
}
