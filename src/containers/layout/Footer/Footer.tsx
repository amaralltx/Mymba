// src/components/layout/Footer/Footer.jsx
import React from "react";
import LicenseNotice from "../../../components/LicenseNotice/LicenseNotice";

export default function Footer() {
    const lastUpdateDate = "2025-06-07";
    return (
        // style={{ backgroundImage: `url(${footer_background})`, backgroundSize: 'cover' }}
        <footer className="w-full text-gray-800 pt-6 flex flex-col gap-6 border-t-1 border-gray-600">
            <div className=" pr-30 pl-30 grid grid-cols-3 gap-40 text-sm">
                <div>
                    <h3 className="font-bold text-lg mb-2">Sobre o Projeto</h3>
                    <p className="text-gray-500">
                        O objetivo deste projeto é incentivar a exploração e o
                        compartilhamento da vasta diversidade da fauna local,
                        bem como as fascinantes narrativas dos animais extintos
                        que outrora povoaram nossa região. Conhecer o passado
                        para proteger o futuro.
                    </p>
                </div>

                {/* Feedback & Git Repository */}
                <div>
                    <h3 className="font-bold text-lg mb-2">Informações</h3>
                    <p className="text-gray-500 mb-2">
                        O Projeto prioriza tornar este site utilizável por
                        todos. Se encontrar dificuldades, por favor, entre em
                        contato.
                    </p>
                    <p className="text-gray-500 mb-2">
                        Tem alguma <b>dúvida</b>, <b>sugestão</b> ou encontrou
                        um <b>erro</b>? Adoraríamos ouvir você!
                        <a
                            href="mailto:amarall.tx@gmail.com"
                            className="text-blue-500 hover:underline ml-1"
                        >
                            Entre em contato
                        </a>
                        .
                    </p>
                </div>
                <div>
                    <h3 className="font-bold text-lg mb-2">
                        Código do Projeto
                    </h3>
                    <p className="text-gray-500 mb-2">
                        Explore o código-fonte deste projeto no GitHub.
                        Contribuições são bem-vindas!
                    </p>
                    <a
                        href="https://github.com/amaralltx/Mymba"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        Repositório no GitHub
                    </a>
                </div>
            </div>
            <div className="h-fit flex flex-col items-center bg-gray-200 p-4">
                <p className="text-[13px] text-gray-800">
                    Mymbá &nbsp;| Última atualização:{" "}
                    <span className="font-medium">{lastUpdateDate}</span>
                </p>
                <LicenseNotice />
            </div>
        </footer>
    );
}
