import "./globals.css";
import Navbar from "../components/Navbar";
import ThemeToggle from "../components/ThemeToggle";
import AnimatedBackground from "../components/AnimatedBackground";

export const metadata = {
  title: "TWC",
  description: "A shortcut hub for your favorite apps."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AnimatedBackground />
        <Navbar />
        <ThemeToggle />
        <main className="page-shell">{children}</main>
      </body>
    </html>
  );
}
