"use client";

import { toast as sonnerToast } from "sonner";

export function toast(message: string) {
  return sonnerToast(message);
}

toast.error = (message: string) => {
  return sonnerToast.error(message);
};

toast.success = (message: string) => {
  return sonnerToast.success(message);
};

toast.promise = <T>(
  promise: Promise<T>,
  {
    loading,
    success,
    error,
  }: { loading: string; success: string; error: string }
) => {
  return sonnerToast.promise(promise, {
    loading,
    success,
    error,
  });
};
