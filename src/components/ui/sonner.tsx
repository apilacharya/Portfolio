"use client";

import { Toaster as SonnerToaster } from "sonner";

export function Toaster() {
  return (
    <SonnerToaster
      position="bottom-right"
      theme="system"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group flex w-full items-center gap-2 rounded-md border bg-background p-4 text-foreground",
          description: "text-sm text-muted-foreground",
          actionButton:
            "bg-primary text-primary-foreground hover:bg-primary/90",
          cancelButton: "bg-muted hover:bg-muted hover:text-muted-foreground",
        },
      }}
    />
  );
}
