import "./globals.css";
import { Manrope } from "next/font/google";
import Navigation from "./components/Navigation";
const manrope = Manrope({ subsets: ["latin"] });
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import Footer from "./components/Footer";
import Hydrate from "./components/Hydrate";

export const metadata = {
  title: "Audiophile",
  description: "Audiophile Official",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //Fetch user
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={`${manrope.className} flex flex-col h-screen`}>
        <Hydrate>
          <Navigation
            user={session?.user}
            expires={session?.expires as string}
          />
          {children}
          <Footer />
        </Hydrate>
      </body>
    </html>
  );
}
