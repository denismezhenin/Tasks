import { conversionDistanceRate } from 'convertor/db/db';

export const expandConversionDistanceRate = (expandedData) => {
  for (const key in expandedData) {
    if (typeof expandedData[key] !== 'number') {
      console.log('You need to provide a number');
    } else if (conversionDistanceRate[key]) {
      console.log('The value already exists');
    } else {
      conversionDistanceRate[key] = expandedData[key];
    }
  }
};

export const convertDistance = (
  distance: number,
  fromUnit: string,
  toUnit: string,
) => {
  if (!conversionDistanceRate[fromUnit] || !conversionDistanceRate[fromUnit]) {
    return console.log('Unsupported conversion units');
  }
  const value = (
    (distance * conversionDistanceRate[fromUnit]) /
    conversionDistanceRate[toUnit]
  ).toFixed(2);
  const result = { unit: toUnit, value };
  return JSON.stringify(result);
};
