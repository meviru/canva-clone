import { Toaster } from "@/components/ui/sonner";
import { StackProvider, StackTheme } from "@stackframe/stack";
import { Poppins } from "next/font/google";
import { stackServerApp } from "../stack";
import { ConvexClientProvider } from "./ConvexClientProvider";
import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


export const metadata = {
  title: "Cavna Clone",
  description: "Canva clone using Next.js",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <StackProvider app={stackServerApp}>
          <StackTheme>
            <ConvexClientProvider>
              {children}
              <Toaster />
            </ConvexClientProvider>
          </StackTheme>
        </StackProvider>
      </body>
    </html>
  );
}
