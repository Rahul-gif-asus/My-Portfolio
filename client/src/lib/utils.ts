import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  }).format(date);
}

export function formatDateRange(startDate: Date, endDate?: Date | null): string {
  const formattedStartDate = formatDate(startDate);
  
  if (!endDate) {
    return `${formattedStartDate} - Present`;
  }
  
  const formattedEndDate = formatDate(endDate);
  return `${formattedStartDate} - ${formattedEndDate}`;
}

export function scrollToSection(sectionId: string): void {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

export function toggleTheme(): void {
  const html = document.documentElement;
  const currentTheme = html.classList.contains('dark') ? 'dark' : 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  html.classList.toggle('dark');
  localStorage.setItem('theme', newTheme);
}
