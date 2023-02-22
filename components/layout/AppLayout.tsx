import Footer from "components/layout/Footer";
import React from "react";
import Navbar from "./Navbar";

type Props = {
  children: React.ReactNode;
};

function AppLayout({ children }: Props) {
  return (
    <>
      <Navbar />

      <main className="mx-auto h-[100%] max-w-7xl py-12 px-4 md:h-[calc(100vh-52px)] lg:px-8">
        {children}
      </main>

      <Footer />
    </>
  );
}

export default AppLayout;
