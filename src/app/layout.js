import "./globals.css";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from "./loading";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"font-sans"}>
        <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>

        <ToastContainer />
      </body>
    </html>
  );
}