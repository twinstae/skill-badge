import { useLoaderData } from "@remix-run/react";

export const createUseLoaderData = <T>(fallback: T): () => T => {
  if (typeof __VITE__ === 'boolean'){
    return () => fallback
  }
  return () => useLoaderData() as T;
}