import { conversionDistanceRate } from '../db/db';

export const expandConversionDistanceRate = (expandedData) => {
  for (const key in expandedData) {
    if (typeof expandedData[key] !== 'number') {
      return 'You need to provide a number';
    } else if (conversionDistanceRate[key]) {
      return 'The value already exists';
    } else {
      conversionDistanceRate[key] = expandedData[key];
      return `${key} has been added to database`;
    }
  }
};

export const convertDistance = (
  distance: number,
  fromUnit: string,
  toUnit: string,
) => {
  if (!conversionDistanceRate[fromUnit] || !conversionDistanceRate[fromUnit]) {
    return 'Unsupported conversion units';
  }
  const value = (
    (distance * conversionDistanceRate[fromUnit]) /
    conversionDistanceRate[toUnit]
  ).toFixed(2);
  const result = { unit: toUnit, value };
  return JSON.stringify(result);
};
