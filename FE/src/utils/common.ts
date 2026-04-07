/**
 * Returns a random item from a given array.
 * @param items - An array of items of type T
 * @returns A single item of type T
 */
export const getRandomItem = <T>(items: T[]): T | undefined => {
   if (items.length === 0) return undefined;

   const randomIndex = Math.floor(Math.random() * items.length);
   return items[randomIndex];
};
