import "./globals.css";
import Navbar from "../components/Navbar";
import AnimatedBackground from "../components/AnimatedBackground";
import { ThemeProvider } from "../components/ThemeProvider";
import ThemeToggle from "../components/ThemeToggle";

export const metadata = {
  title: "TWC",
  description: "A shortcut hub for your favorite apps."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <AnimatedBackground />
          <Navbar />
          <ThemeToggle placement="floating" />
          <main className="page-shell">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
