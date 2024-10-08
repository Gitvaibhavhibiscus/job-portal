import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "applyjobs",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="bg-white-900">
        <div className="grid place-items-center h-screen"><h2>applyjobs</h2>
        <div>{ children }</div></div>
        </main>
      </body>
    </html>
  );
}
