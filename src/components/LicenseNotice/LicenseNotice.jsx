// components/LicenseNotice.jsx
import {
    FaCreativeCommons,
    FaCreativeCommonsBy,
    FaCreativeCommonsNc,
} from "react-icons/fa";

export default function LicenseNotice() {
    return (
        <div className="h-fit flex flex-col gap-2 mt-2 bg-gray-100 dark:bg-gray-200">
            <div className="w-full text-sm text-gray-700 dark:text-gray-700 flex flex-row items-center justify-center gap-2">
                <span className="flex items-center gap-2">
                    <FaCreativeCommons className="text-xl" />
                    <FaCreativeCommonsBy className="text-xl" />
                    <FaCreativeCommonsNc className="text-xl" />
                </span>
                <p className="text-center text-[13px]">
                    Este conteúdo está licenciado sob uma licença&nbsp;
                    <a
                        href="https://creativecommons.org/licenses/by-nc/4.0/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-900 hover:underline"
                    >
                        Creative Commons Atribuição-NãoComercial 4.0
                        Internacional (CC BY-NC 4.0)
                    </a>
                    .
                </p>
            </div>
        </div>
    );
}
