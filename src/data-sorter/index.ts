import { inputJSONData } from '../types/types';
import { sortControllers } from './sort-controllers/sortControllers';

export const sortIncomingData = (inputJSON: string) => {
  const data: inputJSONData = JSON.parse(inputJSON);
  if (!data.condition) {
    return inputJSON;
  }
  let result = [...data.data];
  for (const key in data.condition) {
    if (sortControllers[key]) {
      result = sortControllers[key](result, data.condition[key]);
    } else {
      console.log(`There is no ${key} in sort function`);
    }
  }
  return JSON.stringify(result);
};
