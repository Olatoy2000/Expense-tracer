import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Home Page",
    template: "%s | Expense Tracker",
  },
  authors: {
    name: "Oladejo Toyyib Olalekan",
    url: "https://olatoywebstudio.vercel.app",
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={outfit.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
