import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Polytechub",
  description: "Techub",
};
const menuItems = [
  { name: "Home", url: "/", button: false },
  { name: "About", url: "/about", button: false },
  { name: "Contact", url: "/contact", button: false },
  { name: "Blog", url: "/blog", button: false },
  { name: "Login", url: "/login", button: true },

]
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-200`}
      >
        <nav className="py-4 w-full sticky top-0  shadow-md text-gray-800 bg-white flex items-center  justify-between px-[10%]">
          <Link href={'/'}><h2 className="text-3xl font-bold text-sky-500">Poly<span className="text-orange-500">Techub</span> </h2></Link>

          <ul className="flex gap-8 font-semibold text-sm items-start justify-center">

            {
              menuItems.map((item, index) => {
                return (
                  <li >
                    <Link key={index} className={`${item.button ? "bg-violet-600 text-white px-8 py-2 rounded-lg " : null}`} href={item.url}>
                      {item.name}
                    </Link>
                  </li>
                );
              })
            }
          </ul>
        </nav>
        <section className="p-8">{children}</section>

        <footer className="w-full flex h-[300px] bg-gray-800 text-white justify-center items-center" >Footer</footer>
      </body>
    </html>
  );
}
