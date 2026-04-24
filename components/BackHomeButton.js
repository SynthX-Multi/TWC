"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BackHomeButton() {
  return (
    <Link href="/" className="button secondary back-button">
      <ArrowLeft size={16} />
      <span>Back to home</span>
    </Link>
  );
}
