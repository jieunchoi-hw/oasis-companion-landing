import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const appBasePath =
  process.env.NEXT_PUBLIC_BASE_PATH ||
  (process.env.NODE_ENV === "production" ? "/oasis-companion-landing" : "");

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}

export function withBasePath(path: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${appBasePath}${normalizedPath}`;
}

export { appBasePath };
