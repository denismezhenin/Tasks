import { ConditionItem, DataItem } from '../../../types/types';

export const include = (data: DataItem[], condition: ConditionItem[]) => {
  return data.filter((el) =>
    condition.every((element) =>
      Object.entries(element).every(([key, value]) => el[key] === value),
    ),
  );
};
