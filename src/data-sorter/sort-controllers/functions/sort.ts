import { DataItem } from '../../../types/types';

export const sort_by = (data: DataItem[], key: string) => {
  const sortedData = data.sort((a, b) =>
    typeof a[key] === 'string' ? a[key].localeCompare(b[key]) : a[key] - b[key],
  );
  return sortedData;
};
