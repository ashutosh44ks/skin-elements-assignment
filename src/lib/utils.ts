import type { Product } from "@/hooks/ProductsContext";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import * as XLSX from 'xlsx';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const extractCSVData = async (file: File): Promise<Product[]> => {
  const reader = new FileReader();
  reader.readAsArrayBuffer(file);
  return new Promise((resolve) => {
    reader.onload = (event) => {
      const buffer = event.target?.result;
      if (!buffer) return resolve([]);
      const workbook = XLSX.read(buffer, { type: "buffer" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet);
      console.log(jsonData);
      resolve(jsonData as Product[]);
    };
  });
};
