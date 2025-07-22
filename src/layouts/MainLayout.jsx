import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-main)] dark:bg-gray-900">
      <Navbar />
      <main className="flex-1 container mx-auto px-2 py-6">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
