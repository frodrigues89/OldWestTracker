// utils.ts

// Define um tipo genérico para representar o tipo de enum
type EnumType<T> = T[keyof T];

// Função genérica para obter todas as categorias de um enum
export function getAllCategories<T>(enumObj: T): EnumType<T>[] {
  return Object.values(enumObj);
}