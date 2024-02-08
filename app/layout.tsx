import type { Metadata } from "next";
import Header from "./components/header";
import "./globals.css";
import Menu from "./components/menu";
import CurrentPath from "./components/current_path";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "MagaFe",
  description: "Loja de produtos variados",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={"overflow-hidden"}>

          <Header/>

          <div className="flex gap-0">

            <Menu/>

            <div className="w-full relative h-screen overflow-scroll flex flex-col items-center justify-center pt-[100px] bg-slate-200">

                <CurrentPath/>

                { children }

                <Footer/>

            </div>


        </div>

      </body>
    </html>
  );
}
