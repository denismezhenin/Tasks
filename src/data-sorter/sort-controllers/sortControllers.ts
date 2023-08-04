import { ConditionItem, DataItem } from '../../types/types';

export const sortControllers = {
  sort_by(data: DataItem[], key: string) {
    const sortedData = data.sort((a, b) =>
      typeof a[key] === 'string'
        ? a[key].localeCompare(b[key])
        : a[key] - b[key],
    );
    return sortedData;
  },
  include(data: DataItem[], condition: ConditionItem[]) {
    return data.filter((el) =>
      condition.every((element) =>
        Object.entries(element).every(([key, value]) => el[key] === value),
      ),
    );
  },
  exclude(data: DataItem[], condition: ConditionItem[]) {
    let filteredData = [...data];
    condition.forEach((element) => {
      for (const key in element) {
        filteredData = filteredData.filter((el) => el[key] !== element[key]);
      }
    });
    return filteredData;
  },
};
