// src/components/layout/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar.jsx';
import Footer from './Footer/Footer.jsx';

export default function Layout() {
  return (
    <div className="flex h-screen">
      <Navbar className="sticky top-0 h-screen" />
      <div className="flex flex-col flex-grow overflow-y-auto">
        <main className="flex-grow container mx-auto px-4 py-8">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
