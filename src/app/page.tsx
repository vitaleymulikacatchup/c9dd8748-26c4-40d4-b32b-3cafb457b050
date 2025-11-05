"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div className="min-h-screen">
        <div className="text-center py-20">
          <h1 className="text-4xl font-bold mb-4">Welcome to Webild</h1>
          <p className="text-lg text-gray-600">Component library ready for customization</p>
        </div>
      </div>
    </ThemeProvider>
  );
}