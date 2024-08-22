'use client'
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Feedback App",
//   description: "App for submitting feedback",
// };

const routes = [
  "/login",
  "/signup",
  "/verify",
]

export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          {!routes.some(route => route == pathname) && <Navbar />}
          {children}
        </Provider>
      </body>
    </html>
  );
}
