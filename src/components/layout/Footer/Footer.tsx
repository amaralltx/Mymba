// src/components/layout/Footer/Footer.jsx
import React from 'react';
import footer_background from '../../../assets/images/footer-bg.png'; // Importa a imagem de fundo
export default function Footer() {
  return (
    <footer className="w-full text-white text-center">
      <img src={footer_background} alt="" />
    </footer>
  );
}
