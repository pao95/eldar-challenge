import { useMemo } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useFilterData = <T extends Record<string, any>>(
  list: T[],
  searchTerm: string
): T[] => {
  return useMemo(() => {
    if (!searchTerm) return list;

    return list.filter((item) => {
      const values = Object.values(item).map((value) =>
        value.toString().toLowerCase()
      );
      return values.some((value) => value.includes(searchTerm.toLowerCase()));
    });
  }, [list, searchTerm]);
};

export default useFilterData;
