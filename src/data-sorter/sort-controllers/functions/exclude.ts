import { ConditionItem, DataItem } from '../../../types/types';

export const exclude = (data: DataItem[], condition: ConditionItem[]) => {
  let filteredData = [...data];
  condition.forEach((element) => {
    for (const key in element) {
      filteredData = filteredData.filter((el) => el[key] !== element[key]);
    }
  });
  return filteredData;
};
