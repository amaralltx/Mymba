// // src/App.jsx (ou outro componente onde você quer testar)
// import React, { useEffect, useState } from 'react';
// import supabase  from './utils/supabaseClient';

// function App() {
//   const [connectionStatus, setConnectionStatus] = useState('Testando conexão...');

//   useEffect(() => {
//     async function testConnection() {
//       try {
//         const { error } = await supabase
//           .from('animais')
//           .select('id', { count: 'exact', head: true }); // Apenas conta sem retornar dados

//         if (error) {
//           console.error('Erro de conexão ou autenticação com Supabase:', error);
//           setConnectionStatus(`Falha na conexão: ${error.message || 'Erro desconhecido'}`);
//         } else {
//           console.log('Conexão com Supabase estabelecida com sucesso!');
//           setConnectionStatus('Conexão estabelecida com sucesso!');
//         }
//       } catch (err) {
//         console.error('Erro inesperado ao testar conexão:', err);
//         setConnectionStatus(`Erro inesperado: ${err.message || 'Verifique o console'}`);
//       }
//     }

//     testConnection();
//   }, []); // Executa apenas uma vez na montagem do componente

//   return (
//     <div className="App p-8">
//       <h1 className="text-4xl font-bold text-center mb-6">Projeto Mymbá</h1>
//       <p className="text-center text-lg">{connectionStatus}</p>
//       {/* Seus outros componentes irão aqui, como AnimalCard */}
//       {/* <AnimalCard /> */}
//     </div>
//   );
// }

// export default App;
// src/App.jsx
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./containers/layout/Layout";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ExplorePage from "./pages/ExplorePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <HomePage /> },
            { path: "/explore", element: <ExplorePage /> },
            { path: "/species", element: <div>Espécies</div> },
            { path: "/about", element: <div>Sobre</div> },
            {path: "/discover", element: <div>Conhecer o passado para proteger o futuro.</div>,},
            { path: "*", element: <NotFoundPage /> },
        ],
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
