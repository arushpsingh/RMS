import { Inter } from 'next/font/google'
import './globals.css'
import CustomNavbar from "@/components/CustomNavbar";
import CustomFooter from "@/components/CustomFooter";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import UserProvider from "@/context/UserProvider";
import useUserStore from "@/context/UserContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <UserProvider>
                    <ToastContainer />
                    <CustomNavbar />
                    <div>{children}</div>
                    <CustomFooter />
                </UserProvider>
            </body>
        </html>
    );
}
