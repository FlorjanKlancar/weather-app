import Footer from "components/layout/Footer";
import Head from "next/head";
import React from "react";
import Navbar from "./Navbar";

type Props = {
  children: React.ReactNode;
};

function AppLayout({ children }: Props) {
  return (
    <>
      <Head>
        <title>Demo Weather App</title>
      </Head>
      <Navbar />

      <main className="mx-auto h-[100%] max-w-7xl py-12 px-4 md:mb-20 md:h-[calc(100vh-52px)] lg:px-8">
        {children}
      </main>

      <Footer />
    </>
  );
}

export default AppLayout;
