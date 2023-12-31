import {
  convertDistance,
  expandConversionDistanceRate,
} from './convertor-controller/convertor-controller';

export const convertor = (inputJSON: string) => {
  try {
    const data = JSON.parse(inputJSON);
    if (data.expand) {
      return expandConversionDistanceRate(data.expand);
    } else if (data.convert_to && data.distance) {
      return convertDistance(
        data.distance.value,
        data.distance.unit,
        data.convert_to,
      );
    }
  } catch (error) {
    console.error('Error processing input JSON:', error);
    return null;
  }
};
