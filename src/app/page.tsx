"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div className="min-h-screen">
        {/* Add your content sections here when the plan is provided */}
      </div>
    </ThemeProvider>
  );
}