import {
  Search,
  GraduationCap,
  FileText,
  Youtube,
  Cloud,
  LibraryBig,
  School,
  Palette
} from "lucide-react";

export const publicShortcuts = [
  {
    name: "Google",
    url: "https://www.google.com",
    description: "Search the web quickly.",
    icon: Search,
    accent: "from-cyan-400 to-blue-500"
  },
  {
    name: "Google Classroom",
    url: "https://classroom.google.com",
    description: "Open your classes and assignments.",
    icon: GraduationCap,
    accent: "from-violet-400 to-fuchsia-500"
  },
  {
    name: "Google Docs",
    url: "https://docs.google.com",
    description: "Write and edit documents.",
    icon: FileText,
    accent: "from-emerald-400 to-teal-500"
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com",
    description: "Watch videos and playlists.",
    icon: Youtube,
    accent: "from-red-400 to-rose-500"
  },
  {
    name: "Google Drive",
    url: "https://drive.google.com",
    description: "Store and share files.",
    icon: Cloud,
    accent: "from-sky-400 to-indigo-500"
  },
  {
    name: "Wikipedia",
    url: "https://www.wikipedia.org",
    description: "Open a fast reference library.",
    icon: LibraryBig,
    accent: "from-slate-400 to-zinc-500"
  },
  {
    name: "Coursera",
    url: "/secret/coursera",
    description: "Hidden tools and extra links.",
    icon: School,
    accent: "from-orange-400 to-amber-500",
    internal: true
  },
  {
    name: "Canva",
    url: "https://www.canva.com",
    description: "Design graphics and layouts.",
    icon: Palette,
    accent: "from-pink-400 to-fuchsia-500"
  }
];

export const shortcutGroups = [
  {
    title: "Core",
    names: ["Google", "Google Classroom", "Google Docs", "YouTube"]
  },
  {
    title: "Utilities",
    names: ["Google Drive", "Wikipedia", "Coursera", "Canva"]
  }
];
