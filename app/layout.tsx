import { Nunito } from "next/font/google"

import './globals.css'
import Navbar from "./components/Navbar/Navbar"
import ClientOnly from "./components/ClientOnly"
import Modal from "./components/Modals/Modal"

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

const font = Nunito({
  subsets: ["latin"]
})



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Modal actionLabel="Submit" isOpen title="Hello" />
          <Navbar />
        </ClientOnly>

        {children}
      </body>
    </html>
  );
}
